const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#whatsapp-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const telefone = document.querySelector('#telefone').value.trim();
  const veiculo = document.querySelector('#veiculo').value.trim();
  const servico = document.querySelector('#servico').value;
  const observacao = document.querySelector('#observacao').value.trim();

  const linhas = [
    'Olá, Lava Car Farias! Vim pelo site e gostaria de solicitar um atendimento.',
    '',
    `Nome: ${nome}`,
    telefone ? `Meu WhatsApp: ${telefone}` : '',
    `Veículo: ${veiculo}`,
    `Serviço: ${servico}`,
    observacao ? `Observação: ${observacao}` : '',
  ].filter(Boolean);

  window.open(`https://wa.me/5546999034127?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
});
