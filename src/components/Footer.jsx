import { IconContext } from "react-icons";
import { Button } from "./ui/button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-4 px-3 py-4">
        <IconContext.Provider value={{ size: "1.4rem" }}>
          <div>
            <Button variant="link">
              <FaFacebook />
            </Button>
            <Button variant="link">
              <FaGithub />
            </Button>
            <Button variant="link">
              <FaLinkedin />
            </Button>
          </div>
          <small>
            &copy; 2024 <a href="">John Cedric Panti.</a> All rights reserved.
          </small>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
