import Navigation from "./components/Navigation";
import About from "./sections/About";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-8 md:px-12 md:py-14 lg:px-24 lg:py-0">
        <About />
      </main>
    </>
  );
}
