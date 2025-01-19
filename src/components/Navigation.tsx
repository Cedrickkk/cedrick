import NavLink from "./NavLink";

export default function Navigation() {
  const handleSmoothScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const id = target.getAttribute("href")?.replace("#", "");
    if (id) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-40 min-h-16 w-full justify-center bg-white/30 backdrop-blur-sm supports-[backdrop-filter]:bg-secondary/80 md:flex md:items-center">
      <ul
        className="flex items-center justify-between gap-4 text-xs font-medium uppercase"
        onClick={handleSmoothScroll}
      >
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Projects" />
        <NavLink name="Contact" />
      </ul>
      {/* <button className="ml-4 inline-flex h-9 items-center rounded-sm border border-secondary px-2 py-4 text-xs uppercase text-secondary">
        Resume
      </button> */}
    </nav>
  );
}
