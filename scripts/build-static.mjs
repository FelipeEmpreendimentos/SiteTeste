import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';

// Render the same React page without Vinext's Windows native shutdown failure.
// No browser JavaScript is required by this institutional page.
await mkdir('work', { recursive: true });
await mkdir('dist/client', { recursive: true });
const source = await readFile('app/page.tsx', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: {
  jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022,
}, reportDiagnostics: true });
const failures = (compiled.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
if (failures.length) throw new Error(ts.formatDiagnosticsWithColorAndContext(failures, {
  getCurrentDirectory: () => process.cwd(), getCanonicalFileName: s => s, getNewLine: () => '\n',
}));
await writeFile('work/page.mjs', compiled.outputText);
const { default: Home } = await import(pathToFileURL(resolve('work/page.mjs')));
const body = renderToStaticMarkup(createElement(Home));
const font = (await readFile('public/barlow-condensed-800.ttf')).toString('base64');
const css = (await readFile('app/globals.css', 'utf8')).replace("@import 'tailwindcss';", '').replace('/barlow-condensed-800.ttf', `data:font/ttf;base64,${font}`);
const favicon = await readFile('public/favicon.svg', 'utf8');
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#191c1f"><title>Auto Mecânica Vans | Linha leve e diesel em Pato Branco</title><meta name="description" content="Motores em geral, suspensão e freios. Auto Mecânica Vans no Bortot, Pato Branco. Ligue (46) 2604-0763."><link rel="icon" href="data:image/svg+xml,${encodeURIComponent(favicon)}"><style>${css}</style></head><body>${body}</body></html>`;
const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
for (const [, id] of body.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(id)) throw new Error(`Missing anchor ${id}`);
}
if (new Set(ids).size !== ids.length) throw new Error('Duplicate page ids');
if (/lorem ipsum|Untitled site|Building your site/i.test(html)) throw new Error('Starter content remains');
if (!html.includes('tel:+554626040763')) throw new Error('Missing verified telephone');
await writeFile('dist/client/index.html', html);
await writeFile('index.html', html);
console.log('Static site built successfully. Anchors and real contact verified. Standalone index.html generated.');
