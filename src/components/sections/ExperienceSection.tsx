import { experiences } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const ExperienceSection = () => {
  return (
    <section className="bg-card-bg rounded-2xl overflow-hidden">
      <SectionTitle>Work Experience</SectionTitle>

      {/* Timeline */}
      <div className="px-5 sm:px-6 py-6">
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-2.25 top-3 bottom-3 w-px bg-primary" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-5 pb-6 last:pb-0">
                {/* Dot */}
                <div className="relative z-10 shrink-0 mt-0.5">
                  <div className="size-4.5 shrink-0 rounded-full bg-background border-2 border-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Top row: role + period */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className=" font-semibold text-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-primary-foreground bg-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-sm flex items-center gap-1 text-primary mb-2.5">
                    {exp.company}, {exp.location ? " " + exp.location : null}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 ml-2">
                    {exp.highlights.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="shrink-0 mt-2 size-1.25 rounded-full bg-muted" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Divider between entries */}
                  {i < experiences.length - 1 && (
                    <div className="mt-6 border-t border-dashed border-primary/30" />
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
