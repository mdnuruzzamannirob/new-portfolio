import SectionTitle from '@/components/ui/SectionTitle'
import { experiences } from '@/lib/constants/data'

const ExperienceSection = () => {
  return (
    <section className="bg-card-bg p-6 space-y-6 hover:-translate-y-1 duration-300 rounded-2xl overflow-hidden">
      <SectionTitle>Work Experience</SectionTitle>

      {/* Timeline */}
      <div>
        {experiences.map((exp, i) => (
          <div key={i} className="flex-1 min-w-0">
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
              {exp.company} - {exp.location ? ' ' + exp.location : null}
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
              <div className="my-6 border-t border-dashed border-primary/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
