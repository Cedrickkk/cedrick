import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechnologyStack from "./components/TechnologyStack";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:8000/projects");
      const projects = await response.json();
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto my-9 max-w-6xl">
      <NavigationBar />
      <Header />
      <main>
        <TechnologyStack />
        <About />
        <Projects projects={projects} />
        <Services />
      </main>
      <footer>
        {/* TODO: Create a contact form */}
        <Contact />
        {/* TODO: Create a footer  */}
      </footer>
    </div>
  );
}
