import { useEffect, useState } from "react";
import Project from "../components/Project";
import { Button } from "../components/ui/button";
import NavigationBar from "@/components/NavigationBar";

export default function Projects() {
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
    <>
      <NavigationBar />
      <section className="mt-16">
        <div className="m-3 px-3 py-12">
          <div className="flex justify-between">
            <h3 className="mb-2 text-2xl font-bold text-slate-800">Projects</h3>
            <Button variant="link" className="flex gap-1">
              <a href="https://github.com/Cedrickkk">@repositories</a>
            </Button>
          </div>

          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti!
          </p>

          <div className="my-4 grid grid-cols-2 gap-8">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
