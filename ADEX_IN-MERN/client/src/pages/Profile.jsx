import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../portfolio.css";
import {
  agents, alsoBuilt, education, experience, flagship, profile, projects, qaChecks, skills,
} from "../data/profile.js";

const TOTAL_STEPS = agents.length + qaChecks.length;

// Hero run board: the AI Dev Pipeline stages tick through once on load.
function RunBoard() {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [step, setStep] = useState(reduce ? TOTAL_STEPS : 0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setStep((s) => (s >= TOTAL_STEPS ? s : s + 1)), 380);
    return () => clearInterval(id);
  }, [reduce]);

  const rows = [...agents, ...qaChecks];

  return (
    <figure className="pf-run" aria-label="Illustration of an AI Dev Pipeline run">
      <figcaption>
        <span>ai-dev-pipeline</span>
        <span>{step >= TOTAL_STEPS ? "run complete" : "running"}</span>
      </figcaption>
      <ol>
        {rows.map((name, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <li key={name} className={`${done ? "is-done" : ""}${active ? " is-active" : ""}${i === agents.length ? " qa-start" : ""}`}>
              <span>{name}</span>
              <span className="pf-run-state">
                {name === "Build" && done ? "fixed on retry" : done ? "done" : active ? "working" : "queued"}
              </span>
            </li>
          );
        })}
      </ol>
      <p>Illustrative flow. Agents run first, then the QA loop repairs failures until the checks pass.</p>
    </figure>
  );
}

export default function Profile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software engineer",
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github, profile.x],
    alumniOf: "Savitribai Phule Pune University",
  };

  return (
    <div className="pf">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="pf-skip" href="#work">Skip to work</a>

      <header className="pf-nav">
        <Link to="/" className="pf-wordmark">{profile.name}</Link>
        <nav aria-label="Portfolio sections">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pf-btn pf-btn-line" href={profile.resume} download>Resume</a>
      </header>

      <main>
        <section className="pf-hero">
          <div className="pf-hero-copy">
            <h1>{profile.title}</h1>
            <p className="pf-lead">{profile.intro}</p>
            <div className="pf-actions">
              <a className="pf-btn pf-btn-solid" href={profile.resume} download>Download resume</a>
              <a className="pf-link" href={`mailto:${profile.email}`}>Email me</a>
              <a className="pf-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="pf-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <RunBoard />
        </section>

        <section id="work" className="pf-section">
          <h2>Selected work</h2>

          <article className="pf-flagship">
            <div>
              <p className="pf-status">{flagship.status}</p>
              <h3>{flagship.title}</h3>
              <p>{flagship.summary}</p>
            </div>
            <div>
              <ul className="pf-points">
                {flagship.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <p className="pf-tags">{flagship.tags.join(", ")}</p>
            </div>
          </article>

          {projects.map((p) => (
            <article className="pf-row" key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <p className="pf-status">{p.status}</p>
              </div>
              <div>
                <p>{p.summary}</p>
                {p.more && (
                  <details>
                    <summary>Design notes</summary>
                    <ul className="pf-points">{p.more.map((m) => <li key={m}>{m}</li>)}</ul>
                  </details>
                )}
                <p className="pf-tags">{p.tags.join(", ")}</p>
              </div>
            </article>
          ))}

          <h3 className="pf-sub">Also built</h3>
          {alsoBuilt.map((p) => (
            <article className="pf-row pf-row-small" key={p.title}>
              <h4>{p.title}</h4>
              <div>
                <p>{p.text}</p>
                <p className="pf-tags">{p.tags}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="experience" className="pf-section">
          <h2>Experience</h2>
          {experience.map((e) => (
            <article className="pf-row pf-row-small" key={e.role + e.org}>
              <p className="pf-when">{e.when}</p>
              <div>
                <h3 className="pf-role">{e.org ? `${e.role}, ${e.org}` : e.role}</h3>
                <p>{e.text}</p>
              </div>
            </article>
          ))}
          <article className="pf-row pf-row-small">
            <p className="pf-when">Education</p>
            <p>{education}</p>
          </article>
        </section>

        <section id="skills" className="pf-section">
          <h2>Skills</h2>
          {skills.map(([label, items]) => (
            <article className="pf-row pf-row-small" key={label}>
              <h4>{label}</h4>
              <p>{items}</p>
            </article>
          ))}
        </section>

        <section className="pf-section pf-about">
          <img src="/images/adityasingh.jpeg" alt="Portrait of Adityapratap Singh" width="220" height="280" loading="lazy" />
          <div>
            <h2>About</h2>
            {profile.about.map((t) => <p key={t}>{t}</p>)}
          </div>
        </section>

        <section id="contact" className="pf-section pf-contact">
          <h2>Let's talk about an internship or a project.</h2>
          <a className="pf-mail" href={`mailto:${profile.email}?subject=Internship%20or%20project%20enquiry`}>{profile.email}</a>
          <div className="pf-actions">
            <button type="button" className="pf-btn pf-btn-line" onClick={copyEmail}>{copied ? "Copied" : "Copy email"}</button>
            <a className="pf-btn pf-btn-solid" href={profile.resume} download>Download resume</a>
            <a className="pf-link" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="pf-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="pf-link" href={profile.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </section>
      </main>

      <footer className="pf-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <Link to="/">ADEX_IN, the team behind ADEX_ISL</Link>
      </footer>
    </div>
  );
}
