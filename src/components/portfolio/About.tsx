import { Briefcase, GraduationCap, Rocket, Target } from "lucide-react";

const highlights = [
  { icon: Rocket, title: "Performance-first", desc: "Optimized bundles, lazy loading, server-side rendering and edge deployment." },
  { icon: Target, title: "Clean architecture", desc: "Modular code, typed APIs, tested business logic and clear domain boundaries." },
  { icon: Briefcase, title: "Product mindset", desc: "I think in user outcomes, not just tickets — UX, metrics and iteration." },
  { icon: GraduationCap, title: "Always learning", desc: "Constantly exploring new tools, patterns and AI-powered workflows." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-sm font-medium text-primary mb-3">// About me</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineer who ships <span className="text-gradient">complete products</span>.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer with 5+ years of experience designing and building
                modern web applications — from clean, accessible interfaces to scalable Node.js
                APIs and well-modeled MongoDB databases.
              </p>
              <p>
                My journey started building landing pages with vanilla JS, then evolved through
                React, Next.js, and cloud-native backends. Today I help startups and teams turn
                ideas into production-ready software with great UX.
              </p>
              <p>
                I care about <span className="text-foreground font-medium">clean code</span>,{" "}
                <span className="text-foreground font-medium">maintainable systems</span> and{" "}
                <span className="text-foreground font-medium">delightful user experiences</span> —
                the trio that makes products actually succeed.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-primary/20 to-primary-glow/20 text-primary mb-4">
                  <h.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
