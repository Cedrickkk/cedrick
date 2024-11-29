type ContentHeaderProps = {
  children: string;
};
export default function ContentHeader({ children }: ContentHeaderProps) {
  return <h5 className="text-lg font-medium text-secondary">{children}</h5>;
}
