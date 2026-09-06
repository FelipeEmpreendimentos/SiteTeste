const menuButton = document.querySelector('.menu-button');
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

const phoneInput = document.querySelector('#telefone');
phoneInput?.addEventListener('input', (event) => {
  const digits = event.target.value.replace(/\D/g, '').slice(0, 11);
  let value = digits;
  if (digits.length > 2) value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length > 7) value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  event.target.value = value;
});

const form = document.querySelector('#whatsapp-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const destination = form.dataset.whatsapp;
  const lines = [
    'Olá, Lava Car Vande! Gostaria de solicitar um atendimento.',
    '',
    `Nome: ${data.get('nome')}`,
    `Meu WhatsApp: ${data.get('telefone')}`,
    `Veículo: ${data.get('veiculo')}`,
    `Serviço: ${data.get('servico')}`
  ];
  const note = String(data.get('observacao') || '').trim();
  if (note) lines.push(`Observação: ${note}`);
  window.location.href = `https://wa.me/${destination}?text=${encodeURIComponent(lines.join('\n'))}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
