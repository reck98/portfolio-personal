import { Trophy, Award, Star, Zap } from "lucide-react";

const iconMap = [Trophy, Award, Star, Zap];

const achievements = [
  {
    title: "Codeforces Expert",
    description:
      "Achieved Expert rank on Codeforces (Max Rating: 1677). Ranked in global Top 858 out of 25,000+ competitors in Codeforces Round 1099 (Div. 2).",
    date: "Rating: 1677",
    icon: 0,
    url: "https://codeforces.com/profile/reck98",
  },
  {
    title: "LeetCode Knight",
    description:
      "Earned Knight badge on LeetCode with a peak contest rating of 1852. Consistently ranks in top percentiles globally in Weekly Contests.",
    date: "Rating: 1852",
    icon: 1,
    url: "https://leetcode.com/u/reck98",
  },
  {
    title: "CodeChef 3-Star",
    description:
      "3-Star rating on CodeChef (Max Rating: 1757). Achieved Global Rank 58 in CodeChef Starters 238.",
    date: "Max: 1757",
    icon: 2,
    url: "https://www.codechef.com/users/reck_98",
  },
  {
    title: "700+ Problems Solved",
    description:
      "Solved over 700 complex algorithmic problems across Codeforces, LeetCode, and CodeChef covering Dynamic Programming, Graph Theory, and Advanced Data Structures.",
    date: "Ongoing",
    icon: 3,
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase bg-secondary/80 px-3.5 py-1.5 rounded-full border border-secondary-foreground/20 animate-fade-in">
            Achievements
          </span>
          <h2 id="achievements-heading" className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Milestones &amp;{" "}
            <span className="font-serif italic font-normal text-heading">
              achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 text-base">
            Key competitive programming ratings, global contest ranks, and engineering milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-md animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View Aashish's profile on ${item.title} (opens in a new tab)`}
                            className="hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xs"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
