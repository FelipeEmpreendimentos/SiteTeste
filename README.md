# Auto Mecânica Vans — apresentação comercial

Site institucional de uma página para a Auto Mecânica Vans, de Pato Branco. Abra `index.html` diretamente no navegador. A página é independente de instalação; o mapa incorporado requer internet.

Conteúdo: capa, oficina, motores/suspensão/freios, três avaliações reais, mapa, telefone e ações fixas no celular. Fontes e lacunas em `FONTES.md`.

## Edição

O conteúdo fica em `app/page.tsx`, o estilo em `app/globals.css`. Execute `npm install` e `npm run build` para atualizar `index.html`. O comando `npm run dev` oferece prévia com atualização automática.

O exportador estático renderiza os mesmos componentes React e inclui o script do formulário. Foi adotado porque o encerramento nativo do Vinext falhou neste ambiente Windows após a pré-renderização. A instalação e estrutura originais foram preservadas.

O formulário final prepara uma mensagem localmente. Sem número confirmado, mostra uma prévia e não envia dados. Para ativar, preencha `data-whatsapp` no formulário de `app/page.tsx` com o número confirmado no formato internacional (55 + DDD + número) e gere novamente o site. O link wa.me abrirá a mensagem; o visitante confirma o envio no WhatsApp. Nenhum dado é persistido pelo site.

## Uso comercial

Proposta visual para apresentação, não site oficial aprovado. Telefone e coordenadas conferidos diretamente no Google Maps; número do imóvel corroborado por cadastros. Sem depoimentos inventados, fotos de terceiros atribuídas à oficina, WhatsApp presumido ou horário semanal inventado.
