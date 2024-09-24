import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import TechnologyStack from "@/components/TechnologyStack";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <NavigationBar />
      <motion.section
        className="mt-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <TechnologyStack />
        <div className="m-3 grid grid-cols-2 gap-20 px-3 py-12">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-slate-800">About me</h3>
            <p className="text-slate-700">
              IT student based in the Philippines, currently in my 3rd year. My
              goal is to become a full-stack developer and keep growing my
              skills in this fast-paced field. I love learning new technologies
              and using them to transform my ideas into real, functional
              websites.
            </p>
          </div>
          <div>
            <h5 className="mb-5 font-bold">Education</h5>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-semibold">
                <div className="flex justify-between">
                  <p>Pamantasan ng Lungsod ng Pasig</p>
                  <small className="block text-slate-400">2023 - Present</small>
                </div>
                <p className="text-slate-700">
                  <i>Bachelor of Science in Information Technology</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}
