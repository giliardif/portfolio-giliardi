const btn=document.getElementById('menuBtn'),mobile=document.getElementById('mobileNav');btn?.addEventListener('click',()=>mobile.classList.toggle('open'));mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const copyButton=document.querySelector('.copy-icon');
copyButton?.addEventListener('click',async()=>{
  const code=document.querySelector('.code-card code')?.innerText||'';
  try{
    await navigator.clipboard.writeText(code);
    copyButton.classList.add('copied');
    copyButton.setAttribute('aria-label','Código copiado');
    setTimeout(()=>{
      copyButton.classList.remove('copied');
      copyButton.setAttribute('aria-label','Copiar código');
    },1400);
  }catch(e){}
});
