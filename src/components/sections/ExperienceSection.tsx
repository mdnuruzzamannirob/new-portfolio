import { experiences } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const ExperienceSection = () => {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-card-bg border border-card-border rounded-xl p-4 sm:p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {exp.company}, {exp.location}
                </p>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground bg-primary px-3 py-1 rounded-full font-medium whitespace-nowrap self-start">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted">
              {exp.highlights.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
