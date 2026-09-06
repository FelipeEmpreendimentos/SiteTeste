(()=>{
  const form=document.getElementById('request-form');
  const preview=document.getElementById('preview');
  const status=document.getElementById('form-status');
  if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const get=key=>String(data.get(key)||'').trim();
    const message=[
      'Olá, Auto Mecânica Mazorana! Gostaria de solicitar um orçamento.',
      'Nome: '+get('name'),
      'Meu WhatsApp: '+get('phone'),
      'Veículo: '+get('vehicle'),
      'Necessidade: '+get('service'),
      get('notes')?'Observação: '+get('notes'):''
    ].filter(Boolean).join('\n');
    const destination=form.dataset.whatsapp;
    if(/^55\d{10,11}$/.test(destination)){
      location.href='https://wa.me/'+destination+'?text='+encodeURIComponent(message);
      return;
    }
    preview.textContent=message;
    preview.hidden=false;
    status.textContent='Mensagem preparada abaixo. Demonstração: nenhum dado foi enviado. O redirecionamento será ativado após a confirmação do WhatsApp da oficina.';
  });
  form.addEventListener('input',()=>{preview.hidden=true});
})();
