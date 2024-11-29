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
    <nav className="fixed left-0 top-0 z-40 hidden min-h-16 w-full justify-center bg-white/30 backdrop-blur-sm supports-[backdrop-filter]:bg-secondary/80 md:flex">
      <ul
        className="flex items-center justify-between gap-4 text-xs font-medium uppercase"
        onClick={handleSmoothScroll}
      >
        <NavLink name="About" />
        <NavLink name="Projects" />
        <NavLink name="Contact" />
        <NavLink name="Resume" />
      </ul>
    </nav>
  );
}
