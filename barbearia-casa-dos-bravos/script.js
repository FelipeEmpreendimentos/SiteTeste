const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const servico = document.querySelector('#servico').value;
  const preferencia = document.querySelector('#preferencia').value.trim();
  const observacao = document.querySelector('#observacao').value.trim();
  const linhas = [
    `Olá! Meu nome é ${nome}. Gostaria de agendar um horário na Casa dos Bravos.`,
    `Serviço: ${servico}.`,
    preferencia ? `Preferência de dia/horário: ${preferencia}.` : '',
    observacao ? `Observação: ${observacao}` : ''
  ].filter(Boolean);
  window.open(`https://wa.me/5546991157564?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
});
