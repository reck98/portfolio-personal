import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 z-50 ${
        isScrolled ? "glass-strong py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="container mx-auto px-6 flex items-center justify-between"
      >
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-1"
          aria-label="Aashish Kumar Portfolio Homepage"
        >
          AK<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full"
          >
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-foreground cursor-pointer rounded-lg hover:bg-surface focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-strong animate-fade-in border-b border-border shadow-xl"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-md px-2"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-full"
              >
                <Button className="w-full">Contact Me</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
