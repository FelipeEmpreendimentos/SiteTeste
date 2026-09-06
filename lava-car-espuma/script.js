const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const copyButton = document.querySelector('.copy-address');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.address);
    const original = copyButton.textContent;
    copyButton.textContent = 'Endereço copiado ✓';
    setTimeout(() => { copyButton.textContent = original; }, 2200);
  } catch {
    copyButton.textContent = 'Selecione o endereço acima';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
