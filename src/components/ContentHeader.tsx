type ContentHeaderProps = {
  children: string;
};
export default function ContentHeader({ children }: ContentHeaderProps) {
  return <h3 className="text-lg font-medium text-secondary">{children}</h3>;
}
