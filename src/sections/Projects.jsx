import { ArrowUpRight, Github } from "lucide-react";
const projects = [
  {
    title: "SplitMate",
    description:
      "A modern expense-sharing platform built for India that enables groups to split bills, track balances, and settle payments seamlessly using dynamic UPI QR codes. It supports multiple split strategies, real-time synchronization, Google authentication, and preserves original debt chains for transparent and accurate settlements.",
    image: "/projects/splitmate.png",
    tags: [
      "Astro",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Firebase",
      "UPI",
      "PWA",
    ],
    link: "https://splitmate-wt86.onrender.com/",
    github: "https://github.com/reck98/SplitMate",
  },
  {
    title: "GenWeb.ai",
    description:
      "An AI-powered SaaS platform that transforms natural-language prompts into production-ready multi-page websites via an LLM-driven code generation pipeline.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Stripe", "OpenRouter"],
    link: "https://gen-web-ai-1-6qrz.onrender.com",
    github: "https://github.com/reck98/gen-web-ai",
  },
  {
    title: "DocuConvert Pro",
    description:
      "An enterprise-grade PDF processing platform featuring 34 powerful document tools, AI-powered document intelligence, OCR, native Office conversions, and a visual workflow automation engine. Built with a privacy-first architecture, it enables users to process, convert, secure, and automate PDF workflows entirely within their own deployment.",
    image: "/projects/docuconvertpro.png",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Python",
      "PyMuPDF",
      "Docker",
      "OCR",
      "AI",
      "PDF",
      "PWA",
      "SEO",
    ],
    link: "https://docuconvertpro.onrender.com",
    github: "https://github.com/reck98/DocuConvertPro",
  },
  {
    title: "ResearchMind",
    description:
      "A multi-agent AI research system using LangChain that orchestrates Search, Reader, Writer, and Critic agents to generate structured research reports from web sources.",
    image: "/projects/project2.png",
    tags: ["Python", "LangChain", "Groq", "Streamlit", "Tavily"],
    link: "https://research-mind-reck98.streamlit.app",
    github: "https://github.com/reck98/research-mind",
  },
  {
    title: "ISM WiFi",
    description:
      "A cross-platform Node.js CLI that automatically logs into the IIT ISM Dhanbad captive Wi-Fi portal whenever internet connectivity is lost. It continuously monitors network status, performs automatic re-authentication with exponential backoff, and provides an interactive configuration wizard with multiple management commands.",
    image: "/projects/ism-wifi.png",
    tags: [
      "Node.js",
      "JavaScript",
      "CLI",
      "Commander.js",
      "Networking",
      "Automation",
      "NPM",
      "Cross-Platform",
    ],
    link: "https://www.npmjs.com/package/ism-wifi",
    github: "https://github.com/reck98/ism-wifi",
  },
  {
    title: "git-smart",
    description:
      "An AI-powered Git CLI published on npm that automates commit messages, code summaries, and Git workflows using OpenRouter, OpenAI, Anthropic, and Gemini.",
    image: "/projects/project3.png",
    tags: ["Node.js", "TypeScript", "OpenAI", "Gemini", "CLI"],
    link: "https://npmjs.com/package/@reck98/git-smart",
    github: "https://github.com/reck98/git-smart",
  },
  {
    title: "Daily Trade Upstox",
    description:
      "An automated paper trading engine implementing a systematic ETF dip-buying strategy using real-time and historical market data from the Upstox API. Features daily trade execution, portfolio tracking, duplicate trade prevention, and P&L / XIRR performance analysis.",
    image: "/projects/project4.png",
    tags: ["Python", "Upstox API", "Pandas", "PyXIRR", "REST API", "uv"],
    link: "",
    github: "https://github.com/reck98/daily-trade-etfs",
  },
  {
    title: "AutoRclone",
    description:
      "An interactive Linux CLI application that automates Google Drive backups using rclone with native systemd scheduling, multi-profile management, and Telegram notifications. Supports one-way and two-way synchronization, offline message queueing, and zero-touch dependency installation.",
    image: "/projects/project7.png",
    tags: ["Bash", "Linux", "Rclone", "systemd", "Google Drive API", "Telegram Bot API", "Shell Scripting"],
    link: "",
    github: "https://github.com/reck98/autorclone",
  },
  {
    title: "Kanban Board",
    description:
      "A lightweight task management application built with vanilla JavaScript that provides an intuitive drag-and-drop Kanban workflow. Supports task creation, automatic local storage persistence, responsive layouts, and secure handling of user input without any external frameworks.",
    image: "/projects/project5.png",
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Drag & Drop API"],
    link: "https://kanban-board-reck98.surge.sh",
    github: "https://github.com/reck98/kanban-board",
  },
  {
    title: "Screen Saver",
    description:
      "A browser-based screen saver featuring four interactive visual themes, including Matrix rain, terminal-inspired digital clock, elapsed time tracker, and animated flip clock. Leverages modern browser APIs, smooth animations, and fullscreen support for an immersive experience.",
    image: "/projects/project6.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Fullscreen API"],
    link: "https://screen-saver.surge.sh/",
    github: "https://github.com/reck98/screen-saver",
  },
  {
    title: "LSTM Next Word Prediction",
    description:
      "A PyTorch-based LSTM language model trained on over 3,000 quotes to predict the next word in a sequence. Includes a complete NLP pipeline covering text preprocessing, tokenization, sequence generation, model training, checkpointing, and inference, achieving 95.57% training accuracy with GPU acceleration.",
    image: "/projects/project8.png",
    tags: ["Python", "PyTorch", "Pandas", "NumPy", "NLTK", "Jupyter", "CUDA", "LSTM", "Deep Learning", "NLP"],
    link: "",
    github: "https://github.com/reck98/lstm-next-word-prediction",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-heading">
              {" "}
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From AI-powered SaaS platforms to developer CLIs — here's what I've
            been building.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
