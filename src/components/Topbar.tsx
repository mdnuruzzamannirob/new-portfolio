import ThemeToggle from "@/components/ThemeToggle";

const Topbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b border-card-border bg-background/80 backdrop-blur-sm">
      <span className="font-semibold text-lg text-primary">Portfolio</span>
      <ThemeToggle />
    </nav>
  );
};

export default Topbar;
