import { skills } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const levelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 65) return "Proficient";
  return "Familiar";
};

const levelColor = (level: number) => {
  if (level >= 90) return "bg-primary text-primary-foreground";
  if (level >= 80) return "bg-primary/80 text-primary-foreground";
  if (level >= 65) return "bg-primary/60 text-primary-foreground";
  return "bg-primary/40 text-primary-foreground";
};

const SkillsSection = () => {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-card-bg border border-card-border rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:border-primary/50 transition-colors group"
          >
            {/* Skill name */}
            <span className="text-sm font-medium text-foreground leading-snug">
              {skill.name}
            </span>

            {/* Right side: dots + badge */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Dot meter — 5 dots */}
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, d) => {
                  const filled = d < Math.round((skill.level / 100) * 5);
                  return (
                    <span
                      key={d}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        filled
                          ? "bg-primary"
                          : "bg-card-border group-hover:bg-primary/20"
                      }`}
                    />
                  );
                })}
              </div>
              {/* Level badge */}
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${levelColor(skill.level)}`}
              >
                {levelLabel(skill.level)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
