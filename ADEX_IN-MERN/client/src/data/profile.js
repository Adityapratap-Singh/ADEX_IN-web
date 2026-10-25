export const profile = {
  name: "Adityapratap Singh",
  title: "Software engineer building multi‑agent AI systems and full‑stack products.",
  intro:
    "I'm an IT engineering student at Savitribai Phule Pune University (graduating 2028) with 2+ years of hands-on development across full-stack apps, local LLM systems and automation. I'm looking for a technical internship where I can ship real work.",
  email: "adityaprataps406@gmail.com",
  github: "https://github.com/Adityapratap-Singh",
  linkedin: "https://www.linkedin.com/in/aadi-p-s/",
  x: "https://x.com/adityapratps406",
  resume: "/Adityapratap-Singh-Resume.pdf",
  about: [
    "I started freelancing in 2022 and have since built web apps, dashboards and automation for clients, run a café whose daily operations double as a test bed for my own POS software, and led a 70-member student entrepreneurship cell.",
    "What keeps pulling me back is systems that have to keep working when parts fail: agent pipelines that repair their own output, point-of-sale software that works offline, devices that never need the cloud.",
  ],
};

// Stages of the AI Dev Pipeline, used by the hero run board.
export const agents = ["Architect", "UI/UX", "Database", "Frontend", "Backend", "Security", "DevOps", "Documentation"];
export const qaChecks = ["Install dependencies", "Run tests", "Build", "Start server", "HTTP health check"];

export const flagship = {
  title: "AI Dev Pipeline",
  status: "Main project",
  summary:
    "A multi-agent system that turns a software requirement into a working application. Specialised agents handle architecture, UI/UX, database, frontend, backend, security, DevOps and documentation, then an automated QA loop checks and repairs what they produced.",
  points: [
    "Runs local LLMs through Ollama, with model fallback and resource checks so the model fits the hardware.",
    "QA and repair loop: installs dependencies, runs tests and the build, starts the server, hits it with HTTP health checks, and feeds failures back for correction.",
    "Production plumbing: job queue, crash recovery, duplicate detection, structured logging, API authentication and pipeline monitoring.",
  ],
  tags: ["Multi-agent LLMs", "Ollama", "Local models", "Automated QA", "Job queue"],
};

export const projects = [
  {
    title: "ADEX_ISL",
    status: "Prototype in progress",
    summary:
      "An offline Indian Sign Language communication device: camera, sign recognition, a local LLM and text-to-speech, with nothing sent to the cloud. I'm currently auditing and preparing the CISLR video dataset for model training.",
    more: [
      "Why offline: privacy for the person signing, and no network latency in a live conversation.",
      "Approach under evaluation: hand and pose landmarks (MediaPipe) so inference stays light enough for a small device.",
      "Limits today: isolated signs come first; continuous sentences are a later, harder problem.",
    ],
    tags: ["Computer vision", "CISLR dataset", "Ollama", "Text-to-speech", "Accessibility"],
  },
  {
    title: "AI communication platform",
    status: "Built",
    summary:
      "A platform that brings WhatsApp Business API, SMS, IVR and AI chatbots together behind one authenticated dashboard.",
    tags: ["React", "Node.js", "MongoDB", "WhatsApp Business API", "IVR"],
  },
  {
    title: "Hell Out Café POS",
    status: "Running in a live café",
    summary:
      "Point-of-sale software I develop against the real workflows of the café I run: QR ordering, a kitchen display system, inventory, offline synchronisation and operational analytics.",
    tags: ["QR ordering", "Kitchen display", "Offline sync", "Analytics"],
  },
];

export const alsoBuilt = [
  {
    title: "ARMO",
    text: "Research framework for resilient multi-agent orchestration: tasks as dependency graphs (NetworkX) with Pydantic schemas and local LLMs. A failed QA step injects corrective tasks instead of aborting the run.",
    tags: "Python, NetworkX, Pydantic, Ollama",
  },
  {
    title: "HOMIE",
    text: "Local-first ESP32 smart-home controller. MQTT telemetry, a Python policy engine, a gas-hazard latch and a 10-second telemetry watchdog that cuts all circuits. Tested in Wokwi and on a breadboard.",
    tags: "ESP32, MQTT, Python, C++",
  },
  {
    title: "Personal video library",
    text: "Next.js app that scans about 58 GB of local lecture videos into a searchable curriculum and streams them with HTTP 206 range requests.",
    tags: "Next.js, TypeScript, Node.js",
  },
];

export const experience = [
  {
    when: "2026 to now",
    role: "Founder and project lead",
    org: "ADEX_IN",
    text: "Lead a multidisciplinary student team building accessibility products, starting with ADEX_ISL. I coordinate architecture, product planning, documentation and delivery.",
  },
  {
    when: "Dec 2025 to Jan 2026",
    role: "Software development intern",
    org: "Codec Technologies",
    text: "Built application features with React, Node.js, Express and MongoDB in an Agile team, including REST APIs and authentication.",
  },
  {
    when: "2023 to now",
    role: "Founder",
    org: "Hell Out Café",
    text: "Run the café and use its workflows to develop and test my POS software.",
  },
  {
    when: "Nov 2022 to now",
    role: "Freelance full-stack developer",
    org: "",
    text: "Delivered web applications, dashboards and automation for clients, integrating authentication, payment gateways, REST APIs, databases and third-party services.",
  },
  {
    when: "Leadership",
    role: "Founder, Entrepreneurship Cell",
    org: "Siddhant College of Engineering",
    text: "Led a 70-member student team and organised innovation and entrepreneurship initiatives.",
  },
];

export const education =
  "B.E. Information Technology, Siddhant College of Engineering, Pune (Savitribai Phule Pune University). Expected 2028.";

export const skills = [
  ["AI and ML", "LLMs, multi-agent systems, agent orchestration, prompt engineering, OpenAI API, Ollama, local LLM deployment, automated evaluation"],
  ["Languages", "Python, JavaScript, SQL"],
  ["Backend", "Node.js, Express.js, REST APIs, MongoDB, MySQL, authentication"],
  ["Frontend", "React.js, Next.js, Tailwind CSS"],
  ["Tools", "Docker, Linux, Git"],
];
