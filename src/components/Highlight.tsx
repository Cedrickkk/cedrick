type HighlightProps = {
  children: string;
};

export default function Highlight({ children }: HighlightProps) {
  return <span className="font-medium hover:text-secondary">{children}</span>;
}
