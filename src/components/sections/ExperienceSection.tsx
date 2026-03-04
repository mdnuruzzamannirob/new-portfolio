import { experiences } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const ExperienceSection = () => {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-card-border" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative flex gap-5 sm:gap-6 pb-8 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-7 h-7 mt-0.5">
                <div className="w-7 h-7 rounded-full bg-primary-light border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 bg-card-bg border border-card-border rounded-xl p-4 sm:p-5 hover:border-primary/50 hover:shadow-sm transition-all">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-[15px] font-semibold text-foreground leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-0.5">
                      {exp.company}
                      {exp.location ? (
                        <span className="text-muted font-normal">
                          , {exp.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-primary-foreground bg-primary px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-1 text-sm text-muted">
                  {exp.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-3 h-3 mt-1 shrink-0 text-primary/70"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
