import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const fallbackTeam = [
  {name:"Adityapratap Singh", role:"Founder & CEO", desc:"Owns the company vision, strategy, leadership and long-term direction.", image:"/images/adityasingh.jpeg", linkedin:"https://www.linkedin.com/in/aadi-p-s/", slug:"adityapratap-singh"},
  {name:"Dhananjay Bajgude", role:"Chief Technology Officer", desc:"Owns technology, engineering, technical architecture and R&D.", image:"/images/dhananjaybajgude.jpeg", linkedin:"https://www.linkedin.com/in/dhananjaybajgude"},
  {name:"Sanket Kokane", role:"Chief Product Officer", desc:"Owns product strategy, user needs, priorities and the product roadmap.", image:"/images/sanket.jpeg", linkedin:"https://www.linkedin.com/in/sanket-kokane-8968bb2b7"},
  {name:"Avdhesh Kumar Gupta", role:"Chief Operating Officer", desc:"Owns operations, execution, processes and team coordination.", image:"/images/avs.jpeg", linkedin:"https://www.linkedin.com/in/Avs-Avdhesh-gupta"},
  {name:"Pallavi Garje", role:"Chief Financial Officer", desc:"Owns finance, budgeting, planning and financial sustainability.", image:"/images/pallvai.jpeg", linkedin:"https://www.linkedin.com/in/pallavi-garje-4704a5381"},
  {name:"Manas Koyande", role:"Chief AI Officer (CAIO)", desc:"Leads AI strategy, development and implementation.", image:"/images/manas.jpeg", linkedin:"https://www.linkedin.com/"}
];
const fallbackProducts = [{
  name:"ADEX_ISL", category:"PRODUCT 01 · IN DEVELOPMENT",
  subtitle:"Indian Sign Language technology",
  summary:"A technology concept exploring how computer vision and local processing can support communication through Indian Sign Language.",
  status:"In development",
  tags:["Computer Vision","On-device AI","Accessibility"],
  features:["Indian Sign Language gesture recognition","Real-time translation support","Privacy-conscious local processing","Accessible experiences for real-world use"]
}];

export default function Home() {
  const [team, setTeam] = useState(fallbackTeam);
  const [products, setProducts] = useState(fallbackProducts);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [introMounted, setIntroMounted] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [apiStatus, setApiStatus] = useState("fallback");
  const introAudioRef = useRef(null);
  const glowRef = useRef(null);
  const stageRef = useRef(null);
  const [introDuration] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 5000
  );

  useEffect(() => {
    document.body.classList.add("intro-active");

    const audio = introAudioRef.current;
    let soundStarted = false;
    const removeSoundListeners = () =>
      ["pointerdown", "keydown", "touchstart", "click"].forEach(e => document.removeEventListener(e, playIntroSound));
    const playIntroSound = () => {
      if (!audio || soundStarted) return;
      audio.volume = 0.65;
      const attempt = audio.play();
      if (attempt && typeof attempt.then === "function") {
        attempt.then(() => { soundStarted = true; removeSoundListeners(); }).catch(() => {});
      }
    };
    playIntroSound();
    ["loadedmetadata", "canplay", "canplaythrough"].forEach(e => audio?.addEventListener(e, playIntroSound, { once: true }));
    window.addEventListener("load", playIntroSound, { once: true });
    window.addEventListener("pageshow", playIntroSound, { once: true });
    ["pointerdown", "keydown", "touchstart", "click"].forEach(e => document.addEventListener(e, playIntroSound, { passive: true }));

    const doneTimer = window.setTimeout(() => {
      setIntroVisible(false);
      document.body.classList.remove("intro-active");
      document.body.classList.add("intro-complete");
      removeSoundListeners();
    }, introDuration);
    const removeTimer = window.setTimeout(() => setIntroMounted(false), introDuration + 700);

    fetch(`${import.meta.env.VITE_API_URL || ""}/api/team`).then(r => r.ok ? r.json() : Promise.reject()).then(d => {
      if (Array.isArray(d) && d.length) { setTeam(d); setApiStatus("api"); }
    }).catch(() => {});
    fetch(`${import.meta.env.VITE_API_URL || ""}/api/products`).then(r => r.ok ? r.json() : Promise.reject()).then(d => {
      if (Array.isArray(d) && d.length) { setProducts(d); setApiStatus("api"); }
    }).catch(() => {});

    const reveal = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

    const sectionObserver = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) setActiveSection(e.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(s => sectionObserver.observe(s));

    const onScroll = () => {
      document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 30);
      const progress = document.getElementById("progress");
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${h > 0 ? window.scrollY / h * 100 : 0}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const canHover = window.matchMedia("(pointer: fine)").matches;
    const stage = stageRef.current;
    const glow = glowRef.current;
    const onStageMove = e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      stage.style.transform = `perspective(1100px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    };
    const onStageLeave = () => { if (stage) stage.style.transform = ""; };
    const onGlowMove = e => {
      if (glow) { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; }
    };
    if (canHover) {
      stage?.addEventListener("mousemove", onStageMove);
      stage?.addEventListener("mouseleave", onStageLeave);
      window.addEventListener("mousemove", onGlowMove);
    }

    return () => {
      clearTimeout(doneTimer); clearTimeout(removeTimer);
      reveal.disconnect(); sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      removeSoundListeners();
      if (canHover) {
        stage?.removeEventListener("mousemove", onStageMove);
        stage?.removeEventListener("mouseleave", onStageLeave);
        window.removeEventListener("mousemove", onGlowMove);
      }
      document.body.classList.remove("intro-active");
    };
  }, [introDuration]);

  const closeMenu = () => setMenuOpen(false);
  return <>
    {introMounted && <div className={`site-intro${introVisible ? "" : " is-done"}`} id="siteIntro" role="status" aria-live="polite" style={{ "--intro-fade-delay": `${Math.max(0, introDuration - 700)}ms` }}>
      <div className="site-intro-content">
        <img className="site-intro-logo" src="/images/black-logo.png" alt="ADEX-IN logo" onError={e => e.currentTarget.style.display="none"} />
        <p className="site-intro-name">ADEX-IN</p>
        <p className="site-intro-tagline" aria-label="See Differently. Build Differently."><span className="intro-word">See</span> <span className="intro-word">Differently.</span><br/><strong><span className="intro-word">Build</span> <span className="intro-word">Differently.</span></strong></p>
        <div className="site-intro-progress" aria-hidden="true"><span style={introDuration ? { animationDuration: `${introDuration}ms` } : undefined} /></div>
      </div>
      <audio ref={introAudioRef} src="/audio/adex_welcome.mp3" preload="auto" />
    </div>}
    <div className="progress" id="progress" />
    <div className="cursor-glow" ref={glowRef} />
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="ADEX-IN home"><span className="brand-mark"><img src="/images/adex-logo.png" alt="" onError={e=>e.currentTarget.style.display="none"}/>A</span><span>ADEX_<b>IN</b></span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {[["home","Home"],["about","About"],["purpose","Purpose"],["products","Products"],["team","Team"]].map(([id, label]) => <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="linkedin" href="https://www.linkedin.com/company/adex-in/" target="_blank" rel="noreferrer" aria-label="ADEX-IN on LinkedIn">in</a>
          <a className="nav-cta" href="#contact">Connect <span>↗</span></a>
          <button className="menu-btn" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v=>!v)}><i/><i/></button>
        </div>
      </div>
    </header>
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu-top"><span>ADEX-IN</span><button onClick={closeMenu} aria-label="Close menu">×</button></div>
      {["Home","About","Purpose","Products","Team","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
      <div className="mobile-socials">
        <a href="https://www.linkedin.com/company/adex-in/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://www.instagram.com/adex._in/" target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href="https://x.com/Adex_in" target="_blank" rel="noreferrer">X ↗</a>
        <a href="mailto:adex.industrie@gmail.com">Email ↗</a>
      </div>
    </div>
    {menuOpen && <button className="menu-backdrop open" aria-label="Close navigation" onClick={closeMenu} />}
    <main>
      <section className="hero" id="home">
        <div className="hero-bg-orb orb-a"/><div className="hero-bg-orb orb-b"/>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="live-dot"/> TECHNOLOGY · INNOVATION · ACCESSIBILITY</div>
            <h1>See Differently.<br/>Build <em>Differently.</em></h1>
            <p className="hero-lead">ADEX-IN builds products that empower people with disabilities—turning real-world challenges into thoughtful, practical technology.</p>
            <div className="hero-buttons"><a className="button button-primary" href="#products">Explore our products <span>↗</span></a><a className="button button-quiet" href="#about">Who we are <span>↓</span></a></div>
            <p style={{marginTop:24,fontSize:12}}><Link to="/adityapratap-singh">Meet our founder: Adityapratap Singh ↗</Link></p>
          </div>
          <div className="hero-stage reveal" id="heroStage" ref={stageRef} aria-label="ADEX-IN technology and accessibility visual">
            <div className="stage-label label-one">01 / HUMAN NEED</div><div className="stage-label label-two">02 / TECHNOLOGY</div><div className="stage-label label-three">03 / IMPACT</div>
            <div className="stage-grid"/><div className="stage-ring ring-one"/><div className="stage-ring ring-two"/><div className="stage-ring ring-three"/><div className="stage-ring ring-four"/><div className="stage-ring ring-five"/>
            <div className="stage-core"><div className="core-inner"><img src="/images/adex-logo-white.png" alt="ADEX-IN" onError={e=>e.currentTarget.style.display="none"}/></div></div>
            <div className="node node-one"><span>ACCESS</span><small>DESIGN</small></div><div className="node node-two"><span>ASSIST</span><small>TECH</small></div><div className="node node-three"><span>EMPOWER</span><small>PEOPLE</small></div>
            <div className="stage-footer"><span><u>EXPLORE</u></span><span><u>EXPERIMENT</u></span><span><u>BUILD</u></span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>01</span><p>Real problems</p><span>02</span><p>Human-centered design</p><span>03</span><p>Technology with purpose</p><span>04</span><p>Global accessibility</p></div>
      </section>
      <section className="about section" id="about"><div className="container split"><div className="section-intro reveal"><p className="eyebrow-text">01 — ABOUT ADEX-IN</p><h2>We don't build technology <em>for technology's sake.</em></h2></div><div className="about-copy reveal"><p className="lead-copy">ADEX-IN is a technology and innovation platform building products for people with disabilities around the world.</p><p>We look at everyday barriers, explore what technology can change, and turn promising ideas into products that can make communication, independence and participation more accessible.</p><div className="mini-rule"><span/>Innovation with purpose.</div></div></div></section>
      <section className="purpose section" id="purpose"><div className="container"><div className="purpose-head reveal"><p className="eyebrow-text">02 — WHY WE EXIST</p><h2>Build a world where <em>ability isn't limited by access.</em></h2></div><div className="purpose-grid">
        <article className="purpose-card reveal"><span>01</span><div className="card-icon">◎</div><h3>Purpose</h3><p>Turn accessibility challenges into opportunities for meaningful technological innovation.</p></article>
        <article className="purpose-card featured reveal"><span>02</span><div className="card-icon">✦</div><h3>Mission</h3><p>Build innovative, accessible products that empower people with disabilities and address real-world challenges.</p></article>
        <article className="purpose-card reveal"><span>03</span><div className="card-icon">∞</div><h3>Vision</h3><p>A world where technology removes barriers and enables greater communication, participation and independence.</p></article>
      </div></div></section>
      <section className="principles section"><div className="container principles-grid"><div className="principles-title reveal"><p className="eyebrow-text">03 — OUR PRINCIPLES</p><h2>Different perspective.<br/><em>Meaningful progress.</em></h2></div><div className="principles-list">
        {[["Accessibility first","People come before the technology."],["Innovation with purpose","We build because a problem is worth solving."],["Human-centered design","Real experiences shape what we create."],["Explore · Experiment · Build","Ideas become products through iteration."]].map((p,i)=><div className="principle reveal" key={p[0]}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{p[0]}</h3><p>{p[1]}</p></div></div>)}
      </div></div></section>
      <section className="products section" id="products"><div className="container"><div className="section-top reveal"><div><p className="eyebrow-text">04 — PRODUCTS</p><h2>Our product(s) are <em>already taking shape.</em></h2></div></div><div className="product-grid">
        {products.map((p,i)=><article className="product-card product-card-compact reveal" key={p._id||p.name} tabIndex="0" role="button" onClick={()=>setProductOpen(true)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setProductOpen(true)}}}><div className="product-visual"><div className="product-orbit"/><div className="product-orbit product-orbit-2"/><div className="product-hand">{p.name==="ADEX_ISL"?"ISL":p.name}</div>{(p.tags||[]).slice(0,3).map((t,ti)=><span className={`product-chip chip-${["a","b","c"][ti]}`} key={t}>{t}</span>)}</div><div className="product-info"><p className="product-index">{p.category||"ADEX-IN PRODUCT"}</p><h3>{p.name}</h3><p className="product-subtitle">{p.subtitle}</p><p className="product-summary">{p.summary}</p>{p.status&&<p className="product-status"><span/>{p.status}</p>}{(p.features||[]).length>0&&<ul className="product-features">{(p.features||[]).slice(0,3).map(f=><li key={f}>{f}</li>)}</ul>}<button className="product-open" onClick={e=>{e.stopPropagation();setProductOpen(true)}}>View product details <span>↗</span></button></div></article>)}
        <article className="product-placeholder"><span className="product-placeholder-number">02</span><div><p className="product-index">FUTURE EXPLORATION</p><h3>More possibilities</h3><p>New accessibility-focused products are taking shape.</p></div><span className="product-placeholder-status">Coming soon</span></article>
      </div></div></section>
      {productOpen && <div className="product-dialog" role="dialog" aria-modal="true" aria-labelledby="productDetailsTitle" onClick={e=>{if(e.target===e.currentTarget)setProductOpen(false)}}><div className="product-dialog-panel"><button className="product-dialog-close" onClick={()=>setProductOpen(false)} aria-label="Close product details">×</button><p className="product-index">PRODUCT 01 · IN DEVELOPMENT</p><h3 id="productDetailsTitle">ADEX_ISL</h3><p className="product-subtitle">Technology for Indian Sign Language</p><div className="product-dialog-grid"><div><h4>The idea</h4><p>ADEX_ISL explores how computer vision and local AI can recognize and interpret Indian Sign Language in a practical, accessible way.</p></div><div><h4>The opportunity</h4><p>Many people who use sign language still face communication barriers with people who do not. This product direction is focused on making everyday interaction more inclusive.</p></div><div><h4>What we are exploring</h4><ul><li>Indian Sign Language gesture recognition</li><li>Real-time translation support</li><li>Privacy-conscious local processing</li><li>Accessible experiences for real-world use</li></ul></div><div><h4>Our approach</h4><p>We are starting with real communication needs, testing thoughtfully, and improving the experience with the people it is designed to serve.</p></div></div><div className="product-dialog-links"><a className="text-link" href="#contact" onClick={()=>setProductOpen(false)}>Follow the journey <span>↗</span></a><Link className="text-link" to="/adityapratap-singh" onClick={()=>setProductOpen(false)}>Meet the founder <span>↗</span></Link></div></div></div>}
      <section className="build section"><div className="container build-grid"><div className="build-copy reveal"><p className="eyebrow-text">05 — HOW WE BUILD</p><h2>From a problem<br/>to something <em>real.</em></h2><p>We move from understanding to experimentation, then from experimentation to a product people can actually use.</p></div><div className="build-flow">{[["Understand","Listen to people and identify the barrier."],["Explore","Research ideas, technologies and possible approaches."],["Experiment","Prototype, test assumptions and learn."],["Build","Turn the strongest idea into a useful product."]].map((s,i)=><div key={s[0]}><div className="build-step reveal"><span>{String(i+1).padStart(2,"0")}</span><div><h3>{s[0]}</h3><p>{s[1]}</p></div></div>{i<3&&<div className="flow-connector"/>}</div>)}</div></div></section>
      <section className="team section" id="team"><div className="container"><div className="section-top reveal"><div><p className="eyebrow-text">06 — LEADERSHIP</p><h2>Different roles.<br/><em>One direction.</em></h2></div><p>Meet the people helping shape ADEX_IN.</p></div><div className="team-grid">{team.map(m=><article className="team-card reveal" key={m._id||m.name}><div className="team-card-media"><div className="team-avatar"><img src={m.image?.startsWith("http")?m.image:`${m.image||""}`} alt={m.name} onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.textContent=m.name.split(" ").map(x=>x[0]).slice(0,2).join("")}}/></div></div><div className="team-card-content"><h3>{m.name}</h3><p className="team-role">{m.role}</p><p className="team-desc">{m.desc}</p><div className="team-links">{m.slug==="adityapratap-singh"&&<Link className="team-link" to="/adityapratap-singh">Personal profile ↗</Link>}<a className="team-link" href={m.linkedin||"https://www.linkedin.com/"} target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span><span>LinkedIn</span><span className="linkedin-arrow">↗</span></a></div></div></article>)}</div></div></section>
      <section className="contact" id="contact"><div className="contact-orb"/><div className="container contact-inner reveal"><p className="eyebrow-text">08 — LET'S CONNECT</p><h2>Have a problem<br/>worth <em>solving?</em></h2><p>We'd love to hear the challenge, the idea or the possibility you're thinking about.</p><a className="button button-light" href="https://www.linkedin.com/company/adex-in/" target="_blank" rel="noreferrer">Connect with ADEX-IN <span>↗</span></a><div className="contact-socials"><a href="mailto:adex.industrie@gmail.com">adex.industrie@gmail.com</a><a href="https://www.instagram.com/adex._in/" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://x.com/Adex_in" target="_blank" rel="noreferrer">X <span>↗</span></a></div></div></section>
    </main>
    <footer><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">A</span><span>ADEX_<b>IN</b></span></a><p>See Differently.<br/><strong>Build Differently.</strong></p></div><div className="footer-nav"><a href="#about">About</a><a href="#purpose">Purpose</a><a href="#products">Products</a><a href="#team">Team</a><a href="#contact">Contact</a></div><div className="footer-note"><div className="footer-socials"><a href="https://www.instagram.com/adex._in/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://x.com/Adex_in" target="_blank" rel="noreferrer">X ↗</a><a href="https://www.linkedin.com/company/adex-in/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="mailto:adex.industrie@gmail.com">adex.industrie@gmail.com</a><Link to="/adityapratap-singh">Founder profile ↗</Link><span>Technology with purpose.</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} ADEX-IN. All rights reserved.</span><span>India · Building for the world</span></div></footer>
  </>;
}
