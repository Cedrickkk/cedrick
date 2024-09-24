import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex w-full justify-center bg-white/20 py-4 backdrop-blur-sm">
      <ul className="flex justify-between gap-2 py-0.5">
        <NavLink to="/">
          <Button variant="link" className="uppercase">
            Home
          </Button>
        </NavLink>
        <NavLink to="/about">
          <Button variant="link" className="uppercase">
            About
          </Button>
        </NavLink>
        <NavLink to="/projects">
          <Button variant="link" className="uppercase">
            Projects
          </Button>
        </NavLink>
      </ul>
    </nav>
  );
}
