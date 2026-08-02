import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Feather,
  MessageCircle,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React 19",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Python",
  "C++",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "LangChain",
  "Tailwind CSS v4",
  "Redux Toolkit",
  "Firebase",
  "Stripe",
  "OpenRouter",
  "Git",
  "Linux",
];

// Pure static dot positions for zero hydration shift & zero lint errors
const staticDots = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${((index * 3.33 + 7) % 100).toFixed(2)}%`,
  top: `${((index * 7.17 + 13) % 100).toFixed(2)}%`,
  duration: `${(15 + ((index * 3.7) % 20)).toFixed(1)}s`,
  delay: `${((index * 1.3) % 5).toFixed(1)}s`,
}));

const socialLinks = [
  { icon: Github, href: "https://github.com/reck98", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aashish1r", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/reck98_", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/aashish_rauniyar_", label: "Instagram" },
  { icon: Feather, href: "https://medium.com/@aashish7648", label: "Medium" },
  { icon: MessageCircle, href: "https://www.reddit.com/user/aashish_1r", label: "Reddit" },
];

export const Hero = () => {
  return (
    <section aria-label="Introduction" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with WebP & AVIF fallbacks */}
      <div className="absolute inset-0 pointer-events-none">
        <picture>
          <source srcSet="/hero-bg.avif" type="image/avif" />
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-40"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Animated Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {staticDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 bg-primary"
            style={{
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/20 shadow-sm">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                ECE @ IIT (ISM) Dhanbad • Full-Stack &amp; AI Engineer
              </span>
            </div>

            {/* Headline (Single H1 for the entire application) */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building <span className="text-primary glow-text">intelligent</span>
                <br />
                systems with
                <br />
                <span className="font-serif italic font-normal text-heading">
                  purpose.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Aashish Kumar — a full-stack engineer and AI developer
                from IIT (ISM) Dhanbad. I build scalable web applications, multi-agent
                AI systems, and open-source developer utilities.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>
              </a>
              <a
                href="/resume.pdf"
                download="Aashish_Kumar_Resume.pdf"
                aria-label="Download Aashish Kumar's CV (PDF)"
                className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm font-medium text-muted-foreground">Follow me: </span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (opens in a new tab)`}
                  className="p-2.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Photo Card */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
                aria-hidden="true"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <picture>
                  <source srcSet="/profile-photo.avif" type="image/avif" />
                  <source srcSet="/profile-photo.webp" type="image/webp" />
                  <img
                    src="/profile-photo.jpg"
                    alt="Aashish Kumar - Senior Full-Stack Engineer and AI Developer"
                    width={800}
                    height={1000}
                    fetchpriority="high"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
                  />
                </picture>

                {/* Status Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float border border-primary/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Banner Carousel */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm font-semibold text-muted-foreground mb-8 text-center tracking-wider uppercase">
            Technologies &amp; Frameworks I Work With
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex animate-marquee gap-3">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={`${skill}-${idx}`}
                  className="flex-shrink-0 px-5 py-2.5 glass rounded-full border border-primary/10 whitespace-nowrap shadow-sm hover:border-primary/40 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg p-1"
        >
          <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
