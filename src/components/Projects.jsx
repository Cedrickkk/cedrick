import Project from "./Project";
import { Button } from "./ui/button";

export default function Projects({ projects }) {
  return (
    <section className="m-3 border-b border-b-slate-200 px-3 py-12">
      <div className="flex justify-between">
        <h3 className="mb-2 text-2xl font-bold text-slate-800">Projects</h3>
        <Button variant="link" className="flex gap-1">
          <a href="https://github.com/Cedrickkk">@repositories</a>
        </Button>
      </div>

      <p className="text-slate-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti!
      </p>

      <div className="mt-6 grid grid-cols-2 gap-8">
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
    </section>
  );
}
