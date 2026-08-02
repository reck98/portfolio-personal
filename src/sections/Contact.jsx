import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aashish7648@gmail.com",
    href: "mailto:aashish7648@gmail.com",
    aria: "Send email to aashish7648@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98359-29984",
    href: "tel:+919835929984",
    aria: "Call +91 98359-29984",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhanbad, Jharkhand, India",
    href: "https://maps.google.com/?q=Dhanbad,+Jharkhand",
    aria: "View Dhanbad, Jharkhand on Google Maps (opens in a new tab)",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check environment variables VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || err.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase bg-secondary/80 px-3.5 py-1.5 rounded-full border border-secondary-foreground/20 animate-fade-in">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-heading">
              something impactful.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 text-base">
            Have a full-stack engineering role, AI project, or technical consultation in mind? Reach out anytime — I'd love to talk!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 shadow-xl animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all text-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  aria-required="true"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all text-foreground"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold mb-2 text-foreground"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  aria-required="true"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/40 outline-none transition-all resize-none text-foreground"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
                aria-label={isLoading ? "Sending message..." : "Send Message"}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role="alert"
                  aria-live="polite"
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Address */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <address className="not-italic glass rounded-3xl p-8 border border-border/60 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Contact Details
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.aria}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </address>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
                <span className="font-bold text-foreground">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm actively seeking full-stack engineering, AI developer, and freelance opportunities.
                Let's discuss how I can add immediate value to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
