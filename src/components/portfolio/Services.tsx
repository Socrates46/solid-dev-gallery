import { Code, Server, Palette, RefreshCw, Plug, Zap } from "lucide-react";

const services = [
  { icon: Code, title: "Full-Stack Development", desc: "End-to-end web apps with React frontends and Node.js/Express backends, ready for production." },
  { icon: Server, title: "API Development", desc: "RESTful & GraphQL APIs with authentication, validation, rate limiting and great docs." },
  { icon: Palette, title: "UI/UX Implementation", desc: "Pixel-perfect, accessible interfaces from your Figma designs with delightful interactions." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize legacy sites with new design systems, improved performance and better SEO." },
  { icon: Plug, title: "Backend Integration", desc: "Connect your app to Stripe, Twilio, OpenAI, Auth providers and any third-party service." },
  { icon: Zap, title: "Performance & SEO", desc: "Audit and optimize Core Web Vitals, bundle size, server response and search visibility." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-sm font-medium text-primary mb-3">// What I do</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="text-gradient">offer</span>
          </h2>
          <p className="text-muted-foreground">
            From a single feature to a full product launch — I help teams ship better software, faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative glass rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
