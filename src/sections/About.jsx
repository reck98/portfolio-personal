import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI & Full-Stack Systems",
    description:
      "Building production-grade AI applications, multi-agent pipelines, and developer platforms using React, Node.js, Python, and LangChain.",
  },
  {
    icon: Rocket,
    title: "Competitive Programming",
    description:
      "Codeforces Expert (Rating 1677) & LeetCode Knight (Rating 1852) with over 700+ complex data structure & algorithmic problems solved.",
  },
  {
    icon: Users,
    title: "Open Source & Developer Tools",
    description:
      "Published npm packages (git-smart, ism-wifi) actively used by developers, with continuous contributions to open-source software.",
  },
  {
    icon: Lightbulb,
    title: "System Design & Algorithms",
    description:
      "Deep foundation in Data Structures, Object-Oriented System Design, database architecture, and performance optimization.",
  },
];

export const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase bg-secondary/80 px-3.5 py-1.5 rounded-full border border-secondary-foreground/20">
                About Me
              </span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-heading">
                {" "}
                intelligent systems.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-base leading-relaxed">
              <p>
                I'm a full-stack engineer and AI enthusiast pursuing my B.Tech
                in Electronics and Communication Engineering at IIT (ISM)
                Dhanbad (CGPA: 9.31/10.00). My passion centers on engineering high-performance
                software — ranging from agentic AI SaaS tools to system-level CLI applications.
              </p>
              <p>
                I specialize in React, TypeScript, Node.js, and Python, with expertise
                in LangChain, multi-agent AI orchestration, and database architecture. I've designed
                and deployed privacy-first document intelligence platforms, expense-sharing platforms with UPI payment integration, and AI Git workflow CLIs.
              </p>
              <p>
                When I'm not architecting full-stack systems, I spend time competing in global algorithmic contests
                on Codeforces (Expert, Peak Rank 858) and LeetCode (Knight), continuously sharpening my problem-solving speed.
              </p>
            </div>

            <blockquote className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 border-l-4 border-l-primary">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build software that bridges the gap between
                cutting-edge AI capabilities and intuitive, high-performance user experiences."
              </p>
            </blockquote>
          </div>

          {/* Right Column Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <article
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in border border-border/60 hover:border-primary/40 transition-all duration-300 shadow-md"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
