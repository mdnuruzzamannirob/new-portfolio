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
    <section className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
      <SectionTitle>Skills</SectionTitle>

      <div className="px-5 sm:px-6 py-4 space-y-1.5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-section-bg transition-colors group"
          >
            {/* Name */}
            <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
              {skill.name}
            </span>

            {/* Right: dots + badge */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex gap-[5px] items-center">
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
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${levelColor(skill.level)}`}
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
