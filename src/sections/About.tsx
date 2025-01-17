import Highlight from "@/components/Highlight";
import AboutSection from "@/components/AboutSection";
import SectionHeader from "@/components/SectionHeader";
import TechnologySection from "@/components/TechnologySection";
import { ABOUT, BACKEND, FRONTEND, TOOLS } from "@/data/index";

export default function About() {
  return (
    <>
      <section id="about" className="mb-24 scroll-mt-24">
        <SectionHeader>About</SectionHeader>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {ABOUT.map((section, idx) => {
            return (
              <AboutSection key={idx} header={section.header}>
                {section.content.map((item, idx) =>
                  typeof item === "string" ? (
                    item
                  ) : (
                    <Highlight key={idx}>{item.highlight}</Highlight>
                  ),
                )}
              </AboutSection>
            );
          })}
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
