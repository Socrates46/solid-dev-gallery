import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-hero pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-medium text-primary mb-3">// Get in touch</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's build <span className="text-gradient">something great</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Drop a message — I usually reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            <a href="mailto:hello@alexcarter.dev" className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow transition-shadow">
              <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">hello@alexcarter.dev</div>
              </div>
            </a>
            <a href="https://wa.me/10000000000" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow transition-shadow">
              <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-medium">+1 (000) 000-0000</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-muted-foreground mb-3">Find me on</div>
              <div className="flex gap-2">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-11 h-11 grid place-items-center rounded-lg bg-secondary hover:text-primary transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 grid place-items-center rounded-lg bg-secondary hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" maxLength={100} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@company.com" maxLength={255} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." maxLength={1000} aria-invalid={!!errors.message} />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full md:w-auto">
              {sent ? (<><CheckCircle2 className="w-4 h-4" /> Message sent</>) : (<>{loading ? "Sending..." : "Send message"} <Send className="w-4 h-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
