import Image from "next/image";
import Link from "next/link";

const stories = {
  allernav: {
    category: "AI ENGINEERING / END-TO-END PRODUCT", title: "AllerNav", tagline: "From ingredients to an interactive dining experience.",
    overview: "An allergy-aware dining prototype built in 10 hours at HackUMD. The project brings ingredient-based detection, rule-based inference, trust-weighted dish ranking, and interactive maps into a Streamlit application.",
    role: "End-to-end product builder · HackUMD", scope: "Python · Streamlit · Rule-based inference · Folium",
    problem: "Ingredient information is fragmented, and comparing dishes against personal allergies can take significant effort. The project explores how a connected workflow can make that information easier to review.",
    approach: [
      ["Connect the inputs", "Bring dish ingredients and user allergy preferences into the same workflow, then identify ingredient-level allergen signals."],
      ["Build the inference pipeline", "Use rule-based inference, ingredient scoring, and user trust weighting to rank dishes for review."],
      ["Deliver an interactive product", "Surface results in Streamlit and visualize locations using Folium maps. The interface connects data processing and inference to a practical user journey."],
    ],
    result: "Built the prototype in 10 hours and earned 2nd place in the HackUMD General Track among 30+ teams. AllerNav demonstrates how I connect backend logic, inference, and a usable interface under a tight deadline.",
    outcomes: ["10-hour end-to-end build", "2nd place · HackUMD General Track", "Ingredient scoring + interactive maps"],
    links: [{label:"Explore the repository",href:"https://github.com/niki-21/AllergyNav"}], next:"federated-learning-mlops", nextLabel:"Distributed learning for autonomous driving", image:false,
  },
  nrsaa: {
    category: "VENTURE / HEALTH TECHNOLOGY", title: "NRSAA", tagline: "A clearer signal for care teams.",
    overview: "A wireless patient-monitoring concept that combines multiple vital signs with predictive analysis. The aim: reduce monitoring friction and help clinicians distinguish meaningful alerts from noise.",
    role: "Co-founder · Applied ML & product direction", scope: "Wireless sensing · Signal processing · Predictive monitoring",
    problem: "Wired monitors restrict movement. Fragmented signals and frequent alarms make it harder to prioritize the moments that need attention.",
    approach: [
      ["Bring the signals together", "The concept integrates ECG, SpO2, temperature, respiratory rate, and blood pressure in a modular wireless workflow."],
      ["Make anomalies actionable", "Machine learning-assisted anomaly detection is paired with a clear display, so the system is designed around interpretation as well as collection."],
      ["Build beyond the model", "My work connects the technical proposal with product direction, pitch materials, and the needs of patients and care teams."],
    ],
    result: "Developed the monitoring concept and venture materials, with recognition across three startup competitions. The venture connects sensing, predictive analysis, and product design around a concrete care workflow.",
    outcomes: ["1st · Cre8 at Arab Health", "2nd · Dell Envision the Future", "3rd · Sheraa Startup DOJO+"],
    links: [{label:"Visit NRSAA",href:"https://nrsaa.com"},{label:"Company LinkedIn",href:"https://ae.linkedin.com/company/nrsaa"}],
    next:"federated-learning-mlops", nextLabel:"Federated learning for autonomous driving", image:true,
  },
  "federated-learning-mlops": {
    category: "SYSTEMS / DISTRIBUTED MACHINE LEARNING", title: "Learning, without pooling the data.", tagline: "Federated learning for autonomous driving.",
    overview: "A systems project exploring privacy-aware training across distributed driving environments, with containerization and MLOps practices to make experiments reproducible and easier to operate.",
    role: "ML systems project", scope:"Federated learning · Containerization · Evaluation",
    problem:"Driving data varies between clients and environments. Centralizing raw data introduces privacy concerns, while distributed training adds coordination and evaluation challenges.",
    approach:[
      ["Keep training distributed", "Frame learning around clients with different data and operating conditions, rather than assuming one pooled dataset represents the whole system."],
      ["Make experiments repeatable", "Use containerized workflows to connect the training setup with reproducible orchestration and clearer evaluation boundaries."],
      ["Think operationally", "Consider aggregation, client behavior, observability, and drift alongside model performance. Reliability depends on the whole pipeline."],
    ],
    result:"The work strengthened my approach to distributed ML as an infrastructure and evaluation problem. It connects privacy-aware training with the workflows needed to reproduce experiments and understand client behavior.",
    outcomes:["Privacy-aware coordination", "Reproducible workflows", "Systems-level evaluation"],
    links:[{label:"Explore the repository",href:"https://github.com/niki-21/Containerized-Federated-Learning-for-Autonomous-Driving-Utilizing-MLOps"}],
    next:"nrsaa",nextLabel:"NRSAA: wireless patient monitoring",image:false,
  },
};

export function ProjectStory({slug}:{slug:keyof typeof stories}) {
  const story=stories[slug];
  return <main className="project-story">
    <header className="story-nav"><Link href="/">Nikita Miller</Link><Link href="/">← Back to the cards</Link></header>
    <section className="story-hero"><p className="deck-kicker">{story.category}</p><h1>{story.title}</h1><p className="story-tagline">{story.tagline}</p><p className="story-overview">{story.overview}</p><div className="deck-actions">{story.links.map(link=><a key={link.href} className="deck-cta" href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
    <dl className="story-facts"><div><dt>ROLE / CONTEXT</dt><dd>{story.role}</dd></div><div><dt>FOCUS</dt><dd>{story.scope}</dd></div></dl></section>
    <nav className="story-jumps" aria-label="Project sections"><a href="#problem">01 / Problem</a><a href="#approach">02 / Approach</a><a href="#outcome">03 / Outcome</a></nav>
    {story.image && <figure className="story-image"><Image src="/media/nrsaa-render.png" alt="Early NRSAA wireless monitoring device concept" width={1212} height={908}/><figcaption>Early device concept · wireless patient monitoring</figcaption></figure>}
    <section id="problem" className="story-section"><p className="deck-kicker">01 / THE PROBLEM</p><div><h2>Where the work starts.</h2><p>{story.problem}</p></div></section>
    <section id="approach" className="story-section"><p className="deck-kicker">02 / THE APPROACH</p><div><h2>How I approached it.</h2><div className="story-steps">{story.approach.map(([title,body],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
    <section id="outcome" className="story-section"><p className="deck-kicker">03 / THE OUTCOME</p><div><h2>What came out of it.</h2><p>{story.result}</p><ul className="story-outcomes">{story.outcomes.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <footer className="story-next"><p className="deck-kicker">ANOTHER SIDE OF MY WORK</p><Link href={`/case-studies/${story.next}`}>{story.nextLabel} ↗</Link><Link href="/" className="text-action">Return to portfolio</Link></footer>
  </main>;
}
