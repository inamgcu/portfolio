import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  FileJson,
  GitBranch,
  Github,
  Lightbulb,
  KanbanSquare,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MonitorCog,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  UsersRound
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Hafiz Muhammad Inam Ul Haq",
  role: "Solution Architect | .NET Technology Consultant",
  location: "Lahore, Pakistan",
  phone: "+92-322-8002441",
  email: "inamgcu@gmail.com",
  linkedin: "https://www.linkedin.com/in/hafiz-inam-ul-haq-605b611a/",
  summary:
    "Solution Architect and .NET Technology Consultant with 12+ years designing enterprise .NET, Azure, SQL Server, integration, and data transformation platforms."
};

const competencies = [
  { icon: Layers3, label: "Solution Design" },
  { icon: Target, label: "Decision Trade-offs" },
  { icon: UsersRound, label: "Client Communication" },
  { icon: Network, label: "API & Integration Design" },
  { icon: Code2, label: ".NET / ASP.NET Core" },
  { icon: Cloud, label: "Azure Cloud Solutions" },
  { icon: Database, label: "SQL Server Performance" },
  { icon: ShieldCheck, label: "Delivery Governance" }
];

const skillGroups = [
  {
    title: "Architecture & Design",
    items: ["Solution Design", "Requirements Mapping", "API Decomposition", "Integration Design", "Design Reviews", "Technical Roadmaps", "Architecture Decisions", "Stakeholder Communication"]
  },
  {
    title: ".NET Engineering",
    items: [".NET 8", ".NET Core", "ASP.NET Core", "Web API", "Entity Framework Core", "C#", "REST", "Integration Architecture"]
  },
  {
    title: "Azure & Delivery",
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "API Management", "Docker", "Orchestration Fundamentals", "Azure DevOps"]
  },
  {
    title: "Data & Storage",
    items: ["SQL Server", "T-SQL", "Query Optimization", "Database Design", "Data Integration", "Data Transformation", "NoSQL Concepts", "Power BI"]
  }
];

const experience = [
  {
    company: "tkxel",
    logo: "./logos/tkxel.svg",
    logoClass: "logo-tkxel",
    period: "December 2025 - Present",
    role: "Technology Consultant - .NET",
    impact: "Shaping architecture direction for secure, scalable enterprise platforms with a .NET and Azure lens.",
    stack: ["Solution Design", ".NET Core", "ASP.NET Core", "Azure", "Azure Service Bus", "Azure DevOps", "SQL Server", "CI/CD"],
    points: [
      "Define solution direction for enterprise .NET and Azure systems, aligning business goals with integration needs, security constraints, and long-term maintainability.",
      "Document architecture decisions, review downstream design choices, and guide API boundaries, SQL access patterns, CI/CD setup, and Azure deployment planning.",
      "Keep performance, security, supportability, and delivery risk visible through trade-off discussions with engineering and client stakeholders."
    ]
  },
  {
    company: "Ebryx",
    logo: "./logos/ebryx.png",
    logoClass: "logo-ebryx",
    period: "August 2023 - November 2025",
    role: "Principal Software Engineer",
    impact: "Owned architecture patterns, technical standards, and client-facing delivery decisions for enterprise .NET 8 applications.",
    stack: [".NET 8", "Clean Architecture", "DDD", "Web API", "Client Communication"],
    points: [
      "Led solution design for enterprise-grade .NET 8 applications, establishing architecture patterns, technical standards, and delivery guardrails.",
      "Partnered with client stakeholders to clarify business goals, decompose requirements, evaluate trade-offs, and translate product needs into technical roadmaps.",
      "Acted as the primary client-facing technical owner, sustaining 100% client satisfaction through clear communication, design validation, and reliable delivery."
    ]
  },
  {
    company: "Confiz Limited",
    logo: "./logos/confiz.png",
    logoClass: "logo-confiz",
    period: "March 2014 - July 2023",
    role: "Associate Software Architect",
    impact: "Progressed from hands-on .NET engineering into architecture ownership across web, API, mobile, cloud, SQL, and data integration systems.",
    stack: ["ASP.NET Core", "Web API", "SQL Server", "Azure", "Data Transformation", "Xamarin"],
    points: [
      "Architected cloud-native data and integration solutions using Azure Data Lake, Azure Data Factory, REST APIs, Web Jobs, SSIS, SQL Server, and Power BI.",
      "Modernized legacy reporting and integration workflows through API decomposition, SQL optimization, and Azure-based transformation pipelines, improving performance by 75%.",
      "Led Agile delivery across web, API, mobile, cloud, and data programs while mentoring junior and mid-level engineers.",
      "Built Xamarin, UWP, and MVVMCross mobile applications with shared codebases and production support ownership."
    ]
  },
  {
    company: "Karzansoft",
    logo: "./logos/karzansoft.png",
    logoClass: "logo-karzan",
    period: "August 2013 - March 2014",
    role: "Software Engineer",
    impact: "Delivered product improvements and support fixes for business-critical leasing workflows.",
    stack: [".NET", "Web Apps", "Windows Apps", "Production Support"],
    points: ["Enhanced .NET web and Windows desktop modules for a car leasing platform, improving reliability across operational workflows."]
  },
  {
    company: "Code5 Technologies",
    logo: "./logos/code5.png",
    logoClass: "logo-code5",
    period: "November 2012 - May 2013",
    role: "Software Engineer",
    impact: "Built an interactive Windows kiosk product with hardware integration and social publishing.",
    stack: ["Windows Kiosk", "DSLR Integration", "Image Filters", "Facebook API"],
    points: ["Developed a Windows photo booth application with DSLR capture, real-time image filters, and automated Facebook upload workflows."]
  }
];

const outcomes = [
  { value: "3+", label: "Architecture leadership roles", detail: "Consultant, principal, and architect tracks" },
  { value: "75%", label: "Performance gain", detail: "Legacy workflow modernization" },
  { value: "60%+", label: "Cycle-time reduction", detail: "Enterprise automation and reporting impact" },
];

const certifications = [
  {
    code: "PL-100",
    title: "Microsoft Power Platform App Maker"
  },
  {
    code: "DP-203",
    title: "Azure Data Engineer Associate"
  }
];

const recognitions = [
  {
    icon: Award,
    title: "Value Champion",
    body: "Recognized for ownership, delivery impact, and consistently raising the bar for engineering quality."
  },
  {
    icon: Sparkles,
    title: "Employee of the Quarter",
    body: "Awarded for strong execution, dependable collaboration, and visible contribution to team outcomes."
  }
];

const signatureStack = ["Solution Design", ".NET 8", "Azure", "API Integration", "SQL Server", "Data Transformation"];

const heroSignals = [
  {
    icon: Layers3,
    label: "Solution Design",
    detail: "Business goals into clear design decisions"
  },
  {
    icon: Code2,
    label: ".NET Modernization",
    detail: "ASP.NET Core, Web API, Entity Framework"
  },
  {
    icon: Workflow,
    label: "Azure Delivery",
    detail: "Service Bus, DevOps, Functions, API Management"
  },
  {
    icon: Database,
    label: "Data & SQL",
    detail: "SQL tuning, data integration, transformation"
  }
];

const serviceLines = [
  {
    icon: Layers3,
    title: "Practical Solution Design",
    body: "Business goals translated into APIs, integrations, data flows, delivery constraints, and clear design decisions."
  },
  {
    icon: Code2,
    title: ".NET & Azure Modernization",
    body: "ASP.NET Core, Web API, Azure Service Bus, Azure DevOps, SQL Server, and clean boundaries."
  },
  {
    icon: Database,
    title: "Data & Integration Strategy",
    body: "Data integration, transformation, SQL performance, API decomposition, and reporting modernization."
  }
];

const workingStyle = [
  {
    icon: Target,
    title: "Business-first architecture",
    body: "I map architecture decisions back to business goals, quality attributes, constraints, delivery risk, and operational ownership."
  },
  {
    icon: Lightbulb,
    title: "Clarity before complexity",
    body: "I prefer clean boundaries, observable flows, and practical design patterns that make teams faster instead of just making diagrams prettier."
  },
  {
    icon: ShieldCheck,
    title: "Production-minded delivery",
    body: "Design validation, testing expectations, CI/CD, performance, security, and supportability are treated as part of the architecture."
  }
];

const toolGroups = [
  {
    title: "Tools & Platforms",
    icon: Workflow,
    items: ["JIRA", "Confluence", "Git", "GitHub", "Azure DevOps", "SharePoint", "Visual Studio", "Visual Studio Code", "Postman", "Cursor", "Codex"]
  },
  {
    title: "Project Delivery",
    icon: KanbanSquare,
    items: ["Agile", "Scrum", "Kanban", "Sprint Planning", "Backlog Grooming", "Risk Management", "Cross-functional Leadership"]
  },
  {
    title: "Cloud Tooling",
    icon: Cloud,
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "Blob Storage", "Data Lake", "Data Factory", "API Management", "Docker"]
  }
];

const toolHighlights = [
  { icon: MonitorCog, label: "Visual Studio" },
  { icon: FileJson, label: "VS Code" },
  { icon: Github, label: "GitHub" },
  { icon: GitBranch, label: "Git" },
  { icon: Workflow, label: "Azure DevOps" },
  { icon: KanbanSquare, label: "JIRA" },
  { icon: Layers3, label: "Confluence" },
  { icon: Send, label: "Postman" },
  { icon: Sparkles, label: "Cursor" },
  { icon: Bot, label: "Codex" },
  { icon: Cloud, label: "SharePoint" }
];

const stackIcons = {
  ".NET": Code2,
  ".NET 8": Code2,
  ".NET Core": Code2,
  "ASP.NET Core": Code2,
  "Web API": Network,
  "Azure": Cloud,
  "Azure Service Bus": Workflow,
  "Azure DevOps": Workflow,
  "SQL Server": Database,
  "CI/CD": Workflow,
  "Solution Design": Layers3,
  "Client Communication": UsersRound,
  "Data Transformation": Database,
  "Clean Architecture": Layers3,
  DDD: Layers3,
  "Client Leadership": UsersRound,
  "Team Standards": ShieldCheck,
  Xamarin: Phone,
  "Web Apps": Network,
  "Windows Apps": MonitorCog,
  "Production Support": ShieldCheck,
  "Windows Kiosk": MonitorCog,
  "DSLR Integration": Sparkles,
  "Image Filters": Sparkles,
  "Facebook API": Network
};

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero__content">
          <nav className="topbar" aria-label="Primary navigation">
            <a href="#home" className="brand">Inam Ul Haq</a>
            <div className="navlinks">
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero__grid">
            <div className="hero__copy">
              <span className="eyebrow">Solution architecture - .NET - Azure transformation</span>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="summary">{profile.summary}</p>
              <div className="stack-strip" aria-label="Signature technology stack">
                {signatureStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="hero__actions">
                <a className="button button--primary" href={`mailto:${profile.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  Contact
                </a>
                <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
            <aside className="experience-canvas" aria-label="Experience highlight">
              <span className="canvas-kicker">Commercial experience</span>
              <strong>10+ years</strong>
              <p>.NET, Azure, SQL, integrations, and enterprise delivery across web, mobile, and data platforms.</p>
              <div className="canvas-stack" aria-label="Experience areas">
                <span>.NET</span>
                <span>Azure</span>
                <span>SQL Server</span>
                <span>Integration</span>
              </div>
            </aside>
            <div className="hero-board" aria-label="Delivery focus">
              <div className="signal-grid">
                {heroSignals.map(({ icon: Icon, label, detail }) => (
                  <article className="signal-card" key={label}>
                    <Icon size={19} aria-hidden="true" />
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="Career outcomes">
        {outcomes.map((item) => (
          <article className="metric" key={item.label}>
            <TrendingUp size={20} aria-hidden="true" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.detail}</small>
          </article>
        ))}
      </section>

      <section className="section services" aria-label="Consulting strengths">
        {serviceLines.map(({ icon: Icon, title, body }) => (
          <article className="service" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="section style-section">
        <div className="section__intro">
          <span className="section-kicker">Working Style</span>
          <h2>Senior engineering judgment with a consulting mindset.</h2>
        </div>
        <div className="style-grid">
          {workingStyle.map(({ icon: Icon, title, body }) => (
            <article className="style-card" key={title}>
              <Icon size={23} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tools-section" id="tools">
        <div className="section__intro">
          <span className="section-kicker">Tools & Platforms</span>
          <h2>Everyday delivery toolkit across code, cloud, collaboration, and AI-assisted engineering.</h2>
        </div>
        <div className="tool-highlight-grid" aria-label="Tools and platforms">
          {toolHighlights.map(({ icon: Icon, label }) => (
            <article className="tool-highlight" key={label}>
              <Icon size={21} aria-hidden="true" />
              <span>{label}</span>
            </article>
          ))}
        </div>
        <div className="tools-grid">
          {toolGroups.map(({ icon: Icon, ...group }) => (
            <article className="tool-card" key={group.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="section__intro">
          <span className="section-kicker">Core Competencies</span>
          <h2>Architecture leadership with hands-on engineering depth.</h2>
        </div>
        <div className="competency-grid">
          {competencies.map(({ icon: Icon, label }) => (
            <article className="competency" key={label}>
              <Icon size={22} aria-hidden="true" />
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="experience-panel">
          <div className="section__intro sticky">
            <span className="section-kicker">Experience</span>
            <h2>From hands-on engineering to solution architecture ownership.</h2>
            <p>
              A track record across stakeholder alignment, architecture decisions, .NET modernization,
              Azure-backed platforms, API decomposition, SQL performance, and data transformation.
            </p>
          </div>
          <div className="experience-stats" aria-label="Experience highlights">
            <span><strong>5</strong> companies</span>
            <span><strong>12+</strong> years</span>
            <span><strong>3</strong> senior leadership roles</span>
          </div>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className="job" key={`${job.company}-${job.role}`}>
              <div className="job__marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <div className="job__header">
                <div className="job__identity">
                  <div className={`company-logo ${job.logoClass}`} aria-hidden="true">
                    <img src={job.logo} alt="" loading="lazy" />
                  </div>
                  <div>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                </div>
                <span>{job.period}</span>
              </div>
              <p className="job__impact">{job.impact}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="job__stack">
                {job.stack.map((item) => {
                  const Icon = stackIcons[item] ?? Code2;
                  return (
                    <span key={item}>
                      <Icon size={15} aria-hidden="true" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-band" id="skills">
        <div className="section__intro">
          <span className="section-kicker">Technical Skills</span>
          <h2>Solution architecture grounded in .NET, Azure, SQL, APIs, and delivery governance.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof">
        <article>
          <Award size={24} aria-hidden="true" />
          <h2>Recognition & Certifications</h2>
          <p>
            Highlighted for delivery excellence, engineering ownership, and Microsoft-stack certification depth.
          </p>
          <div className="recognition-grid">
            {recognitions.map(({ icon: Icon, title, body }) => (
              <div className="recognition-card" key={title}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="certs">
            {certifications.map((cert) => (
              <div className="cert-card" key={cert.code}>
                <BadgeCheck size={20} aria-hidden="true" />
                <div>
                  <strong>{cert.code}</strong>
                  <span>{cert.title}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
        <article>
          <BriefcaseBusiness size={24} aria-hidden="true" />
          <h2>Education</h2>
          <p>Bachelor of Science in Computer Science from Government College University, Lahore.</p>
          <span className="education-period">2009 - 2013</span>
        </article>
      </section>

      <section className="contact" id="contact">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Let's build dependable enterprise software.</h2>
          <p>
            Available for solution architecture, .NET modernization, Azure platform design,
            integration strategy, delivery governance, and engineering team enablement.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll("-", "")}`}><Phone size={18} />{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={16} /></a>
          <span><MapPin size={18} />{profile.location}</span>
          <span><Github size={18} />GitHub: inamgcu</span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
