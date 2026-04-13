import {
  CaseStudy,
  CuratedRepo,
  ExperienceItem,
  Metric,
  NavItem,
  Profile,
  ProjectItem,
  SkillGroup,
} from "@/lib/types";

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "summary", label: "Summary" },
  { id: "flagship", label: "NRSAA" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const profile: Profile = {
  name: "Nikita Miller",
  headline:
    "Designing thoughtful AI systems that make care safer, decisions clearer, and impact easier to feel.",
  summary:
    "I care about the intersection of human experience, attention to detail, and efficiency. My work spans health tech, machine learning, and product systems, with a focus on building tools that reduce noise, improve response, and create visible public impact.",
  location: "United States",
  ctaText: "Explore NRSAA",
  resumeUrl: "/assets/nikita-miller-resume.pdf",
  linkedInUrl: "https://www.linkedin.com/in/nikitacmiller/",
  githubUrl: "https://github.com/niki-21",
  email: "mailto:nikimiller1221@gmail.com",
  portraitSrc: "/media/nikita-portrait.jpeg",
  heroVisualSrc: "/media/hero-illustration.jpeg",
  heroVisualAlt: "Illustrated avatar of Nikita Miller sitting with a laptop",
  publicNote:
    "This site is meant to be read by anyone: collaborators, clinicians, founders, researchers, and people simply curious about the kind of technology I want to build in the world.",
  heroHighlights: [
    "Human-centered systems",
    "Attention to detail",
    "Efficiency with public impact",
  ],
};

export const summaryMetrics: Metric[] = [
  {
    label: "Design lens",
    value: "Human-centered",
    detail: "The strongest technical systems still have to feel useful, understandable, and considerate to the people around them.",
  },
  {
    label: "Working style",
    value: "Detailed + efficient",
    detail: "I like thoughtful systems, clean workflows, and products that remove friction instead of adding more of it.",
  },
  {
    label: "North star",
    value: "High impact",
    detail: "I’m most motivated by work that improves daily decisions, safety, and quality of life at meaningful scale.",
  },
];

export const flagshipMetrics: Metric[] = [
  {
    label: "Public impact",
    value: "Safer monitoring",
    detail: "Built around reducing avoidable clinical noise and helping providers respond faster to what matters.",
  },
  {
    label: "Venture momentum",
    value: "1st • 2nd • 3rd",
    detail: "Recognition across Cre8 at Arab Health, Dell Envision the Future, and Sheraa Startup DOJO+.",
  },
];

export const summaryParagraphs = [
  "I’m drawn to problems where technical excellence alone is not enough. The systems I care about need to be precise, efficient, and deeply aware of the people they affect. That usually means thinking beyond the model toward usability, workflow, clarity, and trust.",
  "Across healthcare, distributed ML, and early-stage product prototypes, I’ve learned that the highest-impact work happens when strong engineering is paired with empathy and detail. I want the result to feel rigorous under the hood and clear on the surface.",
];

export const experienceItems: ExperienceItem[] = [
  {
    org: "NRSAA",
    role: "Co-Founder & Applied ML Builder",
    dates: "2024 - Present",
    summary:
      "Building NRSAA as a public-health-focused venture centered on reducing alarm fatigue through wireless monitoring, predictive analysis, and more humane patient care.",
    bullets: [
      "Framed NRSAA around a clear human problem instead of a vague AI demo: too many alarms, too much monitoring friction, and too little signal clarity in care settings.",
      "Developed the concept for a real-time wireless system that brings ECG, SpO2, temperature, respiratory rate, and blood pressure into a single predictive monitoring workflow.",
      "Helped shape the venture’s momentum through collaborations and public-facing recognition, including Dubai Health, SoiLab, and competition placements across the UAE health-tech ecosystem.",
    ],
    impactMetrics: ["Alarm fatigue focus", "Wireless monitoring system", "Dubai Health + SoiLab"],
  },
  {
    org: "University of Maryland",
    role: "M.S. in Applied Machine Learning",
    dates: "2024 - 2026",
    summary:
      "Pursuing UMD’s applied, industry-oriented machine learning master’s program while building breadth across real systems, not just isolated models.",
    bullets: [
      "The program’s Science Academy structure emphasizes hands-on, professional coursework that connects ML theory to deployment-minded implementation.",
      "My coursework has expanded how I think about systems end to end, especially through robotics, cloud computing, optimization, deep learning, and adjacent MLOps practice.",
      "That interdisciplinary mix has made me more intentional about how models interact with infrastructure, constraints, and real-world decision making.",
    ],
    impactMetrics: ["Robotics", "Cloud + systems", "Optimization + deep learning"],
  },
  {
    org: "Competition Prototypes",
    role: "Technical Product Builder",
    dates: "2025 - Present",
    summary:
      "Using rapid prototypes to explore how AI can become more accessible, useful, and action-oriented for everyday users.",
    bullets: [
      "Cargo Sentinel explores AI support for pharmaceutical cold-chain monitoring, where risk detection and human decision support matter as much as raw telemetry.",
      "AllergyNav is an early competition-stage concept focused on making allergy-safe choices easier to navigate in the real world, not just easier to classify in theory.",
      "Both projects reflect how I like to work: start from a practical public problem, design the interaction carefully, and build toward something that people can immediately understand.",
    ],
    impactMetrics: ["Cargo Sentinel", "AllergyNav", "Public-facing product thinking"],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "nrsaa",
    title: "NRSAA",
    dates: "2024 - Present",
    highlight: "Wireless health monitoring venture",
    techStack: ["Health Tech", "Machine Learning", "Signal Processing", "Product Design", "Systems Thinking"],
    motivation:
      "I wanted to work on a problem where better technology could directly improve how people experience care, not just how a model performs on paper.",
    challenge:
      "Alarm fatigue, patient immobility, and fragmented monitoring systems make it harder for care teams to focus on what matters most when time is critical.",
    solution:
      "NRSAA rethinks monitoring through a wireless, predictive system designed to collect key patient signals, surface meaningful anomalies, and reduce unnecessary noise for providers.",
    outcomes: [
      "Centered the product around a high-impact healthcare problem the public can immediately understand.",
      "Built the concept into a stronger venture story through pitch decks, proposals, partnerships, and competition traction.",
      "Positioned NRSAA as the flagship expression of how I combine empathy, detail, and technical ambition.",
    ],
    links: {
      website: "https://nrsaa.com",
      linkedin: "https://ae.linkedin.com/company/nrsaa",
      caseStudy: "/case-studies/nrsaa",
    },
    featured: true,
  },
  {
    slug: "federated-learning-mlops",
    title: "Containerized Federated Learning for Autonomous Driving",
    dates: "2025",
    highlight: "Distributed systems case study",
    techStack: ["Federated Learning", "MLOps", "Containerization", "Autonomy", "Evaluation"],
    motivation:
      "I wanted to understand what it really takes to keep learning systems improving when the data cannot just be pooled in one place.",
    challenge:
      "Autonomous-driving environments are heterogeneous by default, so privacy, coordination, monitoring, and evaluation all become harder at the same time.",
    solution:
      "I approached the work as a full systems question, connecting federated training with containerized workflows, repeatable evaluation, and more thoughtful operational design.",
    outcomes: [
      "Made the project legible as both an ML and infrastructure problem.",
      "Strengthened my thinking around privacy-aware coordination and production-minded evaluation.",
      "Built a cleaner bridge between research ideas and the realities of distributed deployment.",
    ],
    links: {
      repo: "https://github.com/niki-21/Containerized-Federated-Learning-for-Autonomous-Driving-Utilizing-MLOps",
      caseStudy: "/case-studies/federated-learning-mlops",
    },
    featured: true,
  },
  {
    slug: "cargo-sentinel",
    title: "Cargo Sentinel",
    dates: "2026",
    highlight: "Competition-stage product concept",
    techStack: ["Operations AI", "Node.js", "Workflow Design", "Dashboard Systems", "Human-in-the-loop"],
    motivation:
      "I wanted to prototype an AI product that feels useful under pressure, where people need clarity and action, not just more data.",
    challenge:
      "Cold-chain logistics is full of moving parts, and a useful system has to combine monitoring, escalation, compliance, and communication in one place.",
    solution:
      "Cargo Sentinel frames that problem as a control-tower experience with risk detection, human review, and clean operational storytelling.",
    outcomes: [
      "Shows how I think about AI products for real operators and public-facing outcomes.",
      "Combines backend logic with a polished interface and business-facing narrative.",
      "Serves as an early but concrete example of my product instincts beyond healthcare.",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "data-purr-suit",
    title: "Data Purr-Suit",
    dates: "Jan 2024 - Nov 2024",
    highlight: "Published cybersecurity research",
    techStack: ["IoMT Security", "Feature Selection", "T-SNE", "Class Imbalance", "Random Forest"],
    motivation:
      "I wanted to build a security project where strong results were tied to better problem framing, not just more brute-force modeling.",
    challenge:
      "IoMT attack detection has to balance accuracy, dimensionality, interpretability, and class imbalance all at once.",
    solution:
      "I optimized the IDS workflow by aggressively reducing the feature space, visualizing structure with T-SNE, and improving fraud detection through imbalance-aware training strategies.",
    outcomes: [
      "Reduced the feature set by 77.8% while reaching an F1 score of 0.998.",
      "Improved IoMT fraud detection by 20% through imbalance-handling strategies.",
      "Published the work at the 2024 IEEE International Conference on IoT & Intelligence Systems (IoTAS).",
    ],
    links: {
      repo: "https://github.com/niki-21/Purr-suit",
    },
    featured: false,
  },
  {
    slug: "ibm-generative-ai-engineering",
    title: "IBM Generative AI Engineering with LLMs",
    dates: "Feb 2025",
    highlight: "LLM engineering track",
    techStack: ["GPT", "BERT", "T5", "Hugging Face", "BLEU", "ROUGE"],
    motivation:
      "I wanted hands-on experience across both encoder-only and encoder-decoder transformer workflows instead of treating LLMs as black boxes.",
    challenge:
      "Technical text understanding and summarization require more than just model access. They need careful prompting, evaluation, and retrieval design.",
    solution:
      "I implemented and fine-tuned GPT, BERT, and T5 pipelines for technical understanding, semantic retrieval, and summarization using Hugging Face tooling.",
    outcomes: [
      "Built transformer-based pipelines with embeddings and encoder-decoder architectures for domain-specific semantic retrieval.",
      "Evaluated models with BLEU, ROUGE, and perplexity.",
      "Improved BLEU by 12% through prompting and optimization.",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "allergy-nav",
    title: "AllerNav",
    dates: "2026",
    highlight: "HackUMD 2nd place project",
    techStack: ["Streamlit", "Python", "Folium", "Rule-Based Inference", "Maps"],
    motivation:
      "I’m interested in products that lower daily cognitive load for people making high-stakes personal decisions, including food and allergy safety.",
    challenge:
      "Navigating allergy-safe options is often confusing, inconsistent, and stressful, especially when the information is fragmented or time-sensitive.",
    solution:
      "AllergyNav ranks restaurant dishes by safety using ingredient-based allergen detection, rule-based inference, and user trust weighting, then surfaces results through dynamic mapping and visualization.",
    outcomes: [
      "Built an end-to-end ML-backed Streamlit web app in 10 hours.",
      "Created ingredient scoring and dynamic visualization via Folium maps.",
      "Earned 2nd place among 30+ teams in the HackUMD General Track.",
    ],
    links: {
      repo: "https://github.com/niki-21/AllergyNav",
    },
    featured: false,
  },
  {
    slug: "resume-chat-fast-session-recovery",
    title: "Resume Chat with Fast Session Recovery",
    dates: "Sep 2025 - Dec 2025",
    highlight: "Serverless LLM system",
    techStack: ["FastAPI", "AWS Lambda", "DynamoDB", "S3", "Load Testing"],
    motivation:
      "I wanted to build an LLM-assisted product that stayed responsive and resilient even when sessions were interrupted or users dropped unexpectedly.",
    challenge:
      "Fast chat experiences often break down once you add crash recovery, durable persistence, and serverless scaling constraints.",
    solution:
      "I designed a fully serverless editor with FastAPI on AWS Lambda, backed by a hot-cold persistence architecture for autosave and durable session recovery.",
    outcomes: [
      "Built crash-safe session recovery with DynamoDB and S3.",
      "Achieved sub-320 ms p95 latency under moderate load.",
      "Benchmarked scalability and durability against an HPC single-node baseline.",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "beat-the-mouse",
    title: "Beat the Mouse",
    dates: "Sep 2025 - Present",
    highlight: "NeurIPS competition project",
    techStack: ["Reinforcement Learning", "SAC", "PPO", "ResNet", "DrQ"],
    motivation:
      "I wanted to study robustness under domain shift instead of optimizing only for narrow in-distribution success.",
    challenge:
      "The NeurIPS Robust Visual Foraging setting pushes agents to generalize under visual change, limited budgets, and distributional drift.",
    solution:
      "I evaluated visual RL agents under domain shift, switched from PPO to SAC for stronger generalization, and paired the policy with a ResNet encoder plus DrQ-style augmentation.",
    outcomes: [
      "Improved performance by 18% after replacing PPO with SAC under a 50k-step budget.",
      "Reached 69% success in extended experiments with stronger robustness to unseen conditions.",
      "Delivered performance competitive with top-5 leaderboard submissions under Track-1 evaluation and paper-submission quality standards.",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "opticam",
    title: "OptiCam",
    dates: "2025",
    highlight: "Optimization project",
    techStack: ["Binary Integer Programming", "Gurobi", "Ray Casting", "MILP", "Optimization"],
    motivation:
      "I wanted to work on an optimization problem where good modeling decisions directly change how useful the final system becomes.",
    challenge:
      "Camera placement under occlusion and directional constraints is hard to brute-force well, especially when budget and coverage trade off against each other.",
    solution:
      "I built a visibility-aware binary integer programming model with ray-cast coverage estimation and solved large MILPs to study cost-effective camera placement.",
    outcomes: [
      "Achieved about 76% coverage at optimal budget in the modeled setup.",
      "Benchmarked GLPK_MI, CBC, and Gurobi across solver performance.",
      "Used marginal-gain saturation analysis to guide deployment trade-offs.",
    ],
    links: {
      repo: "https://github.com/niki-21/OptiCam",
    },
    featured: false,
  },
  {
    slug: "headline-hunter",
    title: "Headline-Hunter",
    dates: "2025",
    highlight: "Fake news detection web app",
    techStack: ["Flask", "TF-IDF", "Random Forest", "BERT", "NLP"],
    motivation:
      "I wanted to compare classical NLP and transformer pipelines in a product format where the latency-versus-accuracy trade-off is visible.",
    challenge:
      "Real-time fake news detection has to balance interpretability, speed, and accuracy instead of optimizing only one of those dimensions.",
    solution:
      "I built a Flask app that lets users compare TF-IDF plus Random Forest with a fine-tuned BERT model while exposing prediction confidence in the UI.",
    outcomes: [
      "Reached up to roughly 98% F1 across the strongest configurations.",
      "Created an interactive model-switching interface for clearer comparison.",
      "Turned evaluation trade-offs into something users can actually feel in the product.",
    ],
    links: {
      repo: "https://github.com/niki-21/Headline-Hunter",
    },
    featured: false,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Machine Learning",
    items: [
      "Applied machine learning",
      "Time-series thinking",
      "Federated learning systems",
      "Model evaluation",
      "Feature engineering",
      "Predictive workflows",
    ],
  },
  {
    label: "Systems",
    items: [
      "Signal processing",
      "Cloud-oriented thinking",
      "Optimization",
      "MLOps thinking",
      "Distributed coordination",
      "Reproducibility",
      "Monitoring-aware design",
    ],
  },
  {
    label: "Product & UX",
    items: [
      "Human-centered design",
      "Accessibility-minded product thinking",
      "Interface clarity",
      "Decision-support flows",
      "Public-facing storytelling",
      "Rapid prototyping",
    ],
  },
  {
    label: "Tools",
    items: [
      "Python",
      "TypeScript",
      "Next.js",
      "Node.js",
      "FastAPI",
      "GitHub + Vercel",
    ],
  },
];

export const curatedRepos: CuratedRepo[] = [];

export const caseStudies: CaseStudy[] = [
  {
    slug: "nrsaa",
    title: "NRSAA",
    eyebrow: "Flagship Case Study",
    description:
      "Non-Restrictive Sensing with Algorithmic Assistance is a wireless health monitoring concept designed to reduce alarm fatigue, support patient mobility, and make real-time care signals easier to act on.",
    dates: "2024 - Present",
    stack: [
      "Wireless Monitoring",
      "Predictive Analytics",
      "Machine Learning",
      "Healthcare Systems",
      "Signal Processing",
      "Product Strategy",
    ],
    metrics: flagshipMetrics,
    challenge:
      "Healthcare teams often face too much noise and too little clarity. Conventional wired monitoring can restrict movement, overwhelm staff with alarms, and make genuinely urgent events harder to prioritize.",
    solution:
      "NRSAA responds with a wireless monitoring concept that brings multiple patient signals into a cleaner predictive workflow, pairing real-time sensing with machine learning-assisted anomaly detection and a more humane monitoring experience.",
    outcomes: [
      "Built a clearer public-facing story around reducing alarm fatigue rather than centering the project on abstract AI claims.",
      "Created venture materials spanning a pitch deck, technical proposal, and product direction rooted in patient comfort and provider efficiency.",
      "Established NRSAA as the strongest expression of my interest in high-impact health technology.",
    ],
    awards: [
      "1st in Cre8 Competition at Arab Health",
      "2nd in Dell Envision the Future Competition",
      "3rd in Sheraa Startup DOJO+ Competition",
      "Collaboration signals across Dubai Health, MBRU, and SoiLab materials",
    ],
    heroLinks: [
      { label: "NRSAA.com", href: "https://nrsaa.com" },
      { label: "NRSAA on LinkedIn", href: "https://ae.linkedin.com/company/nrsaa" },
    ],
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "NRSAA started from a healthcare problem that is easy to explain and hard to solve well: when monitoring systems create too much noise, the alarms that matter become easier to miss. Alarm fatigue is both a clinical risk and a design failure.",
          "That framing matters to me because it keeps the project grounded in people. The goal is not to make monitoring feel more technical. It is to make care settings calmer, clearer, and safer.",
        ],
      },
      {
        title: "The system",
        paragraphs: [
          "The attached proposal materials describe a real-time wireless monitoring direction that integrates ECG, SpO2, temperature, respiratory rate, and blood pressure into one modular workflow. The software layer retrieves signals, displays them clearly, and uses machine learning to help detect anomalies such as arrhythmia.",
          "What I find compelling about this design is the balance: technical sophistication, patient mobility, provider usability, and future scalability all have to coexist for the product to be meaningful.",
        ],
      },
      {
        title: "Why it leads the site",
        paragraphs: [
          "NRSAA is my anchor project because it shows the version of AI work I most want to build: detailed, efficient, and visibly useful to the public. It connects health impact, product storytelling, and technical thinking in one place.",
          "It also demonstrates that I care about how a project is communicated. The pitch, proposal, and brand direction are not separate from the system. They are part of how the idea earns trust and momentum.",
        ],
      },
    ],
    media: [
      {
        src: "/media/nrsaa-render.png",
        alt: "NRSAA monitor rendering",
        width: 1212,
        height: 908,
        caption:
          "Early render of the NRSAA monitor concept, showing the portable device, chest leads, and contact-sensor armband.",
      },
      {
        src: "/media/nrsaa-pitch-cover.png",
        alt: "NRSAA pitch deck cover",
        width: 720,
        height: 405,
        caption:
          "Public-facing venture image used on the site while keeping internal technical docs and detailed architecture private.",
      },
    ],
  },
  {
    slug: "federated-learning-mlops",
    title: "Containerized Federated Learning for Autonomous Driving",
    eyebrow: "Systems Research Case Study",
    description:
      "A distributed-learning case study focused on how privacy, heterogeneity, evaluation, and operations all collide when training models for autonomous-driving contexts.",
    dates: "2025",
    stack: ["Federated Learning", "Containerization", "MLOps", "Autonomous Driving", "Evaluation"],
    metrics: [
      {
        label: "Core lens",
        value: "Systems-first",
        detail: "I treated federation as an operational design problem, not just a training setup.",
      },
      {
        label: "Client reality",
        value: "Heterogeneous",
        detail: "Different fleets, environments, and edge conditions change how updates should be trusted.",
      },
      {
        label: "Primary concern",
        value: "Privacy + reliability",
        detail: "Useful learning without centralizing all raw driving data.",
      },
      {
        label: "What it shows",
        value: "MLOps maturity",
        detail: "The project highlights coordination, observability, and deployment-minded thinking.",
      },
    ],
    challenge:
      "Autonomous-driving data is fragmented by design, so no single client tells the whole story. That makes federation appealing, but it also makes evaluation, monitoring, and rollout decisions significantly harder.",
    solution:
      "I framed the project around containerized workflows, reproducible orchestration, and careful aggregation so the technical story stays connected to operations, drift, and reliability.",
    outcomes: [
      "Strengthened my understanding of distributed ML beyond pure algorithm choice.",
      "Mapped federated training concerns to practical MLOps questions like validation, observability, and client coordination.",
      "Created a case study that broadens the site beyond healthcare while staying grounded in real system design.",
    ],
    awards: [
      "Containerized experimentation",
      "Federated training perspective",
      "Autonomous-driving context",
    ],
    heroLinks: [
      { label: "GitHub repo", href: "https://github.com/niki-21/Containerized-Federated-Learning-for-Autonomous-Driving-Utilizing-MLOps" },
      { label: "Back to portfolio", href: "/" },
    ],
    sections: [
      {
        title: "The real challenge",
        paragraphs: [
          "Federated learning sounds straightforward until you account for reality: different clients see different data, perform differently, and drift differently over time. In autonomous-driving settings, that complexity multiplies.",
          "This project helped me focus on the deeper question: how do we coordinate learning in a way that remains private, reproducible, and worth trusting?",
        ],
      },
      {
        title: "Why MLOps matters here",
        paragraphs: [
          "The MLOps layer is what turns a neat idea into a maintainable system. Containerization, evaluation boundaries, aggregation logic, and visibility into client behavior all affect whether a federated pipeline is credible.",
          "That is why this work stands out to me as more than a paper exercise. It forced me to think about model improvement and operational discipline together.",
        ],
      },
      {
        title: "What it adds to the portfolio",
        paragraphs: [
          "This case study broadens the site by showing how I reason about privacy, coordination, and large-scale systems alongside more human-facing product work.",
          "It reinforces that I do not think of ML in isolation. I think about the environments models live in and the infrastructure that keeps them usable.",
        ],
      },
    ],
    media: [],
  },
];

export const contactLinks = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedInUrl },
  { label: "Email", href: profile.email },
];
