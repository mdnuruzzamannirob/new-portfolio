import ThemeToggle from '@/components/ThemeToggle'
import { personalInfo } from '@/lib/data'

const Topbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-card-border bg-card-bg/80 backdrop-blur-md">
      <div className="max-w-275 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <span className="font-semibold text-base sm:text-lg text-foreground">
          {personalInfo.name}
        </span>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Topbar
