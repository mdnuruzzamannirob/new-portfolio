import { personalInfo } from '@/lib/data'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaLocationDot, FaMedium } from 'react-icons/fa6'
import { MdEmail, MdPhone } from 'react-icons/md'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
  const { name, title, bio, contact } = personalInfo

  return (
    <header className="">
      <div
        className="max-w-275 space-y-6 mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8"
        suppressHydrationWarning
      >
        <ThemeToggle />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left – Identity */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {name}
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mt-1">
              {title}
            </p>
            <p className="text-muted mt-3 max-w-xl text-sm leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Right – Contact */}
          <div className="flex flex-col gap-2 text-sm text-muted  md:items-end shrink-0">
            <ContactRow
              icon={<MdEmail />}
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactRow
              icon={<MdPhone />}
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />
            <ContactRow icon={<FaLocationDot />} value={contact.location} />
            <ContactRow
              icon={<FaLinkedin />}
              value={contact.linkedin}
              href={`https://${contact.linkedin}`}
            />
            <ContactRow
              icon={<FaGithub />}
              value={contact.github}
              href={`https://${contact.github}`}
            />
            <ContactRow
              icon={<FaMedium />}
              value={contact.medium}
              href={`https://${contact.medium}`}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

const ContactRow = ({
  icon: Icon,
  value,
  href,
}: {
  icon: React.ReactNode
  value: string
  href?: string
}) => {
  const content = (
    <span className="flex items-center gap-2 group">
      <span className="text-primary">{Icon}</span>
      <span
        className={href ? 'group-hover:text-primary transition-colors' : ''}
      >
        {value}
      </span>
    </span>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    )
  }

  return content
}

export default Header
