import { Button } from "./ui/button";

export default function NavigationBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex w-full justify-center bg-white/80 p-4 backdrop-blur-sm">
      <ul className="flex justify-between gap-2 py-0.5">
        <Button variant="link" className="uppercase">
          Home
        </Button>
        <Button variant="link" className="uppercase">
          About
        </Button>
        <Button variant="link" className="uppercase">
          Projects
        </Button>
      </ul>
    </nav>
  );
}
