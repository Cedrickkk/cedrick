import ContentBox from "./ContentBox";
import ContentHeader from "./ContentHeader";

type AboutSectionProps = {
  header: string;
  children: React.ReactNode;
};

export default function AboutSection({ header, children }: AboutSectionProps) {
  return (
    <ContentBox>
      <ContentHeader>{header}</ContentHeader>
      <p>{children}</p>
    </ContentBox>
  );
}
