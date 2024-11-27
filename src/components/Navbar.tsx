import Logo from "./Logo";
import NavigationLink from "./NavigationLink";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-7">
      <Logo />
      <nav className="flex justify-between gap-4">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/works">Works</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
      </nav>
    </div>
  );
}
