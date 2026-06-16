const IMG = {
  "active":"assets/products/active.png",
  "relax":"assets/products/relax.png",
  "flow":"assets/products/flow.png",
  "energy":"assets/products/energy.png",
  "fem":"assets/products/fem.png",
  "lions_mane":"assets/products/lions_mane.png",
  "reishi":"assets/products/reishi.png",
  "maitake":"assets/products/maitake.png"
};

const ROLL = [
  {id:'active', name:'active', benefit:'Bienestar físico',   color:'#4e9d3f', desc:'Un blend para aplicar antes o después de tu actividad física favorita. Relaja y revitaliza tus músculos.'},
  {id:'relax',  name:'relax',  benefit:'Bienestar emocional',color:'#8a78bf', desc:'Tu aliado para neutralizar el estrés y ayudar a la relajación mental.'},
  {id:'flow',   name:'flow',   benefit:'Bienestar diario',   color:'#e3a32f', desc:'Ideal para pies y piernas cansadas, ayuda a la circulación.'},
  {id:'energy', name:'energy', benefit:'Energía y foco',     color:'#df5a2b', desc:'Un impulso para incentivar la motivación y alejar la sensación de cansancio.'},
  {id:'fem',    name:'fem',    benefit:'Bienestar femenino', color:'#d24a86', desc:'Promueve el bienestar y brinda alivio al dolor durante el ciclo menstrual.'},
];

const FUNGI = [
  {id:'lions_mane', name:"Lion's Mane", benefit:'Concentración · Memoria · Mente', color:'#1f5195'},
  {id:'reishi',     name:'Reishi',      benefit:'Descanso · Sueño · Armonía',      color:'#5a438b'},
  {id:'maitake',    name:'Maitake',     benefit:'Defensas · Organismo · Equilibrio',color:'#de9932'},
  // Ocultos hasta su lanzamiento (año próximo): Shiitake, Agaricus Blazei, Tremella
  // {id:'shiitake',   name:'Shiitake',    benefit:'Corazón · Circulación · Vitalidad',color:'#b03461'},
  // {id:'agaricus',   name:'Agaricus',    benefit:'Metabolismo · Organismo · Balance',color:'#2f9565'},
  // {id:'tremella',   name:'Tremella',    benefit:'Piel · Cabello · Brillo',         color:'#c74e84'},
];

const COMBOS = [
  {title:'Combo Deporte', items:['active','energy'], desc:'Para el cuerpo activo y la energía que necesitás.'},
  {title:'Combo Mujer',   items:['fem','flow'],      desc:'Bienestar femenino y equilibrio diario.'},
  {title:'Relax y Energy', items:['relax','energy'], desc:'Equilibrio natural para mente y energía.'},
];

const BUY='https://www.thebcompany.com.ar/marca?mpage=3&brand=On-Balm|On-Roll|On-Fungi';
const ROLL_BUY='https://www.thebcompany.com.ar/search/?q=on%2Bfungi&brand=On-Roll';

// ---- On-Roll selector ----
const thumbs=document.getElementById('rollThumbs');
const rImg=document.getElementById('rollImg'), rName=document.getElementById('rollName'),
  rBen=document.getElementById('rollBenefit'), rLine=document.getElementById('rollLine'),
  rDesc=document.getElementById('rollDesc'), rHalo=document.getElementById('rollHalo'),
  rFeat=document.getElementById('rollFeature'), rBuy=document.getElementById('rollBuy'),
  rSec=document.getElementById('roll');
function selRoll(i){
  const p=ROLL[i];
  rImg.src=IMG[p.id]; rName.textContent=p.name; rBen.textContent=p.benefit;
  rLine.textContent='On-Roll'; rLine.style.color=p.color; rName.style.color='var(--ink)';
  rDesc.textContent=p.desc; rHalo.style.background='radial-gradient(circle,'+p.color+',transparent 70%)';
  rFeat.style.background='color-mix(in srgb,'+p.color+' 9%, #f7f4ed)';
  rBuy.href=ROLL_BUY; rBuy.target='_blank';
  [...thumbs.children].forEach((b,k)=>b.classList.toggle('active',k===i));
  rFeat.classList.remove('spin'); void rFeat.offsetWidth; rFeat.classList.add('spin');
}
ROLL.forEach((p,i)=>{
  const b=document.createElement('button');
  b.style.setProperty('--accent',p.color);
  b.innerHTML='<img src="'+IMG[p.id]+'" alt="'+p.name+'">';
  b.onclick=()=>{selRoll(i);resetAuto();};
  thumbs.appendChild(b);
});
let idx=0; selRoll(0);
let auto=setInterval(()=>{idx=(idx+1)%ROLL.length;selRoll(idx);},4200);
function resetAuto(){clearInterval(auto);auto=setInterval(()=>{idx=(idx+1)%ROLL.length;selRoll(idx);},4200);}
rFeat.addEventListener('mouseenter',()=>clearInterval(auto));
rFeat.addEventListener('mouseleave',resetAuto);

// ---- Fungi grid ----
const FUNGI_BUY='https://www.thebcompany.com.ar/search/?q=on%2Bfungi&brand=On-Fungi';
const fg=document.getElementById('fungiGrid');
FUNGI.forEach(f=>{
  const c=document.createElement('div'); c.className='fcard'; c.style.setProperty('--accent',f.color);
  c.innerHTML='<img src="'+IMG[f.id]+'" alt="'+f.name+'"><h3>On-Fungi</h3><div class="fname">'+f.name+'</div><div class="fben">'+f.benefit+'</div>';
  c.style.cursor='pointer';
  c.onclick=()=>window.open(FUNGI_BUY,'_blank');
  fg.appendChild(c);
});

// ---- Combos ----
const cg=document.getElementById('comboGrid');
COMBOS.forEach(co=>{
  const stack=co.items.map(id=>'<img src="'+IMG[id]+'">').join('');
  const c=document.createElement('div'); c.className='combo';
  c.innerHTML='<div class="stack">'+stack+'</div><h3>'+co.title+'</h3><p>'+co.desc+'</p><div class="price">Ver combo →</div>';
  c.onclick=()=>window.open(BUY,'_blank');
  c.style.cursor='pointer';
  cg.appendChild(c);
});

// ---- Reveal on scroll ----
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ---- Capsule open (al scrollear se abre; click para abrir/cerrar) ----
const fungiSec=document.getElementById('fungi');
const capIO=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){fungiSec.classList.add('is-open','cap-open');capIO.disconnect();}}),{threshold:.4});
capIO.observe(fungiSec);
const capsuleEl=fungiSec.querySelector('.capsule');
if(capsuleEl) capsuleEl.addEventListener('click',()=>fungiSec.classList.toggle('cap-open'));

// ---- Mobile nav ----
const burger=document.getElementById('burger'), nl=document.getElementById('navlinks');
burger.onclick=()=>nl.classList.toggle('open');
nl.querySelectorAll('a').forEach(a=>a.onclick=()=>nl.classList.remove('open'));

// ===== Carrusel de logos de clientes (marquee continuo, sin huecos) =====
(function(){
  var track = document.getElementById('logoTrack');
  if(!track) return;
  var logos = [['farmacity','Farmacity'],['suizo','Suizo'],['delsud','Del Sud'],
               ['gps','GPS'],['selma','Selma'],['tkl','TKL']];
  function card(l){
    var d=document.createElement('div'); d.className='logo-card';
    var img=document.createElement('img');
    img.src='assets/logos-clientes/'+l[0]+'.png'; img.alt=l[1]; img.loading='lazy';
    d.appendChild(img); return d;
  }
  function addGroup(){ logos.forEach(function(l){ track.appendChild(card(l)); }); }
  // Repetir el grupo hasta que UNA mitad cubra el ancho visible (evita el hueco en blanco)
  addGroup();
  var guard=0;
  while(track.scrollWidth < window.innerWidth + 240 && guard < 12){ addGroup(); guard++; }
  var halfWidth = track.scrollWidth;
  // Duplicar la mitad para el loop -50% sin saltos
  track.insertAdjacentHTML('beforeend', track.innerHTML.replace(/alt="[^"]*"/g,'alt=""'));
  // Velocidad constante (~70 px/s) sin importar cuántas copias haya
  track.style.animationDuration = Math.max(18, Math.round(halfWidth/70)) + 's';
})();

// ===== Acordeon On-Balm: despliegue/colapso suave por altura =====
document.querySelectorAll('.formula').forEach(function(d){
  var body = d.querySelector('.formula-body');
  var sum  = d.querySelector('summary');
  if(!body || !sum) return;
  sum.addEventListener('click', function(e){
    e.preventDefault();
    if(d.classList.contains('animating')) return;
    d.classList.add('animating');
    if(d.open){
      body.style.maxHeight = body.scrollHeight + 'px';
      void body.offsetHeight;                 // forzar reflow para que la transición arranque
      body.style.maxHeight = '0px';
      body.addEventListener('transitionend', function te(ev){
        if(ev.propertyName !== 'max-height') return;
        d.open = false; body.style.maxHeight = ''; d.classList.remove('animating');
        body.removeEventListener('transitionend', te);
      });
    } else {
      d.open = true;
      body.style.maxHeight = '0px';
      void body.offsetHeight;                 // forzar reflow
      body.style.maxHeight = body.scrollHeight + 'px';
      body.addEventListener('transitionend', function te(ev){
        if(ev.propertyName !== 'max-height') return;
        body.style.maxHeight = ''; d.classList.remove('animating');
        body.removeEventListener('transitionend', te);
      });
    }
  });
});