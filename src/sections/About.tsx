import { BACKEND, FRONTEND, TOOLS } from "@/data";
import ContentBox from "@/components/ContentBox";
import ContentHeader from "@/components/ContentHeader";
import Highlight from "@/components/Highlight";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <>
      <section id="about" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
        <SectionHeader>About</SectionHeader>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ContentBox>
            <ContentHeader>A Closer Look</ContentHeader>
            <p>
              I’m an <Highlight>IT student</Highlight> from the Philippines with
              a passion for designing simple yet user-friendly interfaces. I
              enjoy learning new things and improving my skills to solve
              real-world problems.
            </p>
          </ContentBox>
          <ContentBox>
            <ContentHeader>Academic Journey</ContentHeader>
            <p>
              I’m currently in my third year at &nbsp;
              <Highlight>Pamantasan ng Lungsod ng Pasig,</Highlight> working
              toward my bachelor’s degree. At the same time, I’m learning&nbsp;
              <Highlight>React</Highlight> and&nbsp;
              <Highlight>Laravel</Highlight>&nbsp; to deepen my knowledge
              in&nbsp;
              <Highlight>full-stack web development.</Highlight>
            </p>
          </ContentBox>
          <ContentBox>
            <ContentHeader>Hobbies & Interests</ContentHeader>
            <p>
              I balance my technical pursuits with hobbies that allow me to
              unwind. Playing the <Highlight>guitar</Highlight> helps me relax,
              and on quieter days, I enjoy watching
              <Highlight>movies,</Highlight> which expose me to diverse and
              perspectives.
            </p>
          </ContentBox>
          <ContentBox>
            <ContentHeader>Future Plans</ContentHeader>
            <p>
              As I grow in my journey, I’m looking forward to expanding my skill
              set by diving into <Highlight>Next.js</Highlight> and
              <Highlight>.NET,</Highlight> I believe these frameworks will
              enhance my existing skills and unlock new opportunities.
            </p>
          </ContentBox>
        </div>
      </section>
      <section>
        <SectionHeader>Technology Stack</SectionHeader>
        <p>
          Here are some of the technologies and tools I’ve currently working
          with.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <h5 className="mb-3 text-lg font-medium">{FRONTEND.title}</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {FRONTEND.items.map((item) => {
                return (
                  <div
                    className="flex items-center gap-3 font-medium text-secondary"
                    key={item}
                  >
                    <img src={`${item.toLowerCase()}.svg`} alt="Javascript" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </li>
          <li>
            <h5 className="mb-3 text-lg font-medium">{BACKEND.title}</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {BACKEND.items.map((item) => {
                return (
                  <div
                    className="flex items-center gap-3 font-medium text-secondary"
                    key={item}
                  >
                    <img src={`${item.toLowerCase()}.svg`} alt="" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </li>
          <li>
            <h5 className="mb-3 text-lg font-medium">{TOOLS.title}</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {TOOLS.items.map((item) => {
                return (
                  <div
                    className="flex items-center gap-3 font-medium text-secondary"
                    key={item}
                  >
                    <img src={`${item.toLowerCase()}.svg`} alt="" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
