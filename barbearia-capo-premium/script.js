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

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const servico = document.querySelector('#servico').value;
  const preferencia = document.querySelector('#preferencia').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();
  const linhas = [
    `Olá! Meu nome é ${nome}. Gostaria de falar com a Barbearia Capo Premium.`,
    `Assunto: ${servico}.`,
    preferencia ? `Preferência de dia/horário: ${preferencia}.` : '',
    mensagem ? `Mensagem: ${mensagem}` : ''
  ].filter(Boolean);
  window.open(`https://wa.me/5546988209410?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
});
