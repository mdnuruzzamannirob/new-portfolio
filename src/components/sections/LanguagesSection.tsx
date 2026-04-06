import SectionTitle from '@/components/ui/SectionTitle'
import { languages } from '@/lib/data'
import { Level } from '@/types/types'

const levelToPercent: Record<Level, number> = {
  Native: 100,
  Fluent: 85,
  Advanced: 70,
  Intermediate: 55,
  Basic: 40,
}

const LanguagesSection = () => {
  return (
    <section className="bg-card-bg p-6 space-y-6 hover:-translate-y-1 duration-300 rounded-2xl overflow-hidden">
      <SectionTitle>Languages</SectionTitle>

      <div className="space-y-4">
        {languages.map((lang, i) => {
          const pct = levelToPercent[lang.level] ?? 50
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
          )
        })}
      </div>
    </section>
  )
}

export default LanguagesSection
