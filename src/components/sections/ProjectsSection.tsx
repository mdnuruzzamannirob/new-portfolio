'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import { projects } from '@/lib/data'
import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

const tagColors = [
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
]

const getTagColor = (index: number) => tagColors[index % tagColors.length]

const ProjectsSection = () => {
  return (
    <section className="bg-card-bg rounded-2xl p-6 space-y-6 hover:-translate-y-1 duration-300 overflow-hidden">
      <SectionTitle>Projects</SectionTitle>

      {/* Timeline */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <div key={i} className="flex-1 min-w-0">
            {/* Top row: Project name + type on left, year on right */}
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div className="flex flex-wrap items-center gap-1">
                <h3 className="font-semibold text-foreground leading-snug">
                  {project.name}
                </h3>
                {project.type === 'Team Project' && (
                  <span className="text-xs whitespace-nowrap text-muted">
                    ({project.type})
                  </span>
                )}
              </div>
              {project.year && (
                <span className="text-xs text-primary-foreground bg-primary px-2.5 py-1 rounded-full whitespace-nowrap">
                  {project.year}
                </span>
              )}
            </div>

            {/* Description points */}
            <ul className="space-y-1 mb-3 ml-2">
              {project.description.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="shrink-0 mt-2 size-1.25 rounded-full bg-muted" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${getTagColor(j)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-5 items-center text-sm">
              {project.urls.map((urlItem, j) => (
                <Link
                  key={j}
                  href={urlItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline hover:text-primary/80 transition-all"
                >
                  {urlItem.label}
                  <HiOutlineExternalLink className="inline-block ml-0.5 mb-0.5 text-xs text-primary" />
                </Link>
              ))}
            </div>

            {/* Divider between entries */}
            {i < projects.length - 1 && (
              <div className="my-6 border-t border-dashed border-primary/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
