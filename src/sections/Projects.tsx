import SectionHeader from "@/components/SectionHeader";
import TagBadge from "@/components/TagBadge";

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <SectionHeader>Projects</SectionHeader>
      <div className="flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
        <div className="flex w-full flex-col space-y-3 md:w-1/2">
          <h6 className="font-medium leading-5">
            Pamantasan ng Lungsod ng Pasig Quality Management System
          </h6>
          <p className="text-sm leading-6">
            A Document Management System aimed to improved document efficiency
            designed for Pamantasan ng Lungsod ng Pasig with document and
            signature authentication using Convolutional Neural Network.
          </p>
          <div className="mt-5 flex w-full flex-wrap">
            <TagBadge>Typescript</TagBadge>
            <TagBadge>React</TagBadge>
            <TagBadge>Laravel</TagBadge>
            <TagBadge>Python</TagBadge>
            <TagBadge>Inertia</TagBadge>
          </div>
          <div className="mt-4 flex gap-3">
            <img src="github_link.svg" alt="" />
            <a href="http://152.42.235.172" target="__blank" rel="noreferrer">
              <img src="link.svg" alt="" />
            </a>
          </div>
        </div>
        <img
          src="project.png"
          alt="Pamantasan ng Lungsod Pasig Quality Management System"
          className="order-1 w-full md:order-2 md:w-1/2"
        />
      </div>
      <div className="mt-5 flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
        <img
          src="project.png"
          alt="Pamantasan ng Lungsod Pasig Quality Management System"
          className="order-1 w-full md:order-none md:w-1/2"
        />
        <div className="flex w-full flex-col space-y-3 md:w-1/2">
          <h6 className="font-medium leading-5">
            Pamantasan ng Lungsod ng Pasig Quality Management System
          </h6>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet autem libero! Earum, dolorem? Eaque itaque exercitationem
            impedit laborum libero. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt hic sed quasi nisi aut delectus facere
            suscipit quisquam earum quo.
          </p>
          <div className="mt-5 flex w-full flex-wrap">
            <TagBadge>Typescript</TagBadge>
            <TagBadge>React</TagBadge>
            <TagBadge>Laravel</TagBadge>
            <TagBadge>Python</TagBadge>
            <TagBadge>Inertia</TagBadge>
          </div>
          <div className="mt-4 flex gap-3">
            <img
              src="github_link.svg"
              alt="Pamantasan ng Lungsod Pasig Quality Management System"
            />
            <img
              src="link.svg"
              alt="Pamantasan ng Lungsod Pasig Quality Management System"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
        <div className="flex w-full flex-col space-y-3 md:w-1/2">
          <h6 className="font-medium leading-5">
            Pamantasan ng Lungsod ng Pasig Quality Management System
          </h6>
          <p className="text-sm leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorem, quis nisi deserunt aliquid vero explicabo beatae officiis
            fugit, quaerat ratione debitis laborum quae! Temporibus sit,
            voluptate cupiditate quisquam libero earum ipsum asperiores
            repellendus odit culpa est accusantium.
          </p>
          <div className="mt-5 flex w-full flex-wrap">
            <TagBadge>Typescript</TagBadge>
            <TagBadge>React</TagBadge>
            <TagBadge>Laravel</TagBadge>
            <TagBadge>Python</TagBadge>
            <TagBadge>Inertia</TagBadge>
          </div>
          <div className="mt-4 flex gap-3">
            <img
              src="github_link.svg"
              alt="Pamantasan ng Lungsod Pasig Quality Management System"
            />
            <img
              src="link.svg"
              alt="Pamantasan ng Lungsod Pasig Quality Management System"
            />
          </div>
        </div>
        <img
          src="project.png"
          alt="Pamantasan ng Lungsod Pasig Quality Management System"
          className="order-1 w-full md:order-2 md:w-1/2"
        />
      </div>
      <div className="flex justify-end">
        <h6 className="mt-9 flex items-center gap-1 font-medium">
          View Other Projects
          <span>
            <img src="arrow-right.svg" alt="" />
          </span>
        </h6>
      </div>
    </section>
  );
}
