import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI & Full-Stack",
    description:
      "Building AI-powered SaaS platforms and developer tools with React, Node.js, and LangChain.",
  },
  {
    icon: Rocket,
    title: "Competitive Programming",
    description:
      "Expert on Codeforces, Knight on LeetCode — 700+ problems solved across platforms.",
  },
  {
    icon: Users,
    title: "Open Source",
    description:
      "Published an npm package (git-smart) and actively contribute to the developer ecosystem.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong foundation in DSA, algorithms, and system design applied to real-world projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                intelligent systems.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a full-stack developer and AI enthusiast pursuing my B.Tech
                in Electronics and Communication Engineering at IIT (ISM)
                Dhanbad. My journey in tech is driven by a passion for building
                tools that solve real problems — from AI-powered SaaS platforms
                to developer utilities.
              </p>
              <p>
                I specialize in React, Node.js, and Python, with deep expertise
                in LangChain and LLM-driven application development. I've built
                and published an npm package, developed multi-agent AI systems,
                and engineered full-stack platforms with payment integration.
              </p>
              <p>
                When I'm not coding, you'll find me solving algorithmic
                problems on Codeforces and LeetCode (Expert / Knight), or
                exploring the latest in AI and system design.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build software that bridges the gap between
                cutting-edge AI and practical, user-first experiences."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
