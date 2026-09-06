const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
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

  const mensagem = [
    'Olá, Golfinho Lavacar! Vim pelo site e gostaria de solicitar um atendimento.',
    '',
    `Nome: ${nome}`,
    telefone ? `Meu WhatsApp: ${telefone}` : '',
    `Veículo: ${veiculo}`,
    `Assunto: ${servico}`,
    observacao ? `Observação: ${observacao}` : '',
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/5542991022264?text=${encodeURIComponent(mensagem)}`, '_blank', 'noopener');
});
