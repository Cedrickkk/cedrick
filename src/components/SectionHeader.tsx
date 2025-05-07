type SectionHeaderProps = {
  children: string;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide lg:text-xl">
        {children}
      </h2>
      {/* <span className="block h-[.5px] w-full max-w-28 bg-primary"></span> */}
    </div>
  );
}
