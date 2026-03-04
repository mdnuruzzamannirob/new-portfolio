import { skills } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const SkillsSection = () => {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
            <div className="w-full h-2 bg-card-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
