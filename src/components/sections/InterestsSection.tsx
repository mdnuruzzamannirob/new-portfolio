import SectionTitle from '@/components/ui/SectionTitle'
import { interests } from '@/lib/data'

const levelToPercent: Record<string, number> = {
  Passionate: 95,
  Enthusiast: 80,
  Active: 70,
  Engaged: 65,
  Casual: 45,
}

const InterestsSection = () => {
  return (
    <section className="bg-card-bg p-6 space-y-6 hover:-translate-y-1 duration-300 rounded-2xl overflow-hidden">
      <SectionTitle>Interests</SectionTitle>

      <div className="space-y-4">
        {interests.map((interest, i) => {
          const pct = levelToPercent[interest.level] ?? 50
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-foreground">
                  {interest.name}
                </span>
                <span className="text-xs font-medium text-primary">
                  {interest.level}
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

export default InterestsSection
