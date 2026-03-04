const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary inline-block">
    {children}
  </h2>
);

export default SectionTitle;
