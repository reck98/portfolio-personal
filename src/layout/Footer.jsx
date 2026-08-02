import { Github, Linkedin, Twitter, Instagram, Feather, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/reck98", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aashish1r", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/reck98_", label: "X (Twitter)" },
  { icon: Instagram, href: "https://www.instagram.com/aashish_rauniyar_", label: "Instagram" },
  { icon: Feather, href: "https://medium.com/@aashish7648", label: "Medium" },
  { icon: MessageCircle, href: "https://www.reddit.com/user/aashish_1r", label: "Reddit" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-1"
              aria-label="Aashish Kumar Portfolio Homepage"
            >
              AK<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              &copy; {currentYear} Aashish Kumar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              Engineered with React 19, Vite &amp; Tailwind CSS by <span className="font-semibold text-primary">reck98</span>
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
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
      </div>
    </footer>
  );
};
