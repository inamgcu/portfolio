import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
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
    "10+ years designing enterprise .NET, Azure, SQL, integration, and data platforms."
};

const competencies = [
  { icon: Layers3, label: "Solution Design", detail: "Business goals, constraints, and clear design direction.", tone: "teal" },
  { icon: Target, label: "Decision Trade-offs", detail: "Practical choices across quality, cost, risk, and delivery.", tone: "gold" },
  { icon: UsersRound, label: "Client Communication", detail: "Stakeholder alignment, expectation clarity, and delivery visibility.", tone: "blue" },
  { icon: Network, label: "API & Integration Design", detail: "Clean API boundaries, workflows, messaging, and integration paths.", tone: "warm" },
  { icon: Code2, label: ".NET / ASP.NET Core", detail: "Modern C#, Web API, Entity Framework, and service boundaries.", tone: "warm" },
  { icon: Cloud, label: "Azure Cloud Solutions", detail: "App Services, Functions, Service Bus, API Management, and DevOps.", tone: "blue" },
  { icon: Database, label: "SQL Server Performance", detail: "Schema design, query tuning, stored procedures, and reporting support.", tone: "teal" },
  { icon: ShieldCheck, label: "Delivery Governance", detail: "Standards, reviews, supportability, and production confidence.", tone: "gold" }
];

const skillGroups = [
  {
    title: "Architecture & Design",
    icon: Layers3,
    summary: "Decision shaping, requirements, API boundaries, and technical direction.",
    items: ["Solution Design", "Requirements Mapping", "API Decomposition", "Integration Design", "Design Reviews", "Technical Roadmaps", "Architecture Decisions"]
  },
  {
    title: ".NET Engineering",
    icon: Code2,
    summary: "Modern C#, ASP.NET Core, Web API, ORM, and service implementation.",
    items: [".NET 8", ".NET Core", "ASP.NET Core", "Web API", "Entity Framework Core", "C#", "REST", "Integration Architecture"]
  },
  {
    title: "Azure & Delivery",
    icon: Cloud,
    summary: "Cloud services, messaging, deployment practices, and DevOps delivery.",
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "API Management", "Docker", "Azure DevOps"]
  },
  {
    title: "Data & Storage",
    icon: Database,
    summary: "SQL Server, query tuning, data integration, reporting, and storage thinking.",
    items: ["SQL Server", "T-SQL", "Query Optimization", "Database Design", "Data Integration", "Data Transformation", "NoSQL Concepts", "Power BI"]
  }
];

const experience = [
  {
    company: "tkxel",
    logo: "./logos/tkxel.svg",
    logoClass: "logo-tkxel",
    period: "December 2025 - Present",
    startDate: "2025-12",
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
    startDate: "2023-08",
    endDate: "2025-11",
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
    startDate: "2014-03",
    endDate: "2023-07",
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
    startDate: "2013-08",
    endDate: "2014-03",
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
    startDate: "2012-11",
    endDate: "2013-05",
    role: "Software Engineer",
    impact: "Built an interactive Windows kiosk product with hardware integration and social publishing.",
    stack: ["Windows Kiosk", "DSLR Integration", "Image Filters", "Facebook API"],
    points: ["Developed a Windows photo booth application with DSLR capture, real-time image filters, and automated Facebook upload workflows."]
  }
];

const parseMonth = (value) => {
  const [year, month] = value.split("-").map(Number);
  return { year, month: month - 1 };
};

const formatExperienceDuration = ({ startDate, endDate }) => {
  const start = parseMonth(startDate);
  const today = new Date();
  const end = endDate ? parseMonth(endDate) : { year: today.getFullYear(), month: today.getMonth() };
  const months = Math.max(1, (end.year - start.year) * 12 + (end.month - start.month) + 1);
  const years = Math.round((months / 12) * 10) / 10;
  const label = Number.isInteger(years) ? String(years) : years.toFixed(1);
  return `${label} ${years === 1 ? "Year" : "Years"}`;
};

const careerStats = [
  { value: "3", label: "Senior Roles", detail: "Consultant, principal, and architect tracks" },
  { value: "75%", label: "Performance gain", detail: "Legacy workflow modernization" },
  { value: "60%+", label: "Cycle-time reduction", detail: "Enterprise automation and reporting impact" },
];

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Strengths" },
  { href: "#style", label: "Style" },
  { href: "#tools", label: "Tools" },
  { href: "#expertise", label: "Expertise" },
  { href: "#skills", label: "Skills" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" }
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
    detail: "Business goals, constraints, trade-offs, and clear design decisions"
  },
  {
    icon: Code2,
    label: ".NET Modernization",
    detail: "ASP.NET Core, Web API, Entity Framework, and cleaner boundaries"
  },
  {
    icon: Workflow,
    label: "Azure Integration",
    detail: "Service Bus, Functions, API Management, DevOps, and cloud workflows"
  },
  {
    icon: Database,
    label: "Data & SQL",
    detail: "SQL tuning, data integration, transformation, and reporting support"
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
    summary: "Daily workspace for coding, APIs, source control, team knowledge, and AI-assisted delivery.",
    items: ["JIRA", "Confluence", "Git", "GitHub", "Azure DevOps", "SharePoint", "Visual Studio", "Visual Studio Code", "Postman", "Cursor", "Codex"]
  },
  {
    title: "Project Delivery",
    icon: KanbanSquare,
    summary: "Planning and delivery practices used to keep teams aligned, visible, and predictable.",
    items: ["Agile", "Scrum", "Kanban", "Sprint Planning", "Backlog Grooming", "Risk Management"]
  },
  {
    title: "Cloud Tooling",
    icon: Cloud,
    summary: "Azure services and deployment tooling used across integration, automation, and platform work.",
    items: ["Azure App Service", "Azure Functions", "Service Bus", "Event Hub", "Blob Storage", "Data Lake", "Data Factory", "API Management", "Azure SQL", "Key Vault", "Entra ID", "Docker"]
  }
];

const devicon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
const simpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}`;
const jsdelivrIcon = (path) => `https://cdn.jsdelivr.net/${path}`;

const productIcons = {
  "Visual Studio": devicon("visualstudio/visualstudio-original.svg"),
  "Visual Studio Code": devicon("vscode/vscode-original.svg"),
  "VS Code": devicon("vscode/vscode-original.svg"),
  GitHub: devicon("github/github-original.svg"),
  Git: devicon("git/git-original.svg"),
  "Azure DevOps": "./logos/tools/azure-devops.svg",
  JIRA: simpleIcon("jira"),
  Confluence: simpleIcon("confluence"),
  Postman: devicon("postman/postman-original.svg"),
  Cursor: simpleIcon("cursor"),
  Codex: jsdelivrIcon("npm/@lobehub/icons-static-svg@latest/icons/codex.svg"),
  SharePoint: jsdelivrIcon("gh/homarr-labs/dashboard-icons/svg/microsoft-sharepoint.svg"),
  Docker: devicon("docker/docker-original.svg"),
  Azure: devicon("azure/azure-original.svg")
};

const azureServiceIcons = {
  "Azure App Service": "./logos/tools/azure/app-service.svg",
  "Azure Functions": "./logos/tools/azure/functions.svg",
  "Service Bus": "./logos/tools/azure/service-bus.svg",
  "Event Hub": "./logos/tools/azure/event-hub.svg",
  "Blob Storage": "./logos/tools/azure/blob-storage.svg",
  "Data Lake": "./logos/tools/azure/data-lake.svg",
  "Data Factory": "./logos/tools/azure/data-factory.svg",
  "API Management": "./logos/tools/azure/api-management.svg",
  "Azure SQL": "./logos/tools/azure/azure-sql.svg",
  "Key Vault": "./logos/tools/azure/key-vault.svg",
  "Entra ID": "./logos/tools/azure/entra-id.svg"
};

const getProductIcon = (item) => productIcons[item] ?? azureServiceIcons[item] ?? null;

const toolHighlights = [
  { logo: productIcons["Visual Studio"], label: "Visual Studio", detail: "Primary .NET IDE" },
  { logo: productIcons["VS Code"], label: "VS Code", detail: "Lightweight editing" },
  { logo: productIcons.GitHub, label: "GitHub", detail: "Source & portfolio" },
  { logo: productIcons.Git, label: "Git", detail: "Branching workflow" },
  { logo: productIcons["Azure DevOps"], label: "Azure DevOps", detail: "Boards & pipelines" },
  { logo: productIcons.JIRA, label: "JIRA", detail: "Agile tracking" },
  { logo: productIcons.Confluence, label: "Confluence", detail: "Team knowledge" },
  { logo: productIcons.Postman, label: "Postman", detail: "API validation" },
  { logo: productIcons.Cursor, label: "Cursor", detail: "AI-assisted coding" },
  { logo: productIcons.Codex, label: "Codex", detail: "Code review & tasks" },
  { logo: productIcons.SharePoint, label: "SharePoint", detail: "Collaboration" },
  { logo: productIcons.Docker, label: "Docker", detail: "Containerized delivery" }
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
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </div>
          </nav>

          <div className="hero__grid">
            <div className="hero__copy">
              <span className="eyebrow">Solution architecture - .NET - Azure Integration</span>
              <h1>{profile.name}</h1>
              <p className="role">{profile.role}</p>
              <p className="summary">{profile.summary}</p>
              <div className="stack-strip" aria-label="Signature technology stack">
                {signatureStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="hero__side">
              <aside className="experience-canvas" aria-label="Experience highlight">
                <span className="experience-canvas__heading">Experience</span>
                <strong>10+ Years</strong>
                <p>.NET, Azure, SQL, integrations, and enterprise delivery across web, mobile, and data platforms.</p>
                <div className="canvas-stack" aria-label="Experience areas">
                  <span>.NET</span>
                  <span>Azure</span>
                  <span>SQL Server</span>
                  <span>Integration</span>
                </div>
              </aside>
              <div className="contact-canvas" id="contact" aria-label="Contact information">
                <span className="contact-canvas__heading">Contact</span>
                <ul className="contact-canvas__items">
                  <li><a href={`mailto:${profile.email}`}><Mail size={15} aria-hidden="true" />{profile.email}</a></li>
                  <li><a href={`tel:${profile.phone.replaceAll("-", "")}`}><Phone size={15} aria-hidden="true" />{profile.phone}</a></li>
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin size={15} aria-hidden="true" />
                      LinkedIn
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  </li>
                  <li><span><MapPin size={15} aria-hidden="true" />{profile.location}</span></li>
                  <li><span><Github size={15} aria-hidden="true" />GitHub: inamgcu</span></li>
                </ul>
              </div>
            </div>
          </div>
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
      </section>

      <section className="summary-stats" aria-label="Career summary and stats">
        <article className="summary-card">
          <span className="section-kicker">Experience</span>
          <h2>Architecture ownership.</h2>
          <p>
            A track record across stakeholder alignment, architecture decisions, .NET modernization,
            Azure-backed platforms, API decomposition, SQL performance, and data transformation.
          </p>
        </article>
        <div className="metrics" aria-label="Career stats">
          {careerStats.map((item) => (
            <article className="metric" key={item.label}>
              <TrendingUp size={20} aria-hidden="true" />
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <small>{item.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section section-lined" id="experience">
        <div className="section__intro experience-intro">
          <h2>Professional experience.</h2>
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
                <div className="job__dates" aria-label={`${job.period}, ${formatExperienceDuration(job)}`}>
                  <span>{job.period}</span>
                  <span className="job__duration">{formatExperienceDuration(job)}</span>
                </div>
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

      <section className="section services" id="services" aria-label="Consulting strengths">
        {serviceLines.map(({ icon: Icon, title, body }) => (
          <article className="service" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="section style-section section-lined" id="style">
        <div className="section__intro">
          <span className="section-kicker">Working Style</span>
          <h2>Senior engineering judgment, consulting mindset.</h2>
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

      <section className="section tools-section section-lined" id="tools">
        <div className="section__intro">
          <span className="section-kicker">Tools & Platforms</span>
          <h2>Code, cloud, collaboration, and AI toolkit.</h2>
        </div>
        <div className="tools-showcase">
          <div className="tool-console" aria-label="Primary engineering toolkit">
            <div className="tool-console__header">
              <strong>Microsoft-first engineering with practical AI assistance</strong>
            </div>
            <div className="tool-highlight-grid" aria-label="Tools and platforms">
              {toolHighlights.map(({ logo, label, detail }) => (
                <article className="tool-highlight" key={label}>
                  <img className="product-logo product-logo--highlight" src={logo} alt="" loading="lazy" aria-hidden="true" />
                  <div>
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="tools-grid">
          {toolGroups.map(({ icon: Icon, ...group }) => (
            <article className="tool-card" key={group.title}>
              <div className="tool-card__head">
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>
              <div className="tags">
                {group.items.map((item) => {
                  const logo = getProductIcon(item);
                  return (
                    <span key={item}>
                      {logo && <img className="product-logo product-logo--tag" src={logo} alt="" loading="lazy" aria-hidden="true" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section competencies-section section-lined" id="expertise">
        <div className="section__intro">
          <span className="section-kicker">Core Competencies</span>
          <h2>Architecture leadership with hands-on depth.</h2>
        </div>
        <div className="competency-layout">
          <article className="competency-lead">
            <span className="competency-lead__icon">
              <Layers3 size={26} aria-hidden="true" />
            </span>
            <span className="competency-lead__kicker">Architecture focus</span>
            <h3>.NET, Azure, SQL, and integration decisions.</h3>
            <p>
              Hands-on technical leadership across enterprise applications, cloud services,
              API boundaries, data platforms, and delivery standards.
            </p>
          </article>
          <div className="competency-grid">
            {competencies.map(({ icon: Icon, label, detail, tone }) => (
              <article className={`competency competency--${tone}`} key={label}>
                <span className="competency__icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-band" id="skills">
        <div className="section__intro">
          <span className="section-kicker">Technical Skills</span>
          <h2>.NET, Azure, SQL, APIs, and delivery governance.</h2>
        </div>
        <div className="skills-dashboard">
          <aside className="skills-lead" aria-label="Engineering toolkit overview">
            <MonitorCog size={25} aria-hidden="true" />
            <span className="skills-lead__kicker">Engineering toolkit</span>
            <h3>.NET delivery toolkit.</h3>
            <p>
              Strongest around .NET, Azure integrations, SQL Server performance,
              API design, and delivery governance.
            </p>
            <div className="skills-lead__stack">
              {[".NET", "Azure", "SQL Server", "Web API", "Azure DevOps"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, ...group }) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card__head">
                  <span><Icon size={18} aria-hidden="true" /></span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                  </div>
                </div>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof section-lined" id="recognition">
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

    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
