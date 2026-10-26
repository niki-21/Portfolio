"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { profile, projects } from "@/lib/content";

const chapters = ["Hello", "NRSAA", "Selected work", "Research", "Background", "Let’s talk"];
const selected = projects.filter((p) => ["allergy-nav", "data-purr-suit", "federated-learning-mlops"].includes(p.slug));

export function PortfolioDeck() {
  const [active, setActive] = useState(0);
  const go = useCallback((next: number) => {
    const target = (next + chapters.length) % chapters.length;
    setActive(target);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test((event.target as HTMLElement).tagName)) return;
      if (event.key === "ArrowRight") { event.preventDefault(); go(active + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(active - 1); }
      if (event.key === "Home") { event.preventDefault(); go(0); }
      if (event.key === "End") { event.preventDefault(); go(chapters.length - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  return (
    <main className="deck-site">
      <header className="deck-header">
        <a href="#hello" onClick={(e) => { e.preventDefault(); go(0); }} className="deck-wordmark">Nikita Miller</a>
        <span className="header-note">Applied ML. Thoughtfully built.</span>
        <a href={profile.email} className="header-contact">Get in touch <span aria-hidden="true">↗</span></a>
      </header>
      <div className="deck-intro"><span>THE PORTFOLIO / A SHORT INTRODUCTION</span><span>06 CARDS · YOUR PACE</span></div>
      <section className="deck-stage" aria-label="Portfolio presentation">
        {chapters.map((chapter, index) => {
          const depth = (index - active + chapters.length) % chapters.length;
          return <article key={chapter} className={`pitch-card card-${index} stack-card ${depth === 0 ? "is-front" : "is-behind"}`} style={{ "--depth": Math.min(depth, 3), zIndex: chapters.length - depth } as React.CSSProperties} onClick={(event) => {
            if (depth !== 0 || (event.target as HTMLElement).closest("a, button, input, select, textarea") || window.getSelection()?.toString()) return;
            go(active + 1);
          }} aria-hidden={depth !== 0} inert={depth !== 0} aria-label={`${index + 1} of ${chapters.length}: ${chapter}`}>
          <div className="card-content">
          <div className="card-topline"><span><i /> {chapter}</span><span>N° 0{index + 1}</span></div>
          {index === 0 && <div className="intro-card-body">
            <div className="intro-copy"><p className="deck-kicker">ENGINEER. BUILDER. HUMAN FIRST.</p><h1>Complex systems.<br /><span>Clearer lives.</span></h1><p className="deck-description">I’m Nikita. I build machine learning systems that make healthcare safer and everyday decisions simpler.</p><button className="deck-cta" onClick={() => go(1)}>Meet the work <span aria-hidden="true">↗</span></button><div className="intro-tags"><span>Applied machine learning</span><span>Health tech</span><span>Product thinking</span></div></div>
            <figure className="graduation-photo"><Image src="/media/graduation.jpeg" alt="Nikita in her graduation cap and gown outside the Brendan Iribe Center" width={1800} height={1200} priority /><figcaption>A chapter worth celebrating.</figcaption></figure>
          </div>}
          {index === 1 && <div className="feature-card-body"><div><p className="deck-kicker">CO-FOUNDER · HEALTH TECHNOLOGY</p><h2>Less noise.<br /><span>Better care.</span></h2><p className="deck-description">NRSAA is a wireless monitoring concept that brings patient signals together to help care teams focus on what matters.</p><div className="award-line"><strong>1st place</strong><span>Cre8 at Arab Health</span></div><div className="deck-actions"><a className="deck-cta" href="/case-studies/nrsaa">Explore NRSAA <span>↗</span></a><a className="text-action" href="https://nrsaa.com" target="_blank" rel="noreferrer">Visit website ↗</a></div></div><figure className="project-visual"><Image src="/media/nrsaa-render.png" alt="NRSAA wireless patient monitoring device concept" width={1212} height={908} /><figcaption>THE CONCEPT / WIRELESS PATIENT MONITORING</figcaption></figure></div>}
          {index === 2 && <div className="work-card-body"><div className="work-heading"><h2>Built to<br /><span>be useful.</span></h2><p>Three different problems.<br />The same instinct: make it work for people.</p></div><div className="selected-projects">{selected.map((project, index) => <a key={project.slug} href={project.links.caseStudy ?? project.links.repo} target={project.links.caseStudy ? undefined : "_blank"} rel={project.links.caseStudy ? undefined : "noreferrer"} className="selected-project"><span className="project-index">0{index + 1}</span><h3>{project.slug === "federated-learning-mlops" ? "Federated learning" : project.title}</h3><p>{project.slug === "nrsaa" ? project.highlight : project.slug === "allergy-nav" ? "Allergy-aware dining, built in 10 hours. 2nd place at HackUMD." : project.slug === "data-purr-suit" ? "IoMT security research. 77.8% fewer features, 0.998 F1." : "Privacy-aware training for autonomous driving, with containerized MLOps."}</p><span className="project-open">{project.links.caseStudy ? "Read case study" : "View on GitHub"} ↗</span></a>)}</div></div>}
          {index === 3 && <div className="feature-card-body"><div><p className="deck-kicker">MEDICAL IMAGING · APRIL 2026</p><h2>Sharper images.<br /><span>Grounded in physics.</span></h2><p className="deck-description">Brain MRI motion correction that pairs a transformer restoration model with the constraints of the original scan.</p><div className="research-stats"><div><strong>~31 ms</strong><span>Inference per slice</span></div><div><strong>0.992</strong><span>Best saved-test SSIM</span></div></div><a className="deck-cta" href="/assets/msml612-final-report.pdf" target="_blank" rel="noreferrer">Read the research <span>↗</span></a></div><figure className="research-visual"><Image src="/media/msml612-final-report-cover.png" alt="Cover of the brain MRI motion correction research report" width={850} height={1100} /><figcaption>HYBRID TRANSFORMER / MOTION CORRECTION</figcaption></figure></div>}
          {index === 4 && <div className="background-card-body"><div><p className="deck-kicker">THE PERSON BEHIND THE PROJECTS</p><h2>Technical depth.<br /><span>Human perspective.</span></h2><p className="deck-description">I’m interested in what happens beyond the model: how a system fits into a workflow, earns trust, and makes someone’s day easier.</p><a className="text-action" href={profile.resumeUrl} target="_blank" rel="noreferrer">View my résumé ↗</a></div><div className="background-details"><div><span>01 / BUILDING</span><h3>Co-Founder, NRSAA</h3><p>Wireless monitoring & predictive care<br />2024 — Present</p></div><div><span>02 / LEARNING</span><h3>University of Maryland</h3><p>M.S. in Applied Machine Learning<br />2024 — 2026</p></div><div><span>03 / TOOLKIT</span><p className="toolkit">Python · ML · Signal processing<br />Cloud systems · MLOps · Product design</p></div></div></div>}
          {index === 5 && <div className="contact-card-body"><p className="deck-kicker">GOOD WORK STARTS WITH A CONVERSATION</p><h2>Something in mind?<br /><span>Let’s build it.</span></h2><p className="deck-description">For thoughtful technology, ambitious ideas,<br className="desktop-break" /> and problems worth solving.</p><a className="deck-cta" href={profile.email}>Say hello <span>↗</span></a><div className="contact-bottom"><a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a></div></div>}
          </div>
        </article>;
        })}
      </section>
      <footer className="deck-controls"><nav className="chapter-nav" aria-label="Choose a card">{chapters.map((chapter, index) => <button key={chapter} onClick={() => go(index)} aria-current={active === index ? "step" : undefined}><span className="chapter-dot" />{chapter}</button>)}</nav><div className="deck-pagination"><span aria-live="polite">0{active + 1}<span className="page-total"> / 06</span></span><button onClick={() => go(active - 1)} aria-label="Previous card">←</button><button className="next-card" onClick={() => go(active + 1)} aria-label="Next card">→</button></div></footer>
      <div className="deck-footnote"><span>A FEW THINGS I’VE BUILT. A LITTLE ABOUT WHY.</span><span>CLICK A CARD TO CONTINUE · USE ← →</span></div>
      <section className="horizon-story" aria-labelledby="horizon-heading">
        <div className="horizon-copy"><p className="deck-kicker">THE NEXT CHAPTER</p><h2 id="horizon-heading">A milestone behind me.<br /><span>A horizon ahead.</span></h2><p>From graduation to what comes next: thoughtful technology, meaningful problems, and room to keep learning.</p><a href={profile.email} className="deck-cta">Let’s connect <span aria-hidden="true">↗</span></a></div>
        <figure className="runway-photo"><Image src="/media/runway-sunset.jpeg" alt="Golden sunset over a runway stretching toward the horizon" width={1350} height={1800} /><figcaption>Looking ahead, with intention.</figcaption></figure>
      </section>
    </main>
  );
}
