import { useEffect, useRef } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty("--x", `${clientX}px`);
      containerRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* <div
        ref={containerRef}
        className="pointer-events-none lg:fixed lg:inset-0 lg:z-30 lg:bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),_rgba(50,_130,_184,_.15),_transparent_80%)] lg:transition lg:duration-300"
        ></div> */}
      <div>
        {/* <Navigation /> */}
        <Hero />
        <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-14 lg:px-24 lg:py-0">
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
