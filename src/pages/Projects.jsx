import { useEffect, useState } from "react";
import Project from "../components/Project";
import { Button } from "../components/ui/button";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  usePageTitle("Projects");

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8000/projects");
      const projects = await response.json();
      setProjects(projects);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <NavigationBar />
      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className="m-3 px-3 py-12">
          <div className="flex justify-between">
            <h3 className="mb-2 text-2xl font-bold text-slate-800">Projects</h3>
            <Button variant="link" className="flex gap-1">
              <a
                href="https://github.com/Cedrickkk"
                target="_blank"
                rel="noreferrer"
              >
                @repositories
              </a>
            </Button>
          </div>

          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti!
          </p>

          {isLoading && <div>Loading...</div>}

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
      </motion.section>
      <Footer />
    </>
  );
}
