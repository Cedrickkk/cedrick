type HighlightProps = {
  children: string;
};

export default function Highlight({ children }: HighlightProps) {
  return <span className="font-semibold hover:text-secondary">{children}</span>;
}
