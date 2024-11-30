type TagBadgeProps = {
  children: string;
};
export default function TagBadge({ children }: TagBadgeProps) {
  return (
    <p className="inline-flex items-center rounded-full bg-[#EDF4F9] px-2.5 py-1.5 text-xs font-semibold leading-5 text-[#1A4460] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
      {children}
    </p>
  );
}
