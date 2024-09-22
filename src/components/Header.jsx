import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import myImage from "../assets/me.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaMapPin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center gap-6 border-b border-b-slate-200 py-12">
      <Avatar className="size-36">
        <AvatarImage src={myImage} />
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
      <div className="mt-3">
        <div className="flex flex-col gap-2">
          <h1 className="mb-1 text-4xl font-bold text-slate-900">Cedrickkk</h1>
          <div className="text-slate-700">
            Aspiring full-stack developer from
            <Badge variant="secondary">
              <FaMapPin />
              Pasig, Philippines
            </Badge>
            eager to learn and grow.
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button>Contact Me</Button>
          <Button variant="outline">Resume</Button>
        </div>
      </div>
    </header>
  );
}
