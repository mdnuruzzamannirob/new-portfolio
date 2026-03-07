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
    <section className="bg-card-bg rounded-2xl overflow-hidden">
      <SectionTitle>Languages</SectionTitle>

      <div className="px-5 sm:px-6 py-5 space-y-4">
        {languages.map((lang, i) => {
          const pct = levelToPercent[lang.level] ?? 50;
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-foreground">
                  {lang.name}
                </span>
                <span className="text-xs font-medium text-primary">
                  {lang.level}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
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
