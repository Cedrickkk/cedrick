import {
  FaJs,
  FaLaravel,
  FaNode,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";

export default function TechnologyStack() {
  return (
    <section className="flex flex-col items-center border-b border-b-slate-200 px-3 py-12">
      <h3 className="text-2xl font-bold text-slate-800">Technology Stack</h3>
      <p className="text-slate-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        <FaJs size="4em" />
        <FaReact size="4em" />
        <FaPhp size="4em" />
        <FaLaravel size="4em" />
        <FaNode size="4em" />
        <FaNodeJs size="4em" />
      </div>
    </section>
  );
}
