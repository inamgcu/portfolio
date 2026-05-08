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
  role: ".NET Technology Consultant | Associate Software Architect",
  location: "Lahore, Pakistan",
  phone: "+92-322-8002441",
  email: "inamgcu@gmail.com",
  linkedin: "https://www.linkedin.com/in/hafiz-inam-ul-haq-605b611a/",
  summary:
    "Results-driven .NET Technology Consultant and Software Architect with 12+ years of experience designing scalable ASP.NET Core, Web API, Azure, and SQL Server solutions for enterprise web, mobile, and integration platforms."
};

const competencies = [
  { icon: Layers3, label: "Enterprise Architecture" },
  { icon: Cloud, label: "Azure Cloud Solutions" },
  { icon: Code2, label: ".NET / ASP.NET Core" },
  { icon: Network, label: "RESTful API Design" },
  { icon: UsersRound, label: "Agile & Scrum Leadership" },
  { icon: ShieldCheck, label: "CI/CD & DevOps" },
  { icon: Database, label: "SQL Server Performance" },
  { icon: Sparkles, label: "Team Mentoring" }
];

const skillGroups = [
  {
    title: "Engineering",
    items: [".NET 8", ".NET Core", "ASP.NET Core", "Web API", "Entity Framework Core", "C#", "JavaScript", "jQuery"]
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "Blob Storage", "API Management", "Docker", "Azure DevOps"]
  },
  {
    title: ".NET Platform",
    items: ["Clean Architecture", "DDD", "Microservices", "CQRS", "REST", "SOLID", "Design Patterns", "MVVM"]
  },
  {
    title: "Data Access",
    items: ["SQL Server", "T-SQL", "Stored Procedures", "Query Optimization", "Database Design", "Entity Framework", "SSIS", "Power BI"]
  }
];

const experience = [
  {
    company: "tkxel",
    period: "December 2025 - Present",
    role: "Technology Consultant - .NET",
    impact: "Consulting on secure, scalable enterprise delivery across Azure and .NET ecosystems.",
    stack: [".NET Core", "ASP.NET Core", "Azure", "SQL Server", "CI/CD"],
    points: [
      "Architect and deliver scalable, secure enterprise solutions using .NET Core and ASP.NET Core.",
      "Design RESTful APIs, orchestrate third-party integrations, and optimize SQL Server data access layers.",
      "Lead collaboration across system design, code reviews, CI/CD configuration, and Azure deployments."
    ]
  },
  {
    company: "Ebryx",
    period: "August 2023 - November 2025",
    role: "Principal Software Engineer",
    impact: "Owned technical direction, client translation, and delivery standards for enterprise .NET 8 applications.",
    stack: [".NET 8", "Clean Architecture", "DDD", "Client Leadership", "Team Standards"],
    points: [
      "Led end-to-end development of enterprise-grade web applications on .NET 8, establishing technical standards and architectural patterns for the engineering team.",
      "Served as the primary technical liaison with clients, translating business requirements into actionable engineering plans and consistently achieving 100% client satisfaction."
    ]
  },
  {
    company: "Confiz Limited",
    period: "March 2014 - July 2023",
    role: "Associate Software Architect",
    impact: "Grew from hands-on .NET engineering into architecture ownership across web, API, mobile, cloud, and data-heavy enterprise systems.",
    stack: ["ASP.NET Core", "Web API", "SQL Server", "Azure", "Xamarin"],
    points: [
      "Architected and delivered .NET-based enterprise systems across REST APIs, back-end services, SQL Server, Azure services, and cross-platform mobile applications.",
      "Overhauled critical back-end and reporting workflows using REST APIs, Web Jobs, SSIS, SQL optimization, and Power BI, improving performance by 75%.",
      "Directed Agile delivery across web, mobile, back-end, API, and cloud projects while mentoring junior and mid-level engineers.",
      "Built mobile applications with Xamarin, UWP, and MVVMCross using shared codebases across platforms."
    ]
  },
  {
    company: "Karzansoft",
    period: "August 2013 - March 2014",
    role: "Software Engineer",
    impact: "Strengthened product features and support workflows for a car leasing platform.",
    stack: [".NET", "Web Apps", "Windows Apps", "Production Support"],
    points: ["Enhanced web and Windows desktop applications for a car leasing platform with production support ownership."]
  },
  {
    company: "Code5 Technologies",
    period: "November 2012 - May 2013",
    role: "Software Engineer",
    impact: "Built an interactive kiosk product blending desktop software, camera integration, and social publishing.",
    stack: ["Windows Kiosk", "DSLR Integration", "Image Filters", "Facebook API"],
    points: ["Built a Windows Kiosk photo booth application with DSLR integration, real-time filters, and Facebook upload automation."]
  }
];

const outcomes = [
  { value: "12+", label: "Years building .NET systems", detail: "ASP.NET Core, Web API, Azure, SQL" },
  { value: "75%", label: "Performance gain", detail: ".NET back-end and SQL workflow turnaround" },
  { value: "60%+", label: "Cycle-time reduction", detail: "Enterprise automation and reporting impact" },
  { value: "100%", label: "Client satisfaction", detail: "Delivery leadership at Ebryx" }
];

const certifications = [
  "PL-100 - Microsoft Power Platform App Maker",
  "DP-203 - Azure Data Engineer Associate"
];

const signatureStack = [".NET 8", "ASP.NET Core", "Web API", "Azure", "SQL Server", "Clean Architecture"];

const serviceLines = [
  {
    icon: Cloud,
    title: "Cloud Modernization",
    body: "Azure-first architecture, API management, integration design, and platform delivery."
  },
  {
    icon: Code2,
    title: ".NET Platform Engineering",
    body: "ASP.NET Core, Web API, Entity Framework Core, SQL Server, and clean application boundaries."
  },
  {
    icon: UsersRound,
    title: "Engineering Leadership",
    body: "Architecture standards, code review discipline, Agile delivery, and mentoring systems."
  }
];

const workingStyle = [
  {
    icon: Target,
    title: "Business-first architecture",
    body: "I map the technical shape of a system back to delivery goals, adoption risk, reporting needs, and operational ownership."
  },
  {
    icon: Lightbulb,
    title: "Clarity before complexity",
    body: "I prefer clean boundaries, observable flows, and practical design patterns that make teams faster instead of just making diagrams prettier."
  },
  {
    icon: ShieldCheck,
    title: "Production-minded delivery",
    body: "Security, performance, CI/CD, data access, and supportability are treated as part of the build, not cleanup after the build."
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
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "Blob Storage", "Data Lake", "Data Factory", "API Management"]
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
              <span className="eyebrow">.NET architecture - Azure - enterprise delivery</span>
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
          <h2>Architecture leadership with hands-on delivery depth.</h2>
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
            <h2>From production engineering to architecture ownership.</h2>
            <p>
              A track record across .NET consulting, enterprise application delivery, API modernization,
              Azure-backed platforms, SQL performance, mobile systems, and team leadership.
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
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
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
                {job.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-band" id="skills">
        <div className="section__intro">
          <span className="section-kicker">Technical Skills</span>
          <h2>.NET-first Microsoft-stack specialist with strong cloud, SQL, API, and design practice.</h2>
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
            Value Champion Award recipient, company-wide technology seminar speaker, and Microsoft-certified
            Power Platform App Maker and Azure Data Engineer Associate.
          </p>
          <div className="certs">
            {certifications.map((cert) => (
              <span key={cert}><BadgeCheck size={17} aria-hidden="true" />{cert}</span>
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
            Available for architecture consulting, .NET modernization, Azure platform design,
            delivery leadership, and engineering team enablement.
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
