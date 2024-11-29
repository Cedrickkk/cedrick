type HighlightProps = {
  children: string;
};

export default function Highlight({ children }: HighlightProps) {
  return (
    <span className="px-1 font-medium hover:text-secondary">{children}</span>
  );
}
