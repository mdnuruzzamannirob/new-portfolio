import { interests } from "@/lib/constants/data";
import SectionTitle from "@/components/ui/SectionTitle";

const InterestsSection = () => {
  return (
    <section>
      <SectionTitle>Interests</SectionTitle>
      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        {interests.map((interest, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 sm:px-6 py-3 ${
              i !== interests.length - 1 ? "border-b border-card-border" : ""
            }`}
          >
            <span className="text-sm font-medium text-foreground">
              {interest.name}
            </span>
            <span className="text-xs sm:text-sm text-primary font-medium">
              {interest.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
