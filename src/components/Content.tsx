import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import InterestsSection from "@/components/sections/InterestsSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const Content = () => {
  return (
    <main className="max-w-275 mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Two-column layout: Main content (left) + Sidebar (right) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left column – Main content */}
        <div className="flex-1 min-w-0 space-y-10">
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </div>

        {/* Right column – Sidebar */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0 space-y-8">
          <SkillsSection />
          <LanguagesSection />
          <InterestsSection />
        </aside>
      </div>
    </main>
  );
};

export default Content;
