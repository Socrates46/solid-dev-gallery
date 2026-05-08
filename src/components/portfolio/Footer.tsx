import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Socrates Nwankwor. Crafted with care.
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="mailto:hello@alexcarter.dev" aria-label="Email" className="hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
