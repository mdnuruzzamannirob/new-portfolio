import { languages } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const LanguagesSection = () => {
  return (
    <section>
      <SectionTitle>Languages</SectionTitle>
      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        {languages.map((lang, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 sm:px-6 py-3 ${
              i !== languages.length - 1 ? "border-b border-card-border" : ""
            }`}
          >
            <span className="text-sm font-medium text-foreground">
              {lang.name}
            </span>
            <span className="text-xs sm:text-sm text-primary font-medium">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
