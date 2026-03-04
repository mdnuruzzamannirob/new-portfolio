import { interests } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const levelToPercent: Record<string, number> = {
  Passionate: 95,
  Enthusiast: 80,
  Active: 70,
  Engaged: 65,
  Casual: 45,
};

const InterestsSection = () => {
  return (
    <section>
      <SectionTitle>Interests</SectionTitle>
      <div className="space-y-3">
        {interests.map((interest, i) => {
          const pct = levelToPercent[interest.level] ?? 50;
          return (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl px-4 sm:px-5 py-3.5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">
                  {interest.name}
                </span>
                <span className="text-xs font-medium text-primary">
                  {interest.level}
                </span>
              </div>
              <div className="w-full h-1.5 bg-card-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InterestsSection;
