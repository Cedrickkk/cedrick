type ContentBoxProps = {
  children: React.ReactNode;
};

export default function ContentBox({ children }: ContentBoxProps) {
  return <div className="flex flex-col gap-3">{children}</div>;
}
