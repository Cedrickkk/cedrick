import { IconContext } from "react-icons";
import { Button } from "./ui/button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-4 px-3 py-4">
        <IconContext.Provider value={{ size: "1.4rem" }}>
          <div>
            <Button variant="link">
              <a href="https://www.facebook.com/itnapz15" target="_blank">
                <FaFacebook />
              </a>
            </Button>
            <Button variant="link">
              <a href="https://github.com/Cedrickkk" target="_blank">
                <FaGithub />
              </a>
            </Button>

            <Button variant="link">
              <a
                href="https://www.linkedin.com/in/cedric-panti/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </Button>
            <Button variant="link">
              <a href="mailto:inhog.cedrick@gmail.com" target="_blank">
                <MdEmail />
              </a>
            </Button>
          </div>
          <small>
            &copy; 2024
            <a
              href="https://www.linkedin.com/in/cedric-panti/"
              target="_blank"
              rel="noreferrer"
              className="mx-2 font-semibold hover:underline"
            >
              John Cedric Panti.
            </a>
            All rights reserved.
          </small>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
