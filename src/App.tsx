import Navigation from "@/components/Navigation";
import SectionHeader from "./components/SectionHeader";
import About from "./sections/About";
import Hero from "./sections/Hero";
import TagBadge from "./components/TagBadge";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-14 lg:px-24 lg:py-0">
        <About />
        <section id="projects" className="mb-24 scroll-mt-24">
          <SectionHeader>Projects</SectionHeader>
          <div className="flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
            {/* TODO: Refactor this */}
            <div className="flex w-full flex-col space-y-3 md:w-1/2">
              <h6 className="font-medium leading-5">
                PLP Quality Management System
              </h6>
              <p>
                A Document Management System aimed to improved document
                efficiency designed for Pamantasan ng Lungsod ng Pasig with
                document and signature authentication using Convolutional Neural
                Network.
              </p>
              <div className="mt-3 flex w-full flex-wrap gap-2">
                <TagBadge>Typescript</TagBadge>
                <TagBadge>React</TagBadge>
                <TagBadge>Laravel</TagBadge>
                <TagBadge>Python</TagBadge>
                <TagBadge>Inertia</TagBadge>
              </div>
              <div className="mt-4 flex gap-3">
                <img src="github_link.svg" alt="" />
                <img src="link.svg" alt="" />
              </div>
            </div>
            <img
              src="project.png"
              alt=""
              className="order-1 w-full md:order-2 md:w-1/2"
            />
          </div>
          <div className="mt-5 flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
            <img
              src="project.png"
              alt=""
              className="order-1 w-full md:order-none md:w-1/2"
            />
            <div className="flex w-full flex-col space-y-3 md:w-1/2">
              <h6 className="font-medium leading-5">
                PLP Quality Management System
              </h6>
              <p>
                A Document Management System aimed to improved document
                efficiency designed for Pamantasan ng Lungsod ng Pasig with
                document and signature authentication using Convolutional Neural
                Network.
              </p>
              <div className="mt-3 flex w-full flex-wrap gap-2">
                <TagBadge>Typescript</TagBadge>
                <TagBadge>React</TagBadge>
                <TagBadge>Laravel</TagBadge>
                <TagBadge>Python</TagBadge>
                <TagBadge>Inertia</TagBadge>
              </div>
              <div className="mt-4 flex gap-3">
                <img src="github_link.svg" alt="" />
                <img src="link.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col-reverse items-center justify-between gap-9 rounded-xl p-5 text-card-foreground shadow-md md:flex-row md:gap-12 md:p-0 md:shadow-none">
            <div className="flex w-full flex-col space-y-3 md:w-1/2">
              <h6 className="font-medium leading-5">
                PLP Quality Management System
              </h6>
              <p>
                A Document Management System aimed to improved document
                efficiency designed for Pamantasan ng Lungsod ng Pasig with
                document and signature authentication using Convolutional Neural
                Network.
              </p>
              <div className="mt-3 flex w-full flex-wrap gap-2">
                <TagBadge>Typescript</TagBadge>
                <TagBadge>React</TagBadge>
                <TagBadge>Laravel</TagBadge>
                <TagBadge>Python</TagBadge>
                <TagBadge>Inertia</TagBadge>
              </div>
              <div className="mt-4 flex gap-3">
                <img src="github_link.svg" alt="" />
                <img src="link.svg" alt="" />
              </div>
            </div>
            <img
              src="project.png"
              alt=""
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
        <section id="contact" className="mb-24 scroll-mt-24">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold uppercase">Get in Touch</h2>
            <p className="mt-5">
              I'm currently on the lookout for a chance to learn and grow
              through an internship or job. <br /> I’d love to hear from you!
            </p>
            <button className="mt-9 rounded-sm bg-secondary p-3 text-center text-lg font-semibold text-white">
              Let's Connect
            </button>
          </div>
        </section>
      </main>
      <footer className="container mx-auto mb-10 text-center text-xs md:mt-36">
        &copy; 2024 Designed and built by John Cedric Panti | All rights
        reserved.
      </footer>
    </>
  );
}
