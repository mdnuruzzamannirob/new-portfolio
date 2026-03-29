const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="border-b border-primary/30">
    <h2 className="text-base sm:text-lg pb-3 font-bold text-foreground flex items-center gap-2">
      {children}
    </h2>
  </div>
)

export default SectionTitle
