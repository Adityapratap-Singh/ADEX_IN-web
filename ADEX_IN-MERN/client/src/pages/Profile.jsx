import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  galleryArtifacts,
  profileData,
  systemArchitectures,
  verifiedProjects,
} from "../data/portfolioData.js";

const portfolioSections = [
  "top",
  "about",
  "founder",
  "architecture",
  "work",
  "skills",
  "philosophy",
  "focus",
  "contact",
];

function getSectionFromHash() {
  const section = window.location.hash.slice(1);
  return portfolioSections.includes(section) ? section : "top";
}

// Custom Crisp SVG Icons
function GithubIcon({ className = "icon" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon({ className = "icon" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XIcon({ className = "icon" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Profile() {
  const [activeSection, setActiveSection] = useState(getSectionFromHash);
  const [activeArchTab, setActiveArchTab] = useState("homie");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPausedGallery, setIsPausedGallery] = useState(false);

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", honeypot: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  // Branded load rail: fills once on load, then becomes the scroll progress bar
  const [loadPct, setLoadPct] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleHistoryNavigation = () => {
      setActiveSection(getSectionFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleHistoryNavigation);
    window.addEventListener("hashchange", handleHistoryNavigation);
    return () => {
      window.removeEventListener("popstate", handleHistoryNavigation);
      window.removeEventListener("hashchange", handleHistoryNavigation);
    };
  }, []);

  const navigateToSection = (section) => {
    if (!portfolioSections.includes(section)) return;
    setActiveSection(section);
    if (window.location.hash !== `#${section}`) {
      window.history.pushState(null, "", `#${section}`);
    }
    window.scrollTo(0, 0);
  };
  const handleSectionClick = (section) => (e) => {
    e.preventDefault();
    navigateToSection(section);
  };

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLoadPct(100);
      setLoaded(true);
      return;
    }
    let raf;
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setLoadPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setLoaded(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? Math.min(Math.max((window.scrollY / h) * 100, 0), 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentArch =
    systemArchitectures.find((a) => a.id === activeArchTab) || systemArchitectures[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return; // bot detection

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormStatus("error");
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setFormStatus("error");
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormStatus("submitting");

    const subject = encodeURIComponent(`[ADEX-IN Profile Inquiry] ${form.subject || "Collaboration"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailto = `mailto:${profileData.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    setFormStatus("success");
    setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.preferredName,
    jobTitle: profileData.role,
    worksFor: {
      "@type": "Organization",
      name: profileData.company.name,
      url: profileData.company.url,
    },
    email: `mailto:${profileData.contact.email}`,
    telephone: profileData.contact.phone,
    sameAs: [
      profileData.contact.linkedin,
      profileData.contact.github,
      profileData.contact.x,
    ],
    knowsAbout: [
      "Software Engineering",
      "Machine Learning",
      "Computer Vision",
      "Indian Sign Language Technology",
      "Embedded Systems",
      "IoT",
      "MQTT",
      "ESP32",
      "Next.js",
      "Python",
      "Leadership & Team Collaboration",
      "Public Speaking & Presentations",
    ],
  };

  // Duplicated gallery items for continuous infinite horizontal scroll
  const duplicatedGallery = [...galleryArtifacts, ...galleryArtifacts];

  return (
    <div className="portfolio-container">
      {/* Schema.org Person metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Branded load rail — fills on load, then tracks scroll */}
      <div className="port-rail" aria-hidden="true">
        <div
          className={`port-rail-fill${loaded ? "" : " is-loading"}`}
          style={{ width: `${loaded ? scrollPct : loadPct}%` }}
        />
      </div>
      <div className={`port-rail-brand${loaded ? " is-done" : ""}`} aria-hidden="true">
        <img src="/images/adex-logo.png" alt="" />
        <span className="port-rail-word">
          ADEX<em>-IN</em>
        </span>
        <span className="port-rail-tag">See Differently. Build Differently.</span>
        <span className="port-rail-count">{loaded ? "100%" : `${loadPct}%`}</span>
      </div>

      {/* Navigation Bar */}
      <header className={`port-nav${loaded ? "" : " is-loading"}`}>
        <div className="port-nav-inner">
          <Link to="/" className="port-brand">
            <span className="port-monogram">AS</span>
            <div className="port-brand-text">
              <strong className="port-name-animated">{profileData.name}</strong>
              <small>Founder · Systems Builder</small>
            </div>
          </Link>

          <nav className="port-nav-links">
            <a href="#top" aria-current={activeSection === "top" ? "page" : undefined} onClick={handleSectionClick("top")}>Overview</a>
            <a href="#about" aria-current={activeSection === "about" ? "page" : undefined} onClick={handleSectionClick("about")}>About</a>
            <a href="#founder" aria-current={activeSection === "founder" ? "page" : undefined} onClick={handleSectionClick("founder")}>Venture</a>
            <a href="#architecture" aria-current={activeSection === "architecture" ? "page" : undefined} onClick={handleSectionClick("architecture")}>Systems</a>
            <a href="#work" aria-current={activeSection === "work" ? "page" : undefined} onClick={handleSectionClick("work")}>Work</a>
            <a href="#skills" aria-current={activeSection === "skills" ? "page" : undefined} onClick={handleSectionClick("skills")}>Skills</a>
            <a href="#philosophy" aria-current={activeSection === "philosophy" ? "page" : undefined} onClick={handleSectionClick("philosophy")}>Philosophy</a>
            <a href="#focus" aria-current={activeSection === "focus" ? "page" : undefined} onClick={handleSectionClick("focus")}>Focus</a>
            <a href="#contact" aria-current={activeSection === "contact" ? "page" : undefined} onClick={handleSectionClick("contact")}>Contact</a>
          </nav>

          <div className="port-nav-right">
            <span className="port-live-indicator">
              <span className="port-pulse" />
              <span>Available to build</span>
            </span>
            <Link to="/" className="port-btn-subtle">
              ADEX-IN Home ↗
            </Link>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="port-hero" id="top" hidden={activeSection !== "top"}>
        <div className="port-wrap port-hero-grid">
          <div className="port-hero-copy">
            <p className="port-eyebrow">
              <span className="port-eyebrow-line" />
              {profileData.eyebrow}
            </p>

            <h1 className="port-hero-title">
              I build systems, explore ideas, and turn technology into{" "}
              <span className="port-text-gradient">things that work.</span>
            </h1>

            <p className="port-hero-lead">{profileData.shortBio}</p>

            <div className="port-hero-actions">
              <a href="#work" className="port-btn-primary" onClick={handleSectionClick("work")}>
                Explore My Work <span>↘</span>
              </a>
              <a href="#contact" className="port-btn-secondary" onClick={handleSectionClick("contact")}>
                Get in Touch <span>↗</span>
              </a>
              <a href="#about" className="port-link-subtle" onClick={handleSectionClick("about")}>
                About Me →
              </a>
            </div>
          </div>

          {/* Systems Convergence Visual */}
          <aside className="port-convergence-card">
            <div className="port-card-header">
              <span>Core Capabilities</span>
              <span className="port-online-tag">
                <span className="port-pulse-sm" /> Available
              </span>
            </div>

            <div className="port-convergence-nodes">
              <div className="port-node-box">
                <div className="port-node-icon">01</div>
                <div>
                  <strong>Software &amp; Web Interfaces</strong>
                  <p>Next.js · React · APIs · Linux Systems</p>
                </div>
              </div>
              <div className="port-node-connector" />
              <div className="port-node-box">
                <div className="port-node-icon port-node-accent">02</div>
                <div>
                  <strong>Machine Intelligence</strong>
                  <p>MediaPipe · Computer Vision · Agent DAGs</p>
                </div>
              </div>
              <div className="port-node-connector" />
              <div className="port-node-box">
                <div className="port-node-icon">03</div>
                <div>
                  <strong>Connected IoT &amp; Hardware</strong>
                  <p>ESP32 · MQTT · Sensor Safety Latches</p>
                </div>
              </div>
            </div>

            <div className="port-card-footer">
              <small>Approach</small>
              <p>Understanding systems from hardware to intelligence to user interface.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section className="port-section port-section--paper" id="about" hidden={activeSection !== "about"}>
        <div className="port-wrap">
          <p className="port-section-tag">01 — ABOUT ME</p>
          <div className="port-split-layout">
            <div>
              <h2 className="port-section-title">
                Building with curiosity, discipline, and practical intent.
              </h2>
              <div className="port-prose">
                {profileData.extendedBio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="port-coordinates-grid">
                <div>
                  <small>ROLE &amp; VENTURE</small>
                  <strong>Founder &amp; CEO, ADEX-IN</strong>
                </div>
                <div>
                  <small>TECHNICAL CORE</small>
                  <strong>Software · Systems · ML</strong>
                </div>
                <div>
                  <small>APPROACH</small>
                  <strong>Hands-on Prototyping</strong>
                </div>
              </div>
            </div>

            {/* Authentic Photograph */}
            <div className="port-photo-card">
              <div className="port-photo-frame">
                <img
                  src="/images/adityasingh.jpeg"
                  alt={profileData.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="port-photo-meta">
                <div className="port-meta-top">
                  <span>Based in</span>
                  <span className="port-status-emerald">India · IST</span>
                </div>
                <strong className="port-name-animated">{profileData.name}</strong>
                <small>Curiosity into capability.</small>
              </div>
            </div>
          </div>

          {/* Three Organizing Pillars */}
          <div className="port-pillars-grid">
            {profileData.pillars.map((pillar) => (
              <div key={pillar.number} className="port-pillar-card">
                <span className="port-pillar-num">{pillar.number} — {pillar.title}</span>
                <h3>{pillar.summary}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADEX-IN FOUNDER SECTION */}
      <section className="port-section port-section--blush" id="founder" hidden={activeSection !== "founder"}>
        <div className="port-wrap">
          <p className="port-section-tag">02 — FOUNDER INITIATIVE</p>

          <div className="port-banner-card">
            <div className="port-split-layout align-center">
              <div>
                <span className="port-chip">EARLY-STAGE INITIATIVE</span>
                <h2 className="port-section-title" style={{ marginTop: 16 }}>
                  Building ADEX-IN: <span style={{ opacity: 0.5 }}>Technology with purpose.</span>
                </h2>
                <p className="port-prose-lead">
                  As Founder and CEO of <strong>ADEX-IN</strong>, I lead an early-stage innovation initiative dedicated to exploring emerging technologies, practical product development, and human-centered design.
                </p>
                <p className="port-prose-lead" style={{ marginTop: 12 }}>
                  Our primary exploration is <strong>ADEX_ISL</strong>—investigating how computer vision and local machine learning can help bridge communication barriers for the deaf and hard-of-hearing community.
                </p>

                <div className="port-hero-actions" style={{ marginTop: 24 }}>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(verifiedProjects.find((p) => p.id === "adex-isl"))}
                    className="port-btn-primary"
                  >
                    View ADEX_ISL Case Study ↗
                  </button>
                  <Link to="/" className="port-btn-secondary">
                    Visit ADEX-IN Website ↗
                  </Link>
                </div>
              </div>

              <div className="port-spec-box">
                <div className="port-spec-header">
                  <span>INITIATIVE OVERVIEW</span>
                  <span>STATUS: EXPERIMENTAL</span>
                </div>
                <div className="port-spec-rows">
                  <div>
                    <small>NATURE</small>
                    <p>Early-stage technology &amp; innovation initiative (pre-incorporation, unfunded).</p>
                  </div>
                  <div>
                    <small>FOUNDER RESPONSIBILITIES</small>
                    <p>Product architecture, coordinating technical experiments, dataset audits, and moving concepts to prototypes.</p>
                  </div>
                  <div>
                    <small>PRIMARY EXPLORATION</small>
                    <p>Accessible computing &amp; Indian Sign Language gesture recognition.</p>
                  </div>
                </div>
                <div className="port-spec-quote">
                  &ldquo;We build because a problem is worth solving—prioritizing people before technology.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SYSTEM ARCHITECTURES */}
      <section className="port-section port-section--paper" id="architecture" hidden={activeSection !== "architecture"}>
        <div className="port-wrap">
          <div className="port-section-header-split">
            <div>
              <p className="port-section-tag">03 — SYSTEM ARCHITECTURES</p>
              <h2 className="port-section-title">How the systems actually work.</h2>
              <p className="port-section-sub">
                Real engineering pipelines derived directly from project source code, firmware, and test suites.
              </p>
            </div>

            <div className="port-tabs">
              {systemArchitectures.map((arch) => (
                <button
                  key={arch.id}
                  type="button"
                  onClick={() => setActiveArchTab(arch.id)}
                  className={`port-tab-btn ${activeArchTab === arch.id ? "active" : ""}`}
                >
                  {arch.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="port-arch-card">
            <div className="port-arch-header">
              <small>DATA &amp; LOGIC FLOW</small>
              <h3>{currentArch.name}</h3>
              <p>{currentArch.tagline}</p>
            </div>

            <div className="port-arch-nodes-grid">
              {currentArch.nodes.map((n) => (
                <div key={n.title} className="port-arch-node">
                  <div className="port-node-top">
                    <span className="port-node-step">{n.step}</span>
                    <span className="port-node-tech">{n.tech}</span>
                  </div>
                  <strong>{n.title}</strong>
                  <p>{n.detail}</p>
                </div>
              ))}
            </div>

            <div className="port-code-box">
              <div className="port-code-header">
                <span>Source Snippet</span>
                <span className="port-status-emerald">Verified</span>
              </div>
              <pre>
                <code>{currentArch.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED FEATURED PROJECTS */}
      <section className="port-section" id="work" hidden={activeSection !== "work"}>
        <div className="port-wrap">
          <p className="port-section-tag">04 — VERIFIED PROJECTS</p>
          <div className="port-section-header-split">
            <div>
              <h2 className="port-section-title">Projects grounded in real code.</h2>
              <p className="port-section-sub">
                Every project is supported by actual source repositories, hardware firmware, or audited datasets. No imaginary achievements or fake metrics.
              </p>
            </div>
          </div>

          <div className="port-projects-grid">
            {verifiedProjects.map((p, index) => (
              <article key={p.id} className="port-project-card">
                <div>
                  <div className="port-project-top">
                    <span className="port-project-num">Case Study 0{index + 1}</span>
                    <span className="port-status-badge">
                      <span className="port-pulse-sm" /> {p.status}
                    </span>
                  </div>

                  <p className="port-project-eyebrow">{p.eyebrow}</p>
                  <h3 className="port-project-title">{p.title}</h3>
                  <p className="port-project-tagline">{p.tagline}</p>

                  <div className="port-metrics-row">
                    {p.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <small>{m.label}</small>
                        <strong>{m.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="port-tags-row">
                    {p.tags.map((t) => (
                      <span key={t} className="port-tag-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="port-project-bottom">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="port-read-btn"
                  >
                    Read Technical Details <span>→</span>
                  </button>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="port-repo-link"
                      title="Inspect GitHub repository"
                    >
                      <GithubIcon className="port-icon-sm" />
                      <span>Source ↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 6. INFINITE HORIZONTAL IMAGE & ARTIFACT SCROLL */}
        <div className="port-infinite-gallery">
          <div className="port-wrap port-gallery-header">
            <div>
              <small className="port-gallery-tag">Project Artifacts &amp; Schematics</small>
              <p>Project artifacts, firmware captures, and system diagrams.</p>
            </div>
            <span className="port-gallery-hint">Hover to pause</span>
          </div>

          <div
            className="port-marquee-track"
            onMouseEnter={() => setIsPausedGallery(true)}
            onMouseLeave={() => setIsPausedGallery(false)}
            style={{ animationPlayState: isPausedGallery ? "paused" : "running" }}
          >
            {duplicatedGallery.map((item, index) => (
              <div key={`${item.id}-${index}`} className="port-marquee-card">
                {item.image ? (
                  <div className="port-marquee-img">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="port-marquee-snippet">
                    <small>Artifact 0{(index % galleryArtifacts.length) + 1}</small>
                    <p>{item.snippet}</p>
                    <span>Source Snippet</span>
                  </div>
                )}
                <div className="port-marquee-footer">
                  <strong>{item.title}</strong>
                  <small>{item.category}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TECHNICAL SKILLS MATRIX */}
      <section className="port-section port-section--paper" id="skills" hidden={activeSection !== "skills"}>
        <div className="port-wrap">
          <p className="port-section-tag">05 — TECHNICAL PROFILE</p>
          <h2 className="port-section-title">Capabilities &amp; Technical Domain.</h2>
          <p className="port-section-sub">
            Transparently classified by what is demonstrated through verified code, what is actively being learned, and future areas of exploration.
          </p>

          <div className="port-legend">
            <span className="port-legend-item">
              <span className="port-dot emerald" /> Demonstrated in Projects
            </span>
            <span className="port-legend-item">
              <span className="port-dot cyan" /> Familiar / Actively Learning
            </span>
            <span className="port-legend-item">
              <span className="port-dot gray" /> Future Exploration
            </span>
          </div>

          <div className="port-skills-grid">
            {profileData.skills.map((grp) => (
              <div key={grp.category} className="port-skill-group">
                <h3>{grp.category}</h3>
                <p className="port-skill-desc">{grp.description}</p>

                <div className="port-skill-tier">
                  <small className="tier-emerald">DEMONSTRATED IN PROJECTS</small>
                  <div className="port-tags-row">
                    {grp.demonstrated.map((s) => (
                      <span key={s} className="port-pill-emerald">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="port-skill-tier">
                  <small className="tier-cyan">FAMILIAR &amp; EXPANDING</small>
                  <div className="port-tags-row">
                    {grp.familiar.map((s) => (
                      <span key={s} className="port-pill-cyan">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="port-skill-tier">
                  <small className="tier-gray">AREAS OF EXPLORATION</small>
                  <div className="port-tags-row">
                    {grp.exploring.map((s) => (
                      <span key={s} className="port-pill-gray">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ENGINEERING PHILOSOPHY */}
      <section className="port-section port-section--blush" id="philosophy" hidden={activeSection !== "philosophy"}>
        <div className="port-wrap">
          <p className="port-section-tag">06 — HOW I BUILD</p>
          <h2 className="port-section-title">Engineering Philosophy.</h2>
          <p className="port-section-sub">
            Three core principles shaped through real hardware tests, failed builds, and iterative prototyping.
          </p>

          <div className="port-philosophy-grid">
            {profileData.principles.map((pr) => (
              <div key={pr.number} className="port-philosophy-card">
                <div>
                  <span className="port-pr-num">Principle {pr.number}</span>
                  <h3>{pr.title}</h3>
                  <p className="port-pr-summary">{pr.summary}</p>
                  <p className="port-pr-desc">{pr.description}</p>
                </div>

                <div className="port-pr-example">
                  <small>IN PRACTICE</small>
                  <p>{pr.projectExample}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CURRENT FOCUS */}
      <section className="port-section port-section--paper" id="focus" hidden={activeSection !== "focus"}>
        <div className="port-wrap">
          <div className="port-section-header-split">
            <div>
              <p className="port-section-tag">07 — CURRENT FOCUS</p>
              <h2 className="port-section-title">What I&rsquo;m working on right now.</h2>
              <p className="port-section-sub">
                Active technical priorities and learning frontiers.
              </p>
            </div>
            <span className="port-update-badge">
              <span className="port-pulse-sm" /> UPDATED Q4 2026
            </span>
          </div>

          <div className="port-focus-grid">
            {profileData.currentFocus.map((fc, i) => (
              <div key={fc.title} className="port-focus-card">
                <div>
                  <div className="port-focus-top">
                    <small>Focus 0{i + 1}</small>
                    <span className="port-focus-tag">{fc.tag}</span>
                  </div>
                  <strong>{fc.title}</strong>
                  <p className="port-focus-domain">{fc.domain}</p>
                  <p className="port-focus-text">{fc.description}</p>
                </div>
                <div className="port-focus-bottom">
                  <small>Status: {fc.status}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTACT & SOCIAL COORDINATES (WITH X LINK READY) */}
      <section className="port-section port-section--blush" id="contact" hidden={activeSection !== "contact"}>
        <div className="port-wrap">
          <p className="port-section-tag">08 — CONTACT &amp; COLLABORATION</p>
          <h2 className="port-section-title">Start a conversation.</h2>
          <p className="port-section-sub">
            Whether exploring an engineering collaboration, startup building, open-source work, or software opportunities—reach out directly.
          </p>

          <div className="port-split-layout" style={{ marginTop: 32 }}>
            {/* Direct Coordinates */}
            <div className="port-contact-info">
              {/* Email */}
              <div className="port-contact-card">
                <div className="port-contact-left">
                  <small>PRIMARY EMAIL</small>
                  <strong>{profileData.contact.email}</strong>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="port-copy-btn"
                >
                  {copiedEmail ? "Copied!" : "Copy Email"}
                </button>
              </div>

              {/* Phone */}
              <div className="port-contact-card">
                <div className="port-contact-left">
                  <small>DIRECT PHONE</small>
                  <a href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}>
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Verified Profiles including X (Twitter) */}
              <div className="port-social-grid">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="port-social-btn"
                >
                  <LinkedinIcon className="port-icon-med" />
                  <span>LinkedIn ↗</span>
                </a>

                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="port-social-btn"
                >
                  <GithubIcon className="port-icon-med" />
                  <span>GitHub ↗</span>
                </a>

                {/* X (formerly Twitter) profile button */}
                <a
                  href={profileData.contact.x}
                  target="_blank"
                  rel="noreferrer"
                  className="port-social-btn"
                  title="X (Twitter) Profile"
                >
                  <XIcon className="port-icon-med" />
                  <span>X (Twitter) ↗</span>
                </a>
              </div>

              <div className="port-credibility-note">
                <strong>GENUINE COMMUNICATION</strong>
                <p>
                  Inquiries reach Aditya directly. Technical projects, research inquiries, or founder discussions receive prompt replies.
                </p>
              </div>
            </div>

            {/* Functional Inquiry Form */}
            <div className="port-form-box">
              <h3>Send an inquiry or project brief</h3>
              <p>Dispatches your inquiry directly to Aditya&rsquo;s inbox.</p>

              <form onSubmit={handleFormSubmit} className="port-form">
                {/* Honeypot field for bot prevention */}
                <input
                  type="text"
                  name="bot_field"
                  tabIndex={-1}
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                <div className="port-form-row">
                  <div>
                    <label htmlFor="pname">Your Name *</label>
                    <input
                      id="pname"
                      type="text"
                      required
                      placeholder="Aditya Pratap"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="pemail">Your Email Address *</label>
                    <input
                      id="pemail"
                      type="email"
                      required
                      placeholder="aditya@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="psubject">Subject / Topic</label>
                  <input
                    id="psubject"
                    type="text"
                    placeholder="Project brief / Collaboration / Opportunity"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="pmessage">Message *</label>
                  <textarea
                    id="pmessage"
                    rows={4}
                    required
                    placeholder="Describe your project scope or proposal..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                {formStatus === "error" && (
                  <div className="port-alert-error">{formError}</div>
                )}

                {formStatus === "success" && (
                  <div className="port-alert-success">
                    Opening your mail client to dispatch your message to {profileData.contact.email}. Thank you!
                  </div>
                )}

                <button type="submit" className="port-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {formStatus === "submitting" ? "Opening Client..." : "Send Message via Email ↗"}
                </button>

                <small className="port-privacy-text">
                  Zero marketing spam. Sent straight to Aditya.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="port-footer" hidden={activeSection !== "contact"}>
        <div className="port-wrap port-footer-inner">
          <div>
            <div className="port-brand">
              <span className="port-monogram">AS</span>
              <span className="port-name-animated">{profileData.name}</span>
            </div>
            <p className="port-footer-desc">
              Building at the convergence of software, hardware, and intelligent systems. Founder &amp; CEO of{" "}
              <Link to="/">ADEX-IN</Link>.
            </p>
          </div>

          <div className="port-footer-links">
            <Link to="/">ADEX-IN Home</Link>
            <a href="#about" onClick={handleSectionClick("about")}>About</a>
            <a href="#work" onClick={handleSectionClick("work")}>Work</a>
            <a href="#architecture" onClick={handleSectionClick("architecture")}>Architecture</a>
            <a href="#contact" onClick={handleSectionClick("contact")}>Contact</a>
          </div>

          <div className="port-footer-socials">
            <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profileData.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profileData.contact.x} target="_blank" rel="noreferrer">X (Twitter) ↗</a>
          </div>
        </div>
        <div className="port-wrap port-footer-bottom">
          <small>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</small>
          <a href="#top" className="port-top-link" onClick={handleSectionClick("top")}>Back to overview ↑</a>
        </div>
      </footer>

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <div className="port-modal-overlay" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="port-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="port-modal-header">
              <div>
                <span className="port-chip">{selectedProject.status}</span>
                <h2>{selectedProject.title}</h2>
                <small>{selectedProject.eyebrow}</small>
              </div>
              <button
                type="button"
                className="port-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="port-modal-body">
              <section>
                <h4>OVERVIEW</h4>
                <p>{selectedProject.overview}</p>
              </section>

              <section>
                <h4>THE PROBLEM &amp; MOTIVATION</h4>
                <p>{selectedProject.problem}</p>
              </section>

              <section>
                <h4>ENGINEERING APPROACH</h4>
                <p>{selectedProject.approach}</p>
              </section>

              <section>
                <h4>PIPELINE STAGES</h4>
                <div className="port-pipeline-list">
                  {selectedProject.pipeline.map((st) => (
                    <div key={st.step} className="port-pipeline-item">
                      <span className="port-pipe-num">{st.step}</span>
                      <div>
                        <strong>{st.label}</strong>
                        <p>{st.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4>CHALLENGES &amp; CONSTRAINTS</h4>
                <ul className="port-bullet-list">
                  {selectedProject.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h4>CURRENT BOUNDARIES &amp; LIMITATIONS</h4>
                <ul className="port-bullet-list">
                  {selectedProject.limitations.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </section>

              {selectedProject.githubUrl && (
                <div style={{ marginTop: 24, textAlign: "right" }}>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="port-btn-primary"
                  >
                    View Source on GitHub ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
