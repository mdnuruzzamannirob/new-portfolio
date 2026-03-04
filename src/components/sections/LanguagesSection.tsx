import { languages } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const levelToPercent: Record<string, number> = {
  Native: 100,
  Fluent: 85,
  Advanced: 70,
  Intermediate: 55,
  Basic: 35,
};

const LanguagesSection = () => {
  return (
    <section>
      <SectionTitle>Languages</SectionTitle>
      <div className="space-y-3">
        {languages.map((lang, i) => {
          const pct = levelToPercent[lang.level] ?? 50;
          return (
            <div
              key={i}
              className="bg-card-bg border border-card-border rounded-xl px-4 sm:px-5 py-3.5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">
                  {lang.name}
                </span>
                <span className="text-xs font-medium text-primary">
                  {lang.level}
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

export default LanguagesSection;
