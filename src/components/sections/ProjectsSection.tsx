import { projects } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const tagColors = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  "bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300",
];

const getTagColor = (index: number) => tagColors[index % tagColors.length];

const ProjectsSection = () => {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-card-bg border border-card-border rounded-xl p-4 sm:p-6 hover:border-primary/40 transition-colors"
          >
            <h3 className="text-base font-semibold text-foreground mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-muted mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${getTagColor(j)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
