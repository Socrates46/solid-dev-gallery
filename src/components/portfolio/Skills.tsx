const groups = [
  {
    title: "Frontend",
    color: "from-primary to-primary-glow",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "Framer Motion", "Vite", "Shadcn UI"],
  },
  {
    title: "Backend",
    color: "from-accent to-primary-glow",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "JWT Auth", "WebSockets", "Stripe", "Nodemailer"],
  },
  {
    title: "Database & DevOps",
    color: "from-primary-glow to-accent",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel", "GitHub Actions"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-medium text-primary mb-3">// Tech stack</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools I use <span className="text-gradient">every day</span>
          </h2>
          <p className="text-muted-foreground">
            A modern, battle-tested stack for building fast, reliable full-stack products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow">
              <div className={`inline-block text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${g.color} text-primary-foreground mb-5`}>
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-secondary/60 border border-border text-sm hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
