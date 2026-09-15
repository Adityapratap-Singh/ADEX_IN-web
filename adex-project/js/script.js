const siteIntro=document.getElementById('siteIntro');
document.body.classList.add('intro-active');
if(siteIntro){
	const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
	const introDuration=reducedMotion?0:5000;
	siteIntro.style.setProperty('--intro-fade-delay',`${Math.max(0,introDuration-700)}ms`);
	const progressBar=siteIntro.querySelector('.site-intro-progress span');
	if(progressBar&&introDuration){
		progressBar.style.animationDuration=`${introDuration}ms`;
	}
	const introSound=document.getElementById('introSound');
	let introSoundStarted=false;
	const playIntroSound=()=>{
		if(!introSound || introSoundStarted)return;
		introSound.volume=.65;
		const attempt=introSound.play();
		if(attempt && typeof attempt.then==='function'){
			attempt.then(()=>{
				introSoundStarted=true;
				removeSoundFallbackListeners();
			}).catch(()=>{});
		}
	};
	const removeSoundFallbackListeners=()=>{
		['pointerdown','keydown','touchstart','click'].forEach(eventName=>{
			document.removeEventListener(eventName,playIntroSound);
		});
	};
	// First attempt: play immediately on page load.
	// If the browser blocks audible autoplay, the first user interaction
	// (click/tap/key) becomes the fallback and starts the same sound.
	playIntroSound();
	['loadedmetadata','canplay','canplaythrough'].forEach(eventName=>{
		introSound.addEventListener(eventName,playIntroSound,{once:true});
	});
	addEventListener('load',playIntroSound,{once:true});
	addEventListener('pageshow',playIntroSound,{once:true});
	['pointerdown','keydown','touchstart','click'].forEach(eventName=>{
		document.addEventListener(eventName,playIntroSound,{passive:true});
	});
	document.addEventListener('visibilitychange',()=>{
		if(document.visibilityState==='visible' && introSound.paused) playIntroSound();
	},{once:true});
	setTimeout(()=>{
		siteIntro.classList.add('is-done');
		document.body.classList.remove('intro-active');
		document.body.classList.add('intro-complete');
		setTimeout(()=>siteIntro.remove(),700);
	},introDuration);
}
const team=[
{name:'Adityapratap Singh',role:'Founder & CEO',desc:'Owns the company vision, strategy, leadership and long-term direction.',image:'images/adityasingh.jpeg',linkedin:'https://www.linkedin.com/in/aadi-p-s/'},
{name:'Dhananjay Bajgude',role:'Chief Technology Officer',desc:'Owns technology, engineering, technical architecture and R&D.',image:'images/dhananjaybajgude.jpeg',linkedin:'https://www.linkedin.com/in/dhananjaybajgude'},
{name:'Sanket Kokane',role:'Chief Product Officer',desc:'Owns product strategy, user needs, priorities and the product roadmap.',image:'images/sanket.jpeg',linkedin:'https://www.linkedin.com/in/sanket-kokane-8968bb2b7'},
{name:'Avdhesh Kumar Gupta',role:'Chief Operating Officer',desc:'Owns operations, execution, processes and team coordination.',image:'images/avs.jpeg',linkedin:'https://www.linkedin.com/in/Avs-Avdhesh-gupta'},
{name:'Pallavi Garje',role:'Chief Financial Officer',desc:'Owns finance, budgeting, planning and financial sustainability.',image:'images/pallvai.jpeg',linkedin:'https://www.linkedin.com/in/pallavi-garje-4704a5381'},
{name:'Manas Koyande',role:'Chief Marketing Officer',desc:'Owns brand, marketing, communications and audience growth.',image:'images/manas.jpeg',linkedin:'https://www.linkedin.com/in/manas-koyande-b18249350/'}
];
const initials=n=>n.split(' ').map(x=>x[0]).slice(0,2).join('');
const teamGrid=document.getElementById('teamGrid');
team.forEach((m,i)=>{const card=document.createElement('article');card.className='team-card reveal';card.style.transitionDelay=`${i*70}ms`;card.innerHTML=`<div class="team-card-media"><div class="team-avatar"><img src="${m.image}" alt="${m.name}" onerror="this.remove();this.parentElement.textContent='${initials(m.name)}'"></div></div><div class="team-card-content"><h3>${m.name}</h3><p class="team-role">${m.role}</p><p class="team-desc">${m.desc}</p><a class="team-link" href="${m.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="${m.name} on LinkedIn"><span class="linkedin-mark">in</span><span>LinkedIn</span><span class="linkedin-arrow">↗</span></a></div>`;teamGrid.appendChild(card)});
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revealObserver.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const navbar=document.getElementById('navbar'),progress=document.getElementById('progress');function onScroll(){navbar.classList.toggle('scrolled',scrollY>30);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${h>0?scrollY/h*100:0}%`}addEventListener('scroll',onScroll,{passive:true});onScroll();
const menu=document.getElementById('mobileMenu'),backdrop=document.getElementById('menuBackdrop'),menuBtn=document.getElementById('menuBtn'),closeMenu=document.getElementById('closeMenu');function openMenu(){menu.classList.add('open');backdrop.classList.add('open');menu.setAttribute('aria-hidden','false');menuBtn.setAttribute('aria-expanded','true')}function shut(){menu.classList.remove('open');backdrop.classList.remove('open');menu.setAttribute('aria-hidden','true');menuBtn.setAttribute('aria-expanded','false')}menuBtn.addEventListener('click',openMenu);closeMenu.addEventListener('click',shut);backdrop.addEventListener('click',shut);menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',shut));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.desktop-nav a')];const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>sectionObserver.observe(s));
const stage=document.getElementById('heroStage');if(stage&&matchMedia('(pointer:fine)').matches){stage.addEventListener('mousemove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;stage.style.transform=`perspective(1100px) rotateX(${-y*4}deg) rotateY(${x*4}deg)`});stage.addEventListener('mouseleave',()=>stage.style.transform='')}
const glow=document.getElementById('cursorGlow');if(glow&&matchMedia('(pointer:fine)').matches){addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
const productCard=document.getElementById('productCard'),productDialog=document.getElementById('productDetails'),productClose=productDialog?.querySelector('.product-dialog-close');let productTrigger;
function openProductDetails(){productTrigger=document.activeElement;productDialog.hidden=false;productCard.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';productClose.focus()}
function closeProductDetails(){productDialog.hidden=true;productCard.setAttribute('aria-expanded','false');document.body.style.overflow='';productTrigger?.focus()}
if(productCard&&productDialog){productCard.addEventListener('click',openProductDetails);productCard.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProductDetails()}});productClose.addEventListener('click',closeProductDetails);productDialog.addEventListener('click',e=>{if(e.target===productDialog)closeProductDetails()});addEventListener('keydown',e=>{if(e.key==='Escape'&&!productDialog.hidden)closeProductDetails()})}
