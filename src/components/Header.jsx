import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import myImage from "/profile.jpg";
import resume from "/resume.pdf";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaMapPin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-14">
      <Avatar className="size-64 drop-shadow-2xl">
        <AvatarImage src={myImage} />
        <AvatarFallback>CP</AvatarFallback>
      </Avatar>
      <div className="mt-3 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="mb-1 text-5xl font-bold text-slate-900">Cedrickkk</h1>
          <div className="text-slate-700">
            Aspiring full-stack developer from
            <Badge variant="secondary" className="mx-1.5 text-sm">
              <FaMapPin />
              Pasig, Philippines
            </Badge>
            eager to learn and grow.
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button>
            <a href={resume} target="_blank" rel="noreferrer" title="Resume">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
