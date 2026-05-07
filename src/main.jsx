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
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
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
    "Results-driven .NET Technology Consultant and Software Architect with 12+ years of experience designing and delivering high-performance, cloud-native solutions across enterprise, mobile, and web platforms."
};

const competencies = [
  { icon: Layers3, label: "Enterprise Architecture" },
  { icon: Cloud, label: "Azure Cloud Solutions" },
  { icon: Code2, label: ".NET / ASP.NET Core" },
  { icon: Network, label: "RESTful API Design" },
  { icon: UsersRound, label: "Agile & Scrum Leadership" },
  { icon: ShieldCheck, label: "CI/CD & DevOps" },
  { icon: Database, label: "Data Engineering & ETL" },
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
    title: "Data",
    items: ["SQL Server", "T-SQL", "Query Optimization", "SSIS", "Azure Data Factory", "USQL", "Power BI", "Data Warehousing"]
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "DDD", "Microservices", "Event-Driven Architecture", "SOLID", "Design Patterns", "REST", "CQRS"]
  }
];

const experience = [
  {
    company: "tkxel",
    period: "December 2025 - Present",
    role: "Technology Consultant - .NET",
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
    points: [
      "Led enterprise-grade .NET 8 web application delivery and established team-level technical standards.",
      "Translated client goals into actionable engineering plans with consistently strong satisfaction outcomes.",
      "Introduced Clean Architecture and DDD practices to improve maintainability and onboarding velocity."
    ]
  },
  {
    company: "Confiz Limited",
    period: "March 2014 - July 2023",
    role: "Associate Software Architect",
    points: [
      "Delivered a cloud-native BI platform with Azure Data Lake, Azure Data Factory, USQL, and Power BI, reducing reporting cycle time by over 60%.",
      "Overhauled a critical BI system using REST APIs, Web Jobs, SSIS, and Power BI, improving performance by 75%.",
      "Directed Agile delivery across web, mobile, back-end, and cloud projects while mentoring junior and mid-level engineers.",
      "Built mobile applications with Xamarin, UWP, and MVVMCross using shared codebases across platforms."
    ]
  },
  {
    company: "Karzansoft",
    period: "August 2013 - March 2014",
    role: "Software Engineer",
    points: ["Enhanced web and Windows desktop applications for a car leasing platform with production support ownership."]
  },
  {
    company: "Code5 Technologies",
    period: "November 2012 - May 2013",
    role: "Software Engineer",
    points: ["Built a Windows Kiosk photo booth application with DSLR integration, real-time filters, and Facebook upload automation."]
  }
];

const outcomes = [
  { value: "12+", label: "Years building enterprise systems", detail: ".NET, Azure, web, mobile, BI" },
  { value: "75%", label: "Performance gain", detail: "Critical BI platform turnaround" },
  { value: "60%+", label: "Reporting cycle reduction", detail: "Azure BI automation impact" },
  { value: "100%", label: "Client satisfaction", detail: "Delivery leadership at Ebryx" }
];

const certifications = [
  "PL-100 - Microsoft Power Platform App Maker",
  "DP-203 - Azure Data Engineer Associate"
];

const signatureStack = [".NET 8", "Azure", "Clean Architecture", "SQL Server", "Power BI", "CI/CD"];

const serviceLines = [
  {
    icon: Cloud,
    title: "Cloud Modernization",
    body: "Azure-first architecture, API management, integration design, and platform delivery."
  },
  {
    icon: Database,
    title: "BI & Data Platforms",
    body: "Data Factory, Data Lake, SSIS, Power BI, and reporting pipelines built for business velocity."
  },
  {
    icon: UsersRound,
    title: "Engineering Leadership",
    body: "Architecture standards, code review discipline, Agile delivery, and mentoring systems."
  }
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

            <aside className="signal-panel" aria-label="Professional highlights">
              <div className="signal-panel__top">
                <span>Senior delivery signal</span>
                <strong>Architecting outcomes, not just applications</strong>
              </div>
              <div className="architecture-visual" aria-hidden="true">
                <div className="flow-line flow-line--one" />
                <div className="flow-line flow-line--two" />
                <div className="flow-line flow-line--three" />
                <div className="node node--core"><Code2 size={28} /></div>
                <div className="node node--cloud"><Cloud size={24} /></div>
                <div className="node node--data"><Database size={24} /></div>
                <div className="node node--team"><UsersRound size={24} /></div>
                <div className="pulse-ring" />
              </div>
              <div className="signal-panel__meta">
                <span>Architecture focus</span>
                <strong>Cloud-native platforms with measurable delivery outcomes</strong>
              </div>
            </aside>
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

      <section className="section split" id="experience">
        <div className="section__intro sticky">
          <span className="section-kicker">Experience</span>
          <h2>From production engineering to architecture ownership.</h2>
          <p>
            A track record across consulting, enterprise application delivery, BI modernization,
            mobile platforms, and team leadership.
          </p>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.company}-${job.role}`}>
              <div className="job__header">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.period}</span>
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-band" id="skills">
        <div className="section__intro">
          <span className="section-kicker">Technical Skills</span>
          <h2>Microsoft-stack specialist with strong cloud, data, and design practice.</h2>
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
