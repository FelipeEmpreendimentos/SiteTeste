(()=>{
  const form=document.getElementById('request-form');
  if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const get=key=>String(data.get(key)||'').trim();
    const message=[
      'Olá, Paulo Car! Gostaria de solicitar um orçamento.',
      'Nome: '+get('name'),
      'Meu WhatsApp: '+get('phone'),
      'Veículo: '+get('vehicle'),
      'Serviço: '+get('service'),
      get('notes')?'Observação: '+get('notes'):''
    ].filter(Boolean).join('\n');
    const destination=form.dataset.whatsapp;
    location.href='https://wa.me/'+destination+'?text='+encodeURIComponent(message);
  });
})();
