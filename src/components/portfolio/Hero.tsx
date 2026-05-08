import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="text-gradient">Alex Carter</span>
            <br />
            Full-Stack Developer
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I build scalable, production-ready web applications end-to-end with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span>,{" "}
            <span className="text-foreground font-medium">Express</span> and{" "}
            <span className="text-foreground font-medium">MongoDB</span>.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv.pdf" download>
                <Download className="w-4 h-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 grid place-items-center rounded-lg glass hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 grid place-items-center rounded-lg glass hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 grid place-items-center rounded-lg glass hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
          {[
            { k: "5+", v: "Years experience" },
            { k: "40+", v: "Projects shipped" },
            { k: "25+", v: "Happy clients" },
            { k: "99%", v: "Uptime delivered" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-bold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
