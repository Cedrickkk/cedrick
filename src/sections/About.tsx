import { BACKEND, FRONTEND, TOOLS } from "@/data";
import ContentBox from "@/components/ContentBox";
import ContentHeader from "@/components/ContentHeader";
import Highlight from "@/components/Highlight";
import SectionHeader from "@/components/SectionHeader";

type TechnologySectionProps = {
  title: string;
  items: string[];
};

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  items,
}) => (
  <li>
    <h5 className="mb-3 text-lg font-medium">{title}</h5>
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {items.map((item) => (
        <div
          className="flex items-center gap-3 font-medium text-secondary"
          key={item}
        >
          <img src={`${item.toLowerCase()}.svg`} alt={item} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  </li>
);

type AboutSectionProps = {
  header: string;
  children: React.ReactNode;
};

const AboutSection: React.FC<AboutSectionProps> = ({ header, children }) => (
  <ContentBox>
    <ContentHeader>{header}</ContentHeader>
    <p>{children}</p>
  </ContentBox>
);

export default function About() {
  return (
    <>
      <section id="about" className="mb-24 scroll-mt-24">
        <SectionHeader>About</SectionHeader>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AboutSection header="A Closer Look">
            I’m an <Highlight>IT student</Highlight> from the Philippines
            dedicated to web development and designing simple yet user-friendly
            interfaces. I enjoy learning new things and improving my skills to
            solve real-world problems.
          </AboutSection>
          <AboutSection header="Academic Journey">
            I’m currently in my third year at{" "}
            <Highlight>Pamantasan ng Lungsod ng Pasig,</Highlight> working
            toward my bachelor’s degree. At the same time, I’m learning{" "}
            <Highlight>React</Highlight> and <Highlight>Laravel</Highlight> to
            deepen my knowledge in{" "}
            <Highlight>full-stack web development.</Highlight>
          </AboutSection>
          <AboutSection header="Hobbies & Interests">
            I balance my technical pursuits with hobbies that allow me to
            unwind. Playing the <Highlight>guitar</Highlight> helps me relax,
            and on quieter days, I enjoy watching <Highlight>movies,</Highlight>{" "}
            which expose me to diverse and perspectives.
          </AboutSection>
          <AboutSection header="Future Plans">
            As I grow in my journey, I’m looking forward to expanding my skill
            set by diving into <Highlight>Next.js</Highlight> and{" "}
            <Highlight>.NET,</Highlight> I believe these frameworks will enhance
            my existing skills and unlock new opportunities.
          </AboutSection>
        </div>
      </section>
      <section className="mb-24">
        <SectionHeader>Technology Stack</SectionHeader>
        <p>
          Here are some of the technologies and tools I’ve currently working
          with.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TechnologySection title={FRONTEND.title} items={FRONTEND.items} />
          <TechnologySection title={BACKEND.title} items={BACKEND.items} />
          <TechnologySection title={TOOLS.title} items={TOOLS.items} />
        </ul>
      </section>
    </>
  );
}
