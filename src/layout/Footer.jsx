import { Github, Linkedin, Twitter, Instagram, Feather, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/reck98", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/aashish1r", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/reck98_", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/aashish_rauniyar_", label: "Instagram" },
  { icon: Feather, href: "https://medium.com/@aashish7648", label: "Medium" },
  { icon: MessageCircle, href: "https://www.reddit.com/user/aashish_1r", label: "Reddit" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              AK<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Aashish Kumar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Made with ❤️ by reck98
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
