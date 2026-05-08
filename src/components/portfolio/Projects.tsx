import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "NovaCommerce",
    desc: "Multi-vendor e-commerce platform with Stripe payments, real-time inventory and admin analytics.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    accent: "from-primary/30 to-primary-glow/30",
  },
  {
    name: "TaskPilot",
    desc: "Team productivity SaaS with kanban boards, real-time collaboration and granular permissions.",
    tags: ["React", "Express", "Socket.io", "MongoDB"],
    accent: "from-accent/30 to-primary/30",
  },
  {
    name: "FinLedger",
    desc: "Personal finance dashboard with bank syncing, budgets, AI categorization and recurring forecasts.",
    tags: ["React", "Node.js", "PostgreSQL", "OpenAI"],
    accent: "from-primary-glow/30 to-accent/30",
  },
  {
    name: "DevConnect",
    desc: "Social network for developers with feeds, project showcases, GitHub OAuth and live chat.",
    tags: ["MERN", "JWT", "WebSockets"],
    accent: "from-primary/30 to-accent/30",
  },
  {
    name: "RentEase",
    desc: "Property rental marketplace with map search, bookings, host dashboard and Stripe Connect payouts.",
    tags: ["Next.js", "MongoDB", "Mapbox", "Stripe"],
    accent: "from-accent/30 to-primary-glow/30",
  },
  {
    name: "PulseAnalytics",
    desc: "Lightweight web analytics — privacy-first, real-time dashboards and custom event tracking API.",
    tags: ["React", "Express", "ClickHouse", "Redis"],
    accent: "from-primary-glow/30 to-primary/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <div className="text-sm font-medium text-primary mb-3">// Selected work</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projects I'm <span className="text-gradient">proud of</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A handful of full-stack applications — production-ready, performant and built with care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group glass rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-2xl font-bold text-foreground/80 tracking-tight">
                    {p.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/70 border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm">
                  <a href="#" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                    <ExternalLink className="w-4 h-4" /> Live demo
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
