import { experiences } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const ExperienceSection = () => {
  return (
    <section className="bg-card-bg border border-card-border rounded-2xl overflow-hidden">
      <SectionTitle>Work Experience</SectionTitle>

      {/* Timeline */}
      <div className="px-5 sm:px-6 py-6">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[9px] top-3 bottom-3 w-px bg-card-border" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-5 pb-7 last:pb-0">
                {/* Dot */}
                <div className="relative z-10 shrink-0 mt-0.5">
                  <div className="w-[18px] h-[18px] rounded-full bg-background border-2 border-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Top row: role + period */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm sm:text-[15px] font-semibold text-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <span className="text-[10px] font-semibold text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-xs font-medium text-primary mb-2.5">
                    {exp.company}
                    {exp.location ? (
                      <span className="text-muted font-normal"> · {exp.location}</span>
                    ) : null}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                        <span className="shrink-0 mt-[5px] w-1 h-1 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Divider between entries */}
                  {i < experiences.length - 1 && (
                    <div className="mt-6 border-t border-dashed border-card-border" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
