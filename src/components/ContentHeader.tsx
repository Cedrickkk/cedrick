type ContentHeaderProps = {
  children: string;
};
export default function ContentHeader({ children }: ContentHeaderProps) {
  return (
    <h3 className="text-base font-medium text-secondary md:text-lg">
      {children}
    </h3>
  );
}
