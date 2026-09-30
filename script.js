const btn=document.getElementById('menuBtn'),mobile=document.getElementById('mobileNav');
btn?.addEventListener('click',()=>mobile.classList.toggle('open'));
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

// Experiência profissional — integrada ao layout atual.
const expStyle=document.createElement('link');
expStyle.rel='stylesheet';expStyle.href='experience.css';document.head.appendChild(expStyle);

const desktopNav=document.querySelector('.nav nav');
const projectsDesktop=desktopNav?.querySelector("a[href='#projetos']");
if(desktopNav&&projectsDesktop&&!desktopNav.querySelector("a[href='#experiencia']")){
  const a=document.createElement('a');a.href='#experiencia';a.textContent='Experiência';desktopNav.insertBefore(a,projectsDesktop);
}
const projectsMobile=mobile?.querySelector("a[href='#projetos']");
if(mobile&&projectsMobile&&!mobile.querySelector("a[href='#experiencia']")){
  const a=document.createElement('a');a.href='#experiencia';a.textContent='Experiência';mobile.insertBefore(a,projectsMobile);
  a.addEventListener('click',()=>mobile.classList.remove('open'));
}

const experienceHTML=`
<section class="section experience-section" id="experiencia">
  <div class="container">
    <div class="experience-head reveal">
      <div><div class="eyebrow">Experiência profissional</div><h2>Minha trajetória em <span>dados, processos e resultados.</span></h2></div>
      <p>Ao longo da minha carreira, atuei em operações, logística e dados, sempre buscando transformar processos em soluções mais eficientes. Essa experiência prática me deu uma visão completa do negócio e fortaleceu minhas habilidades em análise de dados, BI, automação e desenvolvimento de soluções.</p>
    </div>
    <div class="experience-highlights reveal">
      <article><div class="exp-hi-icon">▥</div><div><strong>Evolução contínua</strong><small>Da operação à inteligência de dados</small></div></article>
      <article><div class="exp-hi-icon">⚙</div><div><strong>Foco em resultados</strong><small>Processos mais eficientes e insights reais</small></div></article>
      <article><div class="exp-hi-icon">◎</div><div><strong>Visão de negócio</strong><small>Logística, operações e tecnologia</small></div></article>
    </div>
    <div class="experience-list">
      <article class="exp-item reveal">
        <div class="exp-date">Jan 2026 – Atual</div>
        <div class="exp-card">
          <div class="exp-card-top"><div class="company-mark ache">aché</div><div class="exp-role"><h3>Analista Pleno – Dados</h3><span class="company">Aché Laboratórios</span><span class="place">Cabo de Santo Agostinho, PE • Presencial</span></div><span class="exp-current">Atual</span></div>
          <div class="exp-body"><p>Desenvolvimento e otimização de dashboards executivos, modelos analíticos e KPIs críticos, além da construção de fluxos automatizados e soluções de dados end-to-end.</p><div class="exp-details"><ul><li>Tratamento, modelagem e validação de dados de diferentes fontes.</li><li>Automação de processos para reduzir dependência manual e aumentar eficiência.</li><li>Apoio às áreas operacionais e de planejamento na identificação de gargalos e oportunidades.</li></ul></div><span class="exp-more">Ver mais ↓</span><div class="exp-tags"><span>SAP</span><span>Power BI</span><span>Power Automate</span><span>Excel</span><span>SharePoint</span></div></div>
        </div>
      </article>
      <article class="exp-item reveal">
        <div class="exp-date">Mai 2025 – Jan 2026</div>
        <div class="exp-card"><div class="exp-card-top"><div class="company-mark fm">FM<br>TRANS</div><div class="exp-role"><h3>Analista de Operações</h3><span class="company">FM Transportes</span><span class="place">Recife, PE • Presencial</span></div></div><div class="exp-body"><p>Atuação no acompanhamento operacional e análise de performance, conectando indicadores, planejamento e rotina logística.</p><div class="exp-tags"><span>Excel</span><span>Indicadores</span><span>Planejamento</span><span>Logística</span></div></div></div>
      </article>
      <article class="exp-item reveal">
        <div class="exp-date">Abr 2022 – Jan 2025</div>
        <div class="exp-card"><div class="exp-card-top"><div class="company-mark jt">J&T</div><div class="exp-role"><h3>J&T Express Brasil</h3><span class="company">Dados, BI e Liderança Operacional</span><span class="place">Jaboatão dos Guararapes, PE • Presencial</span></div></div><div class="exp-progress"><div><strong>Supervisor de Operações Logística</strong><small>Dez 2023 – Jan 2025</small></div><div><strong>Analista Dados e Indicadores BI</strong><small>Abr 2022 – Dez 2023</small></div></div><div class="exp-body"><div class="exp-details"><ul><li>Planejamento, controle e execução de processos logísticos e gestão de custos.</li><li>Gestão de pessoas, indicadores e análises para melhoria contínua.</li><li>Elaboração de dashboards gerenciais e estratégicos em Power BI.</li><li>Coleta e análise de dados para suporte ao planejamento e tomada de decisão.</li></ul></div><span class="exp-more">Ver mais ↓</span><div class="exp-tags"><span>Power BI</span><span>Excel</span><span>Análise de dados</span><span>Indicadores</span><span>Gestão operacional</span></div></div></div>
      </article>
      <article class="exp-item reveal">
        <div class="exp-date">Dez 2021 – Mar 2022</div>
        <div class="exp-card"><div class="exp-card-top"><div class="company-mark ml">ML</div><div class="exp-role"><h3>Assistente de Transporte Sr</h3><span class="company">Luandre RH • operação Mercado Livre</span><span class="place">Jaboatão dos Guararapes, PE • Temporário</span></div></div><div class="exp-body"><p>Planejamento e acompanhamento do Mercado Envios Extra, monitoramento de entregas, tratativa de ocorrências e indicadores logísticos.</p><div class="exp-tags"><span>Excel</span><span>Indicadores</span><span>Acompanhamento de rotas</span></div></div></div>
      </article>
      <article class="exp-item reveal">
        <div class="exp-date">Jan 2016 – Set 2021</div>
        <div class="exp-card"><div class="exp-card-top"><div class="company-mark tc">3<br>corações</div><div class="exp-role"><h3>Grupo 3corações</h3><span class="company">Evolução na operação e planejamento logístico</span><span class="place">Jaboatão dos Guararapes, PE • Presencial</span></div></div><div class="exp-progress"><div><strong>Estagiário → Assistente</strong><small>Jan 2016 – Jan 2019</small></div><div><strong>Analista de Logística PL</strong><small>Jan 2019 – Set 2021</small></div></div><div class="exp-body"><div class="exp-details"><ul><li>Controle e planejamento operacional da distribuição em Pernambuco.</li><li>Relatórios estratégicos para gestão de custos e tomada de decisão.</li><li>Roteirização, gestão de transportadoras e indicadores logísticos.</li><li>Gestão de pessoas e suporte à operação.</li></ul></div><span class="exp-more">Ver mais ↓</span><div class="exp-tags"><span>Excel</span><span>Logística</span><span>Roteirização</span><span>Indicadores</span></div></div></div>
      </article>
    </div>
  </div>
</section>`;
const projects=document.getElementById('projetos');
if(projects&&!document.getElementById('experiencia'))projects.insertAdjacentHTML('beforebegin',experienceHTML);

document.querySelectorAll('.exp-more').forEach(el=>el.addEventListener('click',()=>{
  const card=el.closest('.exp-card');card.classList.toggle('open');el.textContent=card.classList.contains('open')?'Ver menos ↑':'Ver mais ↓';
}));

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const copyButton=document.querySelector('.copy-icon');
copyButton?.addEventListener('click',async()=>{
  const code=document.querySelector('.code-card code')?.innerText||'';
  try{await navigator.clipboard.writeText(code);copyButton.classList.add('copied');copyButton.setAttribute('aria-label','Código copiado');setTimeout(()=>{copyButton.classList.remove('copied');copyButton.setAttribute('aria-label','Copiar código')},1400)}catch(e){}
});
