const IMG = {
  "active":"assets/products/active.webp",
  "relax":"assets/products/relax.webp",
  "flow":"assets/products/flow.webp",
  "energy":"assets/products/energy.webp",
  "fem":"assets/products/fem.webp",
  "lions_mane":"assets/products/lions_mane.webp",
  "reishi":"assets/products/reishi.webp",
  "maitake":"assets/products/maitake.webp"
};

const ROLL = [
  {id:'active', name:'active', benefit:'Bienestar físico',   color:'#4e9d3f', desc:'Un blend para aplicar antes o después de tu actividad física favorita. Relaja y revitaliza tus músculos.',
    extractos:[
      ['Árnica montana','uno de los más efectivos calmantes naturales con propiedades refrescantes, brinda alivio en zonas de la piel marcadas por golpes o picaduras.'],
      ['Enebro','se caracteriza por sus propiedades relajantes, con acción reconfortante, facilita la recuperación del tono muscular.'],
      ['Alcanfor','compuesto natural con efecto refrescante que promueve el bienestar muscular y la descongestión de las vías aéreas.'],
      ['Mentol','de cualidades antisépticas, brinda sensación de frescura.']
    ],
    aceites:[
      ['Romero','antioxidante natural de origen mediterráneo, posee propiedades renovadoras, ayuda a energizar y mantener la concentración.'],
      ['Eucalipto','su inigualable frescura ayuda a una respiración placentera, especialmente en cambios de estación.'],
      ['Menta','su intensa y refrescante fragancia, anima los sentidos y promueve una sensación de energía y concentración.']
    ]},
  {id:'relax',  name:'relax',  benefit:'Bienestar emocional',color:'#8a78bf', desc:'Tu aliado para neutralizar el estrés y ayudar a la relajación mental.',
    extractos:[
      ['Tilo','uno de los sedantes naturales más reconocidos. Ayuda a relajar, despejar y distender la mente.'],
      ['Salvia','hierba utilizada por los antiguos egipcios en el estímulo de los sentidos. A partir de su efecto refrescante y purificante activa tus deseos de bienestar.'],
      ['Cola de caballo','pertenece al grupo de plantas más antiguas de la tierra. Sus propiedades antioxidantes proporcionan nutrición y juventud a la piel.']
    ],
    aceites:[
      ['Lavanda','conocida por sus notas aromáticas relajantes, es una de las preferidas a la hora de apaciguar la ansiedad y reducir tensiones.'],
      ['Bergamota','de origen frutal, con aroma fresco y relajante, contribuye a disminuir la ansiedad, aliviar el estrés y mejorar el estado de ánimo.'],
      ['Palmarosa','símbolo de tranquilidad y equilibrio, ayuda a esclarecer las ideas y alejar los malos pensamientos.'],
      ['Verbena','hierba ancestral de gran reconocimiento por considerarse un importante estimulante anímico para afrontar la fatiga y el estrés.']
    ]},
  {id:'flow',   name:'flow',   benefit:'Bienestar diario',   color:'#e3a32f', desc:'Ideal para pies y piernas cansadas, ayuda a la circulación.',
    extractos:[
      ['Hamamelis','revigoriza la piel. Refresca y afloja la contracción provocada por los calambres. Posee propiedades astringentes y desinflamatorias.'],
      ['Árnica','uno de los más efectivos calmantes naturales con propiedades refrescantes, brinda alivio en zonas de la piel marcadas por golpes o picaduras.'],
      ['Manzanilla','limpia, tonifica, suaviza y reduce poros. Antiséptico y cicatrizante. Reconfortante frente a piel seca.'],
      ['Castaño de Indias','reconocido por su capacidad para prevenir calambres, así como también por sus propiedades estimulantes y reafirmantes.']
    ],
    aceites:[
      ['Ciprés','característico por su aroma amaderado. Excelente contra hemorroides, várices y piel grasa.'],
      ['Romero','antioxidante natural de origen mediterráneo, posee propiedades renovadoras, ayuda a energizar y mantener la concentración.'],
      ['Limón','con su aroma penetrante, estimula la circulación cutánea. Posee propiedades astringentes de la piel y regula su oleosidad.']
    ]},
  {id:'energy', name:'energy', benefit:'Energía y foco',     color:'#df5a2b', desc:'Un impulso para incentivar la motivación y alejar la sensación de cansancio.',
    extractos:[
      ['Guduchi','planta originaria de la India tropical, utilizada para compensar la falta de energía.'],
      ['Ginseng siberiano','originaria de Siberia, aumenta la sensación de vitalidad.'],
      ['Jengibre','planta de flores del sudeste asiático, ayuda a acelerar el metabolismo.'],
      ['Guaraná','fruto del amazonas, reconocida por mejorar el rendimiento físico y mental.']
    ],
    aceites:[
      ['Naranja','originaria de Asia, contiene antioxidantes que ayudan a mantener la piel sana.'],
      ['Limón','con su aroma penetrante, estimula la circulación cutánea. Posee propiedades astringentes de la piel y regula su oleosidad.'],
      ['Lima','fruta proveniente de Asia, asociada por su poder para alejar la fatiga.']
    ]},
  {id:'fem',    name:'fem',    benefit:'Bienestar femenino', color:'#d24a86', desc:'Promueve el bienestar y brinda alivio al dolor durante el ciclo menstrual.',
    extractos:[
      ['Manzanilla','su nombre se debe a su aroma, que recuerda al de la manzana. Característica por sus propiedades antiespasmódicas.'],
      ['Tanaceto','es una planta herbácea, perenne, aromática y robusta. Se le atribuyen propiedades emenagogas, es decir, que alivia los síntomas de la menstruación y reduce los malestares que produce.'],
      ['Menta','hierba perenne de la familia de las lamináceas. Reconocida por sus propiedades antiespasmódicas.'],
      ['Rosa mosqueta','es un arbusto espinoso de la familia de las rosáceas. Tiene propiedades analgésicas que pueden ayudar a aliviar los dolores menstruales.']
    ],
    aceites:[
      ['Salvia','las especies de Salvia incluyen hierbas anuales, bienales y perennes. Asociada a ayudar a regular el ciclo menstrual.'],
      ['Geranio','es una planta herbácea que se caracteriza por sus flores coloridas. Ayuda a equilibrar los niveles de estrógeno, reduciendo los síntomas de la tensión premenstrual.'],
      ['Neroli','se obtiene de las flores del naranjo amargo. Ayuda a calmar dolores menstruales y estomacales.']
    ]},
];

const FUNGI = [
  {id:'lions_mane', name:"Lion's Mane", benefit:'Concentración · Memoria · Mente', color:'#1f5195', prospecto:'assets/prospectos/lions_mane.pdf'},
  {id:'reishi',     name:'Reishi',      benefit:'Descanso · Sueño · Armonía',      color:'#5a438b', prospecto:'assets/prospectos/reishi.pdf'},
  {id:'maitake',    name:'Maitake',     benefit:'Defensas · Organismo · Equilibrio',color:'#de9932', prospecto:'assets/prospectos/maitake.pdf'},
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
  rForm=document.getElementById('rollFormula'), rFormBody=document.getElementById('rollFormulaBody'),
  rSec=document.getElementById('roll');
function fmGroup(title,items){
  return '<h4>'+title+'</h4><ul>'+items.map(function(it){return '<li><b>'+it[0]+'</b><span>'+it[1]+'</span></li>';}).join('')+'</ul>';
}
function selRoll(i){
  const p=ROLL[i];
  rImg.src=IMG[p.id]; rName.textContent=p.name; rBen.textContent=p.benefit;
  rLine.textContent='On-Roll'; rLine.style.color=p.color; rName.style.color='var(--ink)';
  rDesc.textContent=p.desc; rHalo.style.background='radial-gradient(circle,'+p.color+',transparent 70%)';
  rFeat.style.background='color-mix(in srgb,'+p.color+' 9%, #f7f4ed)';
  rBuy.href=ROLL_BUY; rBuy.target='_blank';
  if(rFormBody){ rFormBody.innerHTML=fmGroup('Extractos vegetales',p.extractos)+fmGroup('Aceites esenciales',p.aceites); }
  if(rForm){ rForm.style.background='color-mix(in srgb,'+p.color+' 13%, #fff)'; rForm.open=false; rForm.classList.remove('animating'); if(rFormBody) rFormBody.style.maxHeight=''; }
  [...thumbs.children].forEach((b,k)=>b.classList.toggle('active',k===i));
  rFeat.classList.remove('spin'); void rFeat.offsetWidth; rFeat.classList.add('spin');
}
ROLL.forEach((p,i)=>{
  const b=document.createElement('button');
  b.style.setProperty('--accent',p.color);
  b.innerHTML='<img loading="lazy" src="'+IMG[p.id]+'" alt="'+p.name+'">';
  b.onclick=()=>{selRoll(i);resetAuto();};
  thumbs.appendChild(b);
});
let idx=0; selRoll(0);
let auto=null, hovering=false;
function startAuto(){ if(!auto) auto=setInterval(()=>{idx=(idx+1)%ROLL.length;selRoll(idx);},4200); }
function stopAuto(){ clearInterval(auto); auto=null; }
// Gira solo si no estás encima y la fórmula está cerrada
function updateAuto(){ if(hovering || (rForm && rForm.open)) stopAuto(); else startAuto(); }
function resetAuto(){ stopAuto(); updateAuto(); }
updateAuto();
rFeat.addEventListener('mouseenter',()=>{hovering=true; updateAuto();});
rFeat.addEventListener('mouseleave',()=>{hovering=false; updateAuto();});
if(rForm) rForm.addEventListener('toggle',updateAuto);

// ---- Fungi grid ----
const FUNGI_BUY='https://www.thebcompany.com.ar/search/?q=on%2Bfungi&brand=On-Fungi';
const fg=document.getElementById('fungiGrid');
FUNGI.forEach(f=>{
  const c=document.createElement('div'); c.className='fcard'; c.style.setProperty('--accent',f.color);
  c.innerHTML='<img loading="lazy" src="'+IMG[f.id]+'" alt="'+f.name+'"><h3>On-Fungi</h3><div class="fname">'+f.name+'</div><div class="fben">'+f.benefit+'</div>'
    +(f.prospecto?'<a class="fprospecto" href="'+f.prospecto+'" target="_blank" rel="noopener">Ver prospecto</a>':'');
  c.style.cursor='pointer';
  c.onclick=()=>window.open(FUNGI_BUY,'_blank');
  const link=c.querySelector('.fprospecto');
  if(link) link.addEventListener('click',e=>e.stopPropagation());
  fg.appendChild(c);
});

// ---- Combos ----
const cg=document.getElementById('comboGrid');
COMBOS.forEach(co=>{
  const stack=co.items.map(id=>'<img loading="lazy" src="'+IMG[id]+'">').join('');
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
  var logos = [['assets/logos-clientes/farmacity.webp','Farmacity'],['assets/logos-clientes/suizo.webp','Suizo'],
               ['assets/logos-clientes/delsud.webp','Del Sud'],['assets/logos-clientes/gps.webp','GPS'],
               ['assets/logos-clientes/selma.webp','Selma'],['assets/logos-clientes/tkl.webp','TKL']];
  function card(l){
    var d=document.createElement('div'); d.className='logo-card';
    var img=document.createElement('img');
    img.src=l[0]; img.alt=l[1]; img.loading='lazy';
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