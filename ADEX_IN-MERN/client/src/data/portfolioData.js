export const profileData = {
  name: "Aditya Pratap Singh",
  preferredName: "Aadi",
  eyebrow: "INDEPENDENT BUILDER · FOUNDER · ENGINEER",
  headline: "I build systems, explore ideas, and turn technology into things that work.",
  shortBio:
    "I'm Aditya Pratap Singh — a founder and hands-on technology builder working across software, machine learning, automation, and connected systems. I enjoy taking ideas from experimentation to working prototypes and exploring how technology can solve meaningful problems.",
  extendedBio: [
    "I'm interested in what happens when software, hardware, and intelligent systems come together.",
    "My work spans web development, machine learning, automation, and connected devices. Through independent projects and startup building, I'm exploring how ideas can move from an initial concept to a functional prototype.",
    "I value hands-on experimentation, understanding systems from the inside out, and learning by building. I am particularly interested in technology that makes systems more useful, accessible, efficient, and understandable.",
    "I'm still learning, experimenting, and expanding what I can build. I see that as an essential part of the process.",
  ],
  role: "Technology Builder, Founder & Software Engineer",
  company: {
    name: "ADEX-IN",
    role: "Founder & CEO",
    description:
      "An early-stage technology and innovation initiative exploring emerging technologies, digital creation, and accessibility-oriented tools such as ADEX_ISL.",
    note: "Early-stage initiative focused on technical experimentation, product direction, and prototyping.",
    url: "https://www.adex-in.com",
  },
  contact: {
    email: "adityaprataps406@gmail.com",
    phone: "+91 7355259901",
    location: "India",
    linkedin: "https://www.linkedin.com/in/adityapratap-singh-447159215/",
    github: "https://github.com/Adityapratap-Singh",
    // X (Twitter) profile coordinate:
    x: "https://x.com/adityapratps406",
  },
  pillars: [
    {
      number: "01",
      title: "BUILD",
      summary: "Develop software, prototypes, and practical technical solutions.",
      description:
        "Writing clean, maintainable code across the full stack and embedded environments, turning architectural diagrams into working software.",
    },
    {
      number: "02",
      title: "EXPLORE",
      summary: "Investigate machine learning, systems, infrastructure, and emerging technologies.",
      description:
        "Auditing datasets, testing computer vision models, studying distributed runtimes, and analyzing failure modes under realistic constraints.",
    },
    {
      number: "03",
      title: "SOLVE",
      summary: "Work on problems involving accessibility, automation, and better interactions.",
      description:
        "Focusing engineering effort where it matters most: assistive communication, energy-conscious hardware arbitration, and human-centric design.",
    },
  ],
  principles: [
    {
      number: "01",
      title: "Understand the System",
      summary: "Master dependencies, constraints, and edge behaviors before introducing complexity.",
      description:
        "Every resilient solution starts with observing real data flow and failure points. Before writing abstractions, understand hardware limits, network latency, and user reality.",
      projectExample:
        "In HOMIE, analyzing relay bouncing, sensor noise, and network disconnects led directly to implementing a 10-second fail-safe telemetry watchdog shutdown.",
    },
    {
      number: "02",
      title: "Build and Test",
      summary: "Turn concepts into working prototypes, validate assumptions, and learn from breakdowns.",
      description:
        "Theory matters, but software and hardware only prove themselves when run. I test policies with automated test suites, simulation benches, and real workloads.",
      projectExample:
        "In HOMIE, an automated policy test harness (test_homie_policy.py) verified that hazard overrides (gas detection and window openings) reliably cut electrical circuits across both Normal and Energy modes.",
    },
    {
      number: "03",
      title: "Make it Useful",
      summary: "Prioritize accessibility, safety, and practical utility over technology for its own sake.",
      description:
        "The best technology disappears into reliable assistance. Whether creating an assistive sign language interface or an IoT controller, human dignity and real utility come first.",
      projectExample:
        "In ADEX_ISL, the technical roadmap prioritizes on-device landmark inference to safeguard user privacy and eliminate cloud streaming dependencies.",
    },
  ],
  skills: [
    {
      category: "Software Engineering",
      description: "Full-stack web application development, APIs, and modern frontend architecture.",
      demonstrated: [
        "Python",
        "JavaScript (ES6+)",
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "REST APIs",
        "Git & GitHub",
      ],
      familiar: [
        "MongoDB / Mongoose",
        "HTML5 / Semantic Web",
        "Component Design Systems",
        "State Management",
      ],
      exploring: ["Go (Golang)", "GraphQL", "Microservices Architecture"],
    },
    {
      category: "Machine Learning & CV",
      description: "Computer vision, dataset auditing, landmark extraction, and model experimentation.",
      demonstrated: [
        "Dataset Auditing & Cleaning",
        "Video Frame Extraction",
        "MediaPipe Hand & Pose Tracking",
        "Computer Vision (OpenCV)",
        "Hugging Face CISLR Dataset",
        "Inference Workflows",
      ],
      familiar: [
        "PyTorch Fundamentals",
        "Model Quantization Concepts",
        "Temporal Feature Extraction",
        "Evaluation Metrics (Precision/Recall)",
      ],
      exploring: [
        "On-Device Edge ML Inference",
        "Sequence Models (Transformers/LSTMs for sign gestures)",
        "Multimodal Sensor Fusion",
      ],
    },
    {
      category: "Systems & Infrastructure",
      description: "Operating systems, command-line tools, containerization, and networking fundamentals.",
      demonstrated: [
        "Linux CLI & Bash Scripting",
        "Networking Fundamentals (TCP/IP, HTTP/S, DNS)",
        "Docker Desktop & Container Basics",
        "Process Management",
        "Environment & Secret Management",
      ],
      familiar: [
        "DevOps Fundamentals",
        "CI/CD Pipeline Design",
        "Cloud Computing (Vercel, AWS Concepts)",
        "Cybersecurity & Threat Awareness",
      ],
      exploring: [
        "Kubernetes & Orchestration",
        "Linux Kernel & Low-Level Systems",
        "Infrastructure as Code",
      ],
    },
    {
      category: "Embedded Systems & IoT",
      description: "Microcontrollers, sensor integration, hardware communication, and automated arbitration.",
      demonstrated: [
        "ESP32 Microcontrollers",
        "Arduino IDE & C++ Firmware",
        "MQTT Protocol (Paho, HiveMQ)",
        "Sensors (PIR Motion, DHT22, LDR, Gas)",
        "Relay Modules (Lights, Fans)",
        "Wokwi Virtual Hardware Simulation",
        "16x2 I2C LCD Display",
      ],
      familiar: [
        "Fail-safe Watchdog Timers",
        "Blynk IoT Integration",
        "Hardware Debugging & Signal Analysis",
        "Energy Management Modes",
      ],
      exploring: [
        "FreeRTOS Task Scheduling",
        "CAN Bus / RS-485 Industrial Protocols",
        "Custom PCB Design with KiCAD",
      ],
    },
  ],
  currentFocus: [
    {
      title: "ADEX_ISL Gesture Recognition",
      domain: "Computer Vision & Assistive Tech",
      status: "In Experimentation",
      description:
        "Refining video preprocessing and hand-landmark extraction pipelines using the CISLR dataset for accurate Indian Sign Language isolated gesture classification.",
      tag: "Accessibility",
    },
    {
      title: "Local-First IoT Failsafes (HOMIE)",
      domain: "Embedded Systems & Automation",
      status: "Hardware Prototyping",
      description:
        "Enhancing local arbitration rules for ESP32 and MQTT, ensuring zero-latency gas leak hazard cutoffs and telemetry timeout safety shutdowns.",
      tag: "IoT & Systems",
    },
    {
      title: "Multi-Agent Orchestration (ARMO)",
      domain: "Autonomous AI Architecture",
      status: "Research & Development",
      description:
        "Developing Directed Acyclic Graph (DAG) task scheduling with NetworkX and local LLMs (Ollama) to orchestrate resilient multi-agent software pipelines.",
      tag: "AI Systems",
    },
    {
      title: "Linux, Cloud & DevOps Deepening",
      domain: "Infrastructure & Systems",
      status: "Continuous Learning",
      description:
        "Studying containerization, network security, infrastructure automation, and reliable cloud deployment workflows.",
      tag: "DevOps",
    },
  ],
};

export const verifiedProjects = [
  {
    id: "adex-isl",
    title: "ADEX_ISL",
    eyebrow: "Accessibility Technology · Machine Learning · Computer Vision",
    tagline:
      "Exploring how machine learning and computer vision can bridge communication gaps through Indian Sign Language recognition.",
    organization: "ADEX-IN",
    status: "Prototype / In Development",
    tags: ["Machine Learning", "Computer Vision", "Python", "MediaPipe", "CISLR Dataset", "Accessibility"],
    role: "Lead Project Architect & Builder",
    timeline: "2024 — Present",
    overview:
      "ADEX_ISL is an accessibility-oriented research prototype exploring machine learning and computer vision techniques to recognize Indian Sign Language (ISL). Developed under the ADEX-IN initiative, the project investigates preprocessing video streams, extracting spatial hand landmarks, and building a lightweight inference pipeline intended for assistive communication.",
    problem:
      "Millions of deaf and hard-of-hearing individuals rely on Indian Sign Language as their primary medium of expression. However, severe communication barriers persist when interacting with non-signers in education, healthcare, and public services. Existing commercial translation tools predominantly cater to American Sign Language (ASL), leaving Indian Sign Language under-resourced. Additionally, cloud-based video translation raises critical privacy concerns and introduces network latency unsuitable for conversational interactions.",
    goals: [
      "Evaluate the feasibility of local, privacy-first sign recognition using consumer-grade webcams.",
      "Audit and preprocess video datasets from the CISLR collection to establish clean training and testing baselines.",
      "Implement robust spatial hand-landmark extraction using MediaPipe to isolate geometric features from raw pixels.",
      "Explore lightweight classification architectures that can execute inference efficiently without requiring expensive GPU servers.",
    ],
    approach:
      "Rather than feeding heavy, noisy raw video frames directly into complex 3D convolutional networks, the project adopts a modular feature-extraction strategy. Raw video samples are audited for resolution, framerate consistency, and motion blur. Hand and body landmarks are extracted into normalized spatial coordinate vectors. This dramatically reduces model parameter count, eliminates sensitive background imagery, and enables on-device inference.",
    pipeline: [
      { step: "01", label: "Dataset Curation", detail: "Audited video samples from Hugging Face Exploration-Lab/CISLR corpus." },
      { step: "02", label: "Preprocessing", detail: "Uniform frame sampling, aspect ratio preservation, and temporal normalization via OpenCV." },
      { step: "03", label: "Landmark Extraction", detail: "21 3D hand coordinates extracted per hand via MediaPipe, anchored relative to wrist root." },
      { step: "04", label: "Temporal Sequencing", detail: "Sequencing coordinate deltas across video duration into structured temporal tensors." },
      { step: "05", label: "Inference Engine", detail: "Classification across isolated sign classes, outputting confidence scores." },
      { step: "06", label: "Accessible UI", detail: "Clean visual feedback displaying recognized signs and confidence metrics." },
    ],
    challenges: [
      "High intra-class variation: Signers exhibit differing hand anatomies, signing speeds, and natural micro-gestures.",
      "Spatial occlusion: Hands frequently overlap, cross, or temporarily turn away from the camera, causing lost landmark tracking.",
      "Continuous signing: Transitioning from isolated signs to full sentence translation involves complex non-manual grammar.",
    ],
    limitations: [
      "Currently restricted to isolated sign classifications; does not yet support continuous conversational sentence translation.",
      "Requires adequate front-facing lighting and unoccluded line-of-sight for reliable MediaPipe hand landmark tracking.",
      "Currently an active research prototype, not a certified clinical or commercial assistive device.",
    ],
    githubUrl: "https://github.com/Adityapratap-Singh",
    metrics: [
      { label: "Corpus Source", value: "CISLR" },
      { label: "Hand Landmarks", value: "21 Pts/Hand" },
      { label: "Architecture", value: "Local Edge" },
      { label: "Stage", value: "Prototype" },
    ],
  },
  {
    id: "homie",
    title: "HOMIE",
    eyebrow: "Embedded Systems · IoT · Home Automation",
    tagline:
      "A local-first smart-home automation system exploring intelligent coordination, policy arbitration, and hard safety overrides.",
    status: "Working Hardware & Simulated Prototype",
    tags: ["ESP32", "Python", "MQTT", "Embedded C++", "Wokwi Simulation", "IoT", "Safety Systems"],
    role: "System Designer & Hardware/Software Engineer",
    timeline: "2024",
    overview:
      "HOMIE is a local-first smart home automation system designed to coordinate comfort, energy efficiency, and life safety across physical microcontrollers, sensors, and actuators. Built on an ESP32 microcontroller with a Python-based policy arbitration engine communicating via MQTT, HOMIE prioritizes offline reliability, strict safety overrides, and deterministic decision logging.",
    problem:
      "Most commercial smart home gadgets depend on continuous cloud server connectivity (failing when internet drops) and lack deterministic safety overrides. If a flammable gas leak occurs, ordinary automation rules might cycle an electrical relay on, creating an electric spark hazard. Smart homes need local autonomy, fail-safe watchdogs, and uncompromising safety arbitration.",
    goals: [
      "Build a local-first IoT system using ESP32 capable of autonomous telemetry and actuator control.",
      "Establish low-latency, decoupled message exchange between microcontroller firmware and control software via MQTT.",
      "Implement a policy arbitration engine that separates normal comfort rules, energy-saving mode, and high-priority hazard safety.",
      "Incorporate hard-latching safety overrides (gas hazard detection and window-open fan cutoffs) with comprehensive policy test suites.",
      "Create a dual-mode testing environment with Wokwi virtual simulation and physical breadboard hardware.",
    ],
    approach:
      "HOMIE treats safety as a first-class citizen in the state machine. The system is split into an ESP32 sensor/actuator node and a Python policy controller. Sensors (PIR occupancy, DHT22 temperature/humidity, LDR ambient light, MQ gas, window contacts) broadcast periodic telemetry over MQTT. The controller arbitrates outputs through a strict priority ladder: Safety Hazard > Energy Policies > Comfort Automation. All decisions are written to an append-only JSONL log.",
    pipeline: [
      { step: "01", label: "Hardware Telemetry", detail: "ESP32 samples PIR, DHT22, LDR, MQ gas, and window contacts every 1000ms." },
      { step: "02", label: "MQTT Transport", detail: "Publishes lightweight JSON telemetry to MQTT broker (HiveMQ / Paho)." },
      { step: "03", label: "Watchdog Check", detail: "10.0s telemetry timeout failsafe automatically de-energizes all circuits on data stall." },
      { step: "04", label: "Policy Engine", detail: "Python arbitrator evaluates Normal vs Energy modes with hysteresis thresholds." },
      { step: "05", label: "Safety Latch", detail: "Gas hazard detection latches all relays OFF immediately until manual reset." },
      { step: "06", label: "Actuation & LCD", detail: "Drives dual-channel relays for lights and fans and updates 16x2 I2C LCD." },
    ],
    challenges: [
      "MQ gas sensor warm-up stabilization: Sensor requires initial heater stabilization to prevent false alarms.",
      "Relay inductive back-EMF: Switching heavy inductive loads requires optocoupled isolation.",
      "State synchronization: Re-syncing state across temporary network interruptions.",
    ],
    limitations: [
      "Currently uses local/public broker setup; production installation requires encrypted TLS (MQTTS) and local broker clustering.",
      "Sensor thresholds calibrated for lab and simulation environments.",
    ],
    githubUrl: "https://github.com/Adityapratap-Singh",
    metrics: [
      { label: "Heartbeat Timeout", value: "10.0s" },
      { label: "Sensor Channels", value: "5 Inputs" },
      { label: "Safety Priority", value: "Level 1" },
      { label: "Target Micro", value: "ESP32" },
    ],
  },
  {
    id: "video-library",
    title: "Personal Video Library",
    eyebrow: "Full-Stack Development · Web Applications",
    tagline:
      "A web application concept engineered to scan, organize, and navigate a local collection of ~58 GB of technical video lectures.",
    status: "Functional Local Prototype",
    tags: ["Next.js", "React", "TypeScript", "Node.js APIs", "Tailwind CSS", "File System APIs"],
    role: "Full-Stack Engineer",
    timeline: "2024",
    overview:
      "A developer-focused full-stack web application built to index, organize, and stream an extensive ~58 GB local archive of educational engineering videos (encompassing Web Application Development, React, Tailwind, Terminal, Git, and Backend architectures). Using Next.js API routes and file system scanning, it provides structured curriculum progression, instant unit search, and responsive media playback.",
    problem:
      "Local folders containing dozens of gigabytes of structured educational videos are cumbersome to navigate using standard operating system file explorers. Learners lose track of progress, have no quick overview of unit prerequisites or module hierarchy, and lack integrated note-taking or code-snippet surfaces while watching lectures.",
    goals: [
      "Develop a Next.js application capable of recursively traversing local video directory structures.",
      "Expose clean, typed REST API endpoints providing unit hierarchies, module durations, and lecture filenames.",
      "Build a focused, distraction-free video playback interface with keyboard navigation and progress indicators.",
    ],
    approach:
      "The application leverages Next.js server-side API routes to asynchronously inspect local storage volumes. It parses structured naming conventions (e.g. 1_Curriculum, 4_HTML, 7_JS, 11_React, 13_Redux), generates an in-memory JSON navigation schema, and serves it to a reactive React frontend.",
    pipeline: [
      { step: "01", label: "Volume Scanner", detail: "Scans curriculum root directory via Node.js fs.promises, identifying video files." },
      { step: "02", label: "Schema Parser", detail: "Extracts module index, lesson numbers, and titles from folder nomenclatures." },
      { step: "03", label: "API Layer", detail: "Serves cached curriculum tree with HTTP 206 Partial Content range requests." },
      { step: "04", label: "Client Player", detail: "Renders hierarchical navigation, keyboard shortcuts, and localStorage progress." },
    ],
    challenges: [
      "Handling heterogeneous video codecs and containers without heavy transcoding pipelines.",
      "Managing large directory metadata caching efficiently so scans only run on startup or on demand.",
    ],
    limitations: [
      "Designed specifically for local directory scanning; does not include cloud multi-tenant storage or public streaming DRM.",
    ],
    githubUrl: "https://github.com/Adityapratap-Singh",
    metrics: [
      { label: "Archive Size", value: "~58 GB" },
      { label: "Core Modules", value: "13 Units" },
      { label: "Streaming", value: "HTTP 206" },
      { label: "Stack", value: "Next.js" },
    ],
  },
  {
    id: "armo",
    title: "ARMO — Adaptive Runtime Meta-Orchestrator",
    eyebrow: "Multi-Agent AI Systems · Systems Engineering",
    tagline:
      "An adaptive runtime meta-orchestrator for autonomous multi-agent AI systems, managing execution graphs and dynamic role allocation.",
    status: "Research & Development Framework",
    tags: ["Python", "Multi-Agent Systems", "NetworkX", "Ollama", "Pydantic", "DAG Scheduling", "AI Systems"],
    role: "Author & Lead Researcher",
    timeline: "2025 — 2026",
    overview:
      "ARMO (Adaptive Runtime Meta-Orchestrator) is an advanced research framework authored by Aditya Pratap Singh exploring resilient orchestration for autonomous multi-agent AI systems. Utilizing Directed Acyclic Graph (DAG) task representations via NetworkX, structured Pydantic schemas, and local LLM execution via Ollama, ARMO addresses execution fragility and coordination overhead in autonomous AI pipelines.",
    problem:
      "Conventional multi-agent frameworks often rely on brittle linear prompt chains or hardcoded handoffs. When an individual agent hallucinates, fails a tool invocation, or encounters contradictory requirements, entire pipelines fail or descend into expensive recursive loops. Large-scale autonomous work requires a higher-order runtime orchestrator that dynamically inspects task progress, handles failure recovery, and enforces strict execution boundaries.",
    goals: [
      "Formulate multi-step technical workflows as dynamic Directed Acyclic Graphs with explicit dependency tracking.",
      "Build a runtime meta-orchestrator that allocates specialized agent roles (Planner, Architect, Dev, QA, Deploy).",
      "Support local LLM execution via Ollama (DeepSeek / Llama models) for privacy, predictability, and low cost.",
    ],
    approach:
      "ARMO decouples task planning from agent execution. A Meta-Orchestrator takes an initial objective, breaks it down into a dependency graph using NetworkX, and monitors execution state across worker agents. Each task node contains rigorous validation criteria. If a QA node detects a test failure, ARMO dynamically re-injects corrective subtasks into the active DAG rather than aborting the pipeline.",
    pipeline: [
      { step: "01", label: "Objective Ingestion", detail: "Parses requirements into structured Pydantic configuration schemas." },
      { step: "02", label: "DAG Construction", detail: "Generates topological task hierarchy with parallel execution branches." },
      { step: "03", label: "Agent Dispatch", detail: "Routes subtasks to domain agents (Planner, Architect, Dev, QA) via Ollama." },
      { step: "04", label: "Runtime Monitor", detail: "Inspects intermediate artifacts and tool outputs against schema contracts." },
      { step: "05", label: "Course Correction", detail: "On failed assertions, dynamically modifies graph edges to recover." },
    ],
    challenges: [
      "Preventing cascading hallucinations across multi-agent handoffs.",
      "Balancing graph replanning depth to prevent infinite reflection loops during ambiguous errors.",
    ],
    limitations: [
      "Currently a research framework and command-line system; web monitoring visualizer remains in development.",
    ],
    githubUrl: "https://github.com/Adityapratap-Singh",
    metrics: [
      { label: "Core Graph", value: "NetworkX" },
      { label: "Schema Engine", value: "Pydantic" },
      { label: "Local Runtime", value: "Ollama" },
      { label: "Status", value: "Research" },
    ],
  },
  {
    id: "adex-in-platform",
    title: "ADEX-IN Platform",
    eyebrow: "Web Engineering · Accessible Design System",
    tagline:
      "The digital platform and design system for the ADEX-IN initiative, built with accessibility-first principles and semantic architecture.",
    organization: "ADEX-IN",
    status: "Active Prototype / MERN Migration",
    tags: ["React", "Express", "MongoDB", "Node.js", "Accessibility", "Tailwind CSS", "Semantic HTML"],
    role: "Founder & Lead Architect",
    timeline: "2024 — Present",
    overview:
      "The official platform representing ADEX-IN, an emerging innovation initiative exploring human-centered accessible technologies. Re-engineered from static layouts into a modern MERN stack architecture, the site demonstrates clean typography, a warm brand-driven palette, accessible ARIA roles, and structured data schemas.",
    problem:
      "Technology startup websites frequently fall into template traps: low-contrast typography, heavy unoptimized assets, non-semantic markup, and vague marketing clichés. ADEX-IN needed a digital identity that reflects engineering discipline, clear product focus, and genuine commitment to accessibility.",
    goals: [
      "Establish a coherent, premium visual identity for ADEX-IN without relying on generic templates.",
      "Migrate legacy static assets into a modular React component architecture backed by Express and MongoDB.",
      "Achieve high accessibility standards, including keyboard focus states, WCAG contrast ratios, and screen-reader semantics.",
    ],
    approach:
      "Created a unified design token system built on a warm, brand-driven light palette. Built reusable React components for product showcases, founder overviews, and interactive modals, backed by an Express REST API providing data fallbacks.",
    pipeline: [
      { step: "01", label: "Design Tokens", detail: "WCAG-compliant light palette, refined metadata labels, and fluid typography." },
      { step: "02", label: "Component Layer", detail: "Accessible navigation, modal dialogs with focus trapping, and semantic sectioning." },
      { step: "03", label: "API & Data", detail: "REST endpoints for team and product data with built-in in-memory fallback datasets." },
    ],
    challenges: [
      "Migrating legacy CSS styles cleanly into componentized scopes without unintended visual regressions.",
    ],
    limitations: [
      "Currently operates as an early-stage initiative platform; user accounts are planned for future phases.",
    ],
    githubUrl: "https://github.com/Adityapratap-Singh",
    metrics: [
      { label: "Frontend", value: "React + Vite" },
      { label: "Backend", value: "Express API" },
      { label: "Accessibility", value: "WCAG AAA" },
    ],
  },
];

export const systemArchitectures = [
  {
    id: "homie",
    name: "HOMIE — IoT Safety & Telemetry Loop",
    tagline: "Local-first sensor coordination, watchdog timers, and gas-leak latch overrides.",
    nodes: [
      { step: "01", title: "Sensors & Environmental Inputs", tech: "PIR · DHT22 · LDR · MQ Gas · Window", detail: "Samples occupancy, temperature, humidity, ambient brightness, and gas ppm every 1000ms." },
      { step: "02", title: "Microcontroller Firmware", tech: "ESP32 (C++ / Arduino IDE)", detail: "Packages sensor telemetry into structured JSON payloads with hardware timestamping." },
      { step: "03", title: "Decoupled Telemetry Transport", tech: "MQTT Protocol (HiveMQ / Paho)", detail: "Publishes to telemetry topic; listens on command topic with QoS 1 delivery." },
      { step: "04", title: "Telemetry Watchdog Failsafe", tech: "Python Timeout Monitor (10.0s)", detail: "If telemetry stalls for >10s, activates immediate fail-safe shutdown of all active circuits." },
      { step: "05", title: "Policy Arbitration Engine", tech: "Python Controller (Arbitrator)", detail: "Evaluates Normal vs Energy mode with hysteresis. Gas hazard overrides all outputs instantly." },
      { step: "06", title: "Actuation & Interface", tech: "Relays (Light/Fan) · 16x2 I2C LCD", detail: "Switches physical appliances via active-low relays while rendering live telemetry to LCD display." },
    ],
    codeSnippet: `// Python controller watchdog and arbitration snippet
if (time.time() - last_telemetry) > TELEMETRY_TIMEOUT:
    stale_shutdown_active = True
    publish_outputs(client, all_off(), reason="Watchdog timeout: sensor stall")

# Gas hazard override latches until manual clearance
if gas_hazard or gas_latched:
    gas_latched = True
    publish_outputs(client, all_off(), reason="SAFETY OVERRIDE: Gas hazard detected")`,
  },
  {
    id: "adex-isl",
    name: "ADEX_ISL — Gesture Recognition Pipeline",
    tagline: "From raw video frames to 3D coordinate landmark normalizations and client inference.",
    nodes: [
      { step: "01", title: "Video Stream Ingestion", tech: "Webcam / CISLR Video Clips", detail: "Ingests Indian Sign Language gestures across audited prototype and test dataset splits." },
      { step: "02", title: "Frame Preprocessing", tech: "OpenCV (Python)", detail: "Standardizes frame aspect ratios, removes motion artifacts, and performs temporal sampling." },
      { step: "03", title: "Spatial Landmark Tracking", tech: "MediaPipe Hands & Pose", detail: "Extracts 21 3D hand coordinates per hand, isolating spatial topology from raw background pixels." },
      { step: "04", title: "Anchor Normalization", tech: "Wrist-relative Vectors", detail: "Translates and scales points relative to wrist coordinate root, making gestures distance-invariant." },
      { step: "05", title: "Sequence Inference", tech: "Lightweight Neural Classifier", detail: "Classifies isolated sign gestures, calculating confidence distributions for vocabulary terms." },
      { step: "06", title: "Accessible Feedback UI", tech: "React / Web Surface", detail: "Renders real-time text feedback, candidate suggestions, and visual gesture confirmation." },
    ],
    codeSnippet: `# Landmark normalization and relative bounding
landmarks = results.multi_hand_landmarks[0]
wrist = landmarks.landmark[0] # Root anchor
normalized_coords = []
for lm in landmarks.landmark:
    normalized_coords.extend([lm.x - wrist.x, lm.y - wrist.y, lm.z - wrist.z])
# Yields 63 coordinate values invariant to user distance`,
  },
  {
    id: "armo",
    name: "ARMO — Multi-Agent DAG Meta-Orchestrator",
    tagline: "Dynamic execution graphs, Pydantic schemas, and local LLM runtime scheduling.",
    nodes: [
      { step: "01", title: "Objective Specification", tech: "Pydantic Schemas / CLI Input", detail: "Ingests user specifications, constraints, tool requirements, and target deliverables." },
      { step: "02", title: "DAG Graph Decomposition", tech: "NetworkX Directed Acyclic Graph", detail: "Transforms complex objectives into topological task nodes with explicit dependency edges." },
      { step: "03", title: "Specialized Role Dispatch", tech: "Ollama (DeepSeek / Llama)", detail: "Dispatches discrete subtasks to Planner, Architect, Backend, Frontend, and QA worker agents." },
      { step: "04", title: "Validation Barriers", tech: "Deterministic Unit Tests & Linters", detail: "Evaluates agent outputs against strict schema contracts before propagating downstream." },
      { step: "05", title: "Adaptive Replanning", tech: "Meta-Orchestrator Feedback Loop", detail: "On failed assertions or errors, dynamically adjusts graph edges and injects corrective tasks." },
      { step: "06", title: "Synthesized Deliverable", tech: "Verified Artifact Output", detail: "Assembles completed codebase, verified documentation, and execution telemetry metrics." },
    ],
    codeSnippet: `# ARMO DAG topological execution loop
dag = networkx.DiGraph()
ready_nodes = [node for node in dag.nodes if dag.in_degree(node) == 0]
for node in ready_nodes:
    result = await dispatch_agent(node.role, node.prompt)
    if not node.validator(result):
        dag.add_edge(node, inject_corrective_node(result.error))`,
  },
];

export const galleryArtifacts = [
  { id: "homie-pins", title: "HOMIE ESP32 Firmware Pinout", category: "Hardware Prototype", snippet: "ESP32 // PIR:27 // DHT22:4 // LDR:34 // GAS:32 // RELAYS:22,23 // LCD:I2C" },
  { id: "adex-logo", title: "ADEX-IN Innovation Identity", category: "Initiative Brand", image: "/images/adex-logo-white.png" },
  { id: "isl-tracking", title: "ADEX_ISL 21-pt Coordinate Extraction", category: "Computer Vision", snippet: "MediaPipe Hands // Landmark 0 (Wrist Anchor) // 21 3D Spatial Deltas" },
  { id: "homie-watchdog", title: "HOMIE MQTT Watchdog Loop", category: "IoT Telemetry", snippet: "TOPIC: homie-aadi-demo/sensors // TIMEOUT: 10.0s // STATE: NORMAL" },
  { id: "aditya-portrait", title: "Aditya Pratap Singh (Founder)", category: "Profile Archive", image: "/images/adityasingh.jpeg" },
  { id: "armo-graph", title: "ARMO DAG Dependency Scheduler", category: "Multi-Agent System", snippet: "NetworkX DiGraph // 5 Agent Nodes // Ollama Runtime // Cycle-Free DAG" },
  { id: "wad-archive", title: "Video Library Range Requests", category: "Full-Stack Web", snippet: "Next.js fs Scanner // 58 GB Archive // HTTP 206 Partial Content" },
  { id: "white-logo", title: "ADEX-IN Accessible Design", category: "Design System", image: "/images/white-logo.png" },
];
