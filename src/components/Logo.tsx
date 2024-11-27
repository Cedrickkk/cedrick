import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <p className="flex items-center">
        <span className="text-2xl font-bold text-[#1B2CC1]">&#123;</span>
        <span className="inline-block px-3 text-2xl font-bold text-[#1B2CC1]">
          ;
        </span>
        <span className="text-2xl font-bold text-[#1B2CC1]">&#125;</span>
      </p>
    </Link>
  );
}
