import { education } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const EducationSection = () => {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-card-bg border border-card-border rounded-xl p-4 sm:p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {edu.institution}
                  {edu.location ? `, ${edu.location}` : ""}
                </p>
              </div>
              <span className="text-xs sm:text-sm text-primary-foreground bg-primary px-3 py-1 rounded-full font-medium whitespace-nowrap self-start">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-muted">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
