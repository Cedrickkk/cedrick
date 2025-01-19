export default function Hero() {
  return (
    <header
      id="home"
      className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-28 lg:flex lg:min-h-screen lg:flex-col lg:items-center lg:justify-center lg:px-24 lg:py-0"
    >
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        John Cedric Panti
      </h1>
      <h2 className="mt-3 text-xl font-medium">
        Aspiring Full-Stack Web Developer
      </h2>
      <p className="mt-4">
        <i>Growing, learning, and evolving — one step at a time.</i>
      </p>
      <div className="ml-1 mt-8 flex gap-3">
        <img src="github_black.svg" alt="" />
        <img src="linkedin.svg" alt="" />
        <img src="mail.svg" alt="" />
      </div>
    </header>
  );
}
