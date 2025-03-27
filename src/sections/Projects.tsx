import SectionHeader from "@/components/SectionHeader";
import TagBadge from "@/components/TagBadge";

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader>Projects</SectionHeader>
      <div className="flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
        <img
          src="project.png"
          alt="Pamantasan ng Lungsod Pasig Quality Management System"
          className="order-1 w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:order-none md:w-1/2"
        />
        <div className="flex w-full flex-col md:w-1/2">
          <h6
            className="flex items-center gap-2 font-medium leading-5"
            onClick={() => window.open("https://qmsopticore.com/", "_blank")}
          >
            <span className="transition duration-300 ease-in-out hover:cursor-pointer hover:text-secondary">
              Pamantasan ng Lungsod ng Pasig Quality Management System
            </span>
          </h6>
          <p className="mt-3 text-sm leading-6 text-primary">
            A Document Management System aimed to improved document efficiency
            designed for Pamantasan ng Lungsod ng Pasig with document and
            signature authentication using Convolutional Neural Network.
          </p>
          <div className="mt-3 flex w-full flex-wrap">
            <TagBadge>Typescript</TagBadge>
            <TagBadge>React</TagBadge>
            <TagBadge>Laravel</TagBadge>
            <TagBadge>Python</TagBadge>
            <TagBadge>Inertia</TagBadge>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <p className="flex cursor-pointer items-center gap-2 text-xs font-medium uppercase text-primary">
              <span>Read More</span>
              <img src="arrow-right.svg" alt="" className="brightness-50" />
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <h6 className="group mt-9 flex cursor-pointer items-center gap-2 font-medium">
          View Other Projects
        </h6>
      </div>
    </section>
  );
}
