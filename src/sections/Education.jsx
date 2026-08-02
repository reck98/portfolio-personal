const education = [
  {
    period: "2024 — 2028",
    startYear: "2024",
    endYear: "2028",
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Indian Institute of Technology (ISM) Dhanbad",
    description:
      "Pursuing a Bachelor of Technology with an emphasis on software engineering, algorithm design, data structures, and computer systems. Maintained a CGPA of 9.31 / 10.00.",
    highlights: ["Data Structures & Algorithms", "Object-Oriented Programming (Java)", "Computer Programming", "Digital Electronics"],
    current: true,
  },
];

export const Education = () => {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase bg-secondary/80 px-3.5 py-1.5 rounded-full border border-secondary-foreground/20 animate-fade-in"
          >
            Education
          </span>
          <h2
            id="education-heading"
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            The foundation that{" "}
            <span className="font-serif italic font-normal text-heading">
              {" "}
              drives me.
            </span>
          </h2>

          <p
            className="text-muted-foreground animate-fade-in animation-delay-200 text-base"
          >
            Currently pursuing my Bachelor of Technology at one of India's premier national institutes (IIT Dhanbad), combining rigorous academic excellence with practical engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((item, idx) => (
              <article
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-0 w-3.5 h-3.5 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                  aria-hidden="true"
                >
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-md"
                  >
                    <time dateTime={`${item.startYear}/${item.endYear}`} className="text-sm text-primary font-semibold tracking-wide">
                      {item.period}
                    </time>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      {item.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm mt-1">{item.school}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {item.highlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="px-3 py-1 bg-surface text-xs font-medium rounded-full text-muted-foreground border border-border/40"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
