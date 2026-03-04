import { education } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const EducationSection = () => {
  return (
    <section className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
      <SectionTitle>Education</SectionTitle>

      <div className="px-5 sm:px-6 py-5 space-y-4">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`pb-4 ${
              i < education.length - 1
                ? "border-b border-dashed border-card-border"
                : ""
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-sm font-semibold text-foreground">
                {edu.degree}
              </h3>
              <span className="text-[10px] font-semibold text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="text-xs font-medium text-primary mb-1">
              {edu.institution}
              {edu.location ? (
                <span className="text-muted font-normal">
                  {" "}
                  · {edu.location}
                </span>
              ) : null}
            </p>
            <p className="text-xs text-muted">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
