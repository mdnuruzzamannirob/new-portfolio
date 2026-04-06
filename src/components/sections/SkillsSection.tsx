import SectionTitle from '@/components/ui/SectionTitle'
import { skills } from '@/lib/data'

const SkillsSection = () => {
  return (
    <section className="bg-card-bg p-6 space-y-6 hover:-translate-y-1 duration-300 rounded-2xl overflow-hidden">
      <SectionTitle>Skills</SectionTitle>

      <div className="space-y-5">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
