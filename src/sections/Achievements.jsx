import { Trophy, Award, Star, Zap } from "lucide-react";

const iconMap = [Trophy, Award, Star, Zap];

const achievements = [
  {
    title: "Codeforces Expert",
    description:
      "Achieved Expert rank on Codeforces (Max Rating: 1677). Peak global rank of 858 in Codeforces Round 1099 (Div. 2).",
    date: "Current: 1669",
    icon: 0,
    url: "https://codeforces.com/profile/reck98",
  },
  {
    title: "LeetCode Knight",
    description:
      "Earned Knight badge on LeetCode with a peak rating of 1852. Consistently solves challenging algorithmic problems.",
    date: "Rating: 1852",
    icon: 1,
    url: "https://leetcode.com/u/reck98",
  },
  {
    title: "CodeChef 3-Star",
    description:
      "3-Star rating on CodeChef (Max Rating: 1757). Global rank of 58 in CodeChef Starters 238.",
    date: "Max: 1757",
    icon: 2,
    url: "https://www.codechef.com/users/reck_98",
  },
  {
    title: "700+ Problems Solved",
    description:
      "Solved over 700 algorithmic problems across Codeforces, CodeChef, and LeetCode, demonstrating strong proficiency in Data Structures & Algorithms.",
    date: "Ongoing",
    icon: 3,
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground
          text-sm font-medium tracking-wider
          uppercase animate-fade-in"
          >
            Achievements
          </span>
          <h2
            className="text-4xl md:text-5xl
          font-bold mt-4 mb-6 animate-fade-in
          animation-delay-100 text-secondary-foreground"
          >
            Milestones &{" "}
            <span
              className="font-serif italic
            font-normal text-heading"
            >
              achievements.
            </span>
          </h2>
          <p
            className="text-muted-foreground
          animate-fade-in animation-delay-200"
          >
            Notable moments and accomplishments from my journey so far.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
