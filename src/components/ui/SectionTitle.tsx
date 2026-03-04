const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="px-5 sm:px-6 py-4 border-b border-card-border">
    <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
      <span className="w-1 h-5 rounded-full bg-primary inline-block shrink-0" />
      {children}
    </h2>
  </div>
);

export default SectionTitle;
