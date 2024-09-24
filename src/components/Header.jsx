import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import myImage from "../assets/me.png";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaMapPin } from "react-icons/fa";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <NavigationBar />
      <motion.header
        className="flex h-screen items-center justify-center gap-6 border-b border-b-slate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Avatar className="size-64">
          <AvatarImage src={myImage} />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <div className="mt-3 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="mb-1 text-5xl font-bold text-slate-900">
              Cedrickkk
            </h1>
            <div className="text-slate-700">
              Aspiring full-stack developer from
              <Badge variant="secondary" className="mx-1.5 text-[14px]">
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
      </motion.header>
    </>
  );
}
