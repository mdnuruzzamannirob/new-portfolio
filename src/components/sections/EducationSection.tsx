import SectionTitle from '@/components/ui/SectionTitle'
import { education } from '@/lib/data'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

const EducationSection = () => {
  return (
    <section className="bg-card-bg hover:-translate-y-1 duration-300 p-6 space-y-6 rounded-2xl overflow-hidden">
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`pb-6 ${
              i < education.length - 1
                ? 'border-b border-dashed border-primary/30'
                : ''
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <Link
                href={edu.link}
                target="_blank"
                className="hover:underline hover:text-foreground/80 transition-all font-semibold text-foreground"
              >
                {edu.degree}{' '}
                <HiOutlineExternalLink className="inline-block ml-1 mb-1 text-sm text-primary" />
              </Link>
              <span className="text-xs text-primary-foreground bg-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-primary mb-2.5">
              {edu.institution}
              {edu.location ? ' - ' + edu.location : null}
            </p>
            <p className="text-sm text-muted">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
