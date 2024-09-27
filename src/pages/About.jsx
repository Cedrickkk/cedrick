import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Services from "@/components/Services";
import TechnologyStack from "@/components/TechnologyStack";
import { usePageTitle } from "@/hooks/usePageTitle";
import { motion } from "framer-motion";

export default function About() {
  usePageTitle("About");

  return (
    <>
      <NavigationBar />
      <motion.section
        className="mt-12 flex flex-col items-center justify-center gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <div className="mt-12">
          <TechnologyStack />
        </div>
        <div className="grid grid-cols-2 gap-20 px-3">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-slate-800">About me</h3>
            <p className="text-slate-700">
              IT student based in the Philippines, currently in my 3rd year. My
              goal is to become a full-stack developer and keep growing my
              skills in this fast-paced field. I love learning new technologies,
              where I can learn and apply new knowledge.
            </p>
          </div>
          <div>
            <h5 className="mb-2 font-bold">Education</h5>
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
      <div className="mb-12">
        <Services />
      </div>
      <Footer />
    </>
  );
}
