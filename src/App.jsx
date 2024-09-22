import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechnologyStack from "./components/TechnologyStack";

export default function App() {
  return (
    <div className="container mx-auto mt-9 max-w-6xl">
      <Header />
      <main>
        <TechnologyStack />
        <About />
        <Projects />
      </main>
    </div>
  );
}
