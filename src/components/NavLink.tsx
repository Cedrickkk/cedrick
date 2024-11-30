type NavLinkProps = {
  name: string;
};

export default function NavLink({ name }: NavLinkProps) {
  return (
    <li>
      <a
        href={`#${name.toLowerCase()}`}
        className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 py-2 text-xs font-medium text-primary underline-offset-4 transition-colors hover:text-secondary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:text-secondary active:underline"
      >
        {name}
      </a>
    </li>
  );
}
