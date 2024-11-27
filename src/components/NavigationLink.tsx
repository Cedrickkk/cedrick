import { NavLink } from "react-router-dom";

type NavigationLinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function NavigationLink({ children, to }: NavigationLinkProps) {
  return (
    <NavLink
      className="p-[0.625rem] text-base font-bold uppercase hover:text-[#1B2CC1]"
      to={to}
      style={({ isActive }) => {
        return {
          color: isActive ? "#1B2CC1" : "#091540",
        };
      }}
    >
      {children}
    </NavLink>
  );
}
