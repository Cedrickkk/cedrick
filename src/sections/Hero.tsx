import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import SVGIcon from "@/components/SVGIcon";

export default function Hero() {
  return (
    <header
      id="home"
      className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-28 lg:flex lg:min-h-screen lg:flex-col lg:items-center lg:justify-center lg:px-24 lg:py-0"
    >
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        John Cedric Panti
      </h1>
      <h2 className="mt-3 text-xl font-medium">Full-Stack Web Developer</h2>
      <p className="mt-4">
        <i>Growing, learning, and evolving — one step at a time.</i>
      </p>
      <div className="mt-8 flex gap-3">
        <SVGIcon href="https://github.com/Cedrickkk">
          <GitHub />
        </SVGIcon>
        <SVGIcon href="https://www.linkedin.com/in/cedric-panti">
          <LinkedIn />
        </SVGIcon>
        <SVGIcon href="mailto:inhog.cedrick@gmail.com">
          <Mail />
        </SVGIcon>
      </div>
    </header>
  );
}
