import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { usePageTitle } from "@/hooks/usePageTitle";
import { motion } from "framer-motion";

export default function HomePage() {
  usePageTitle("Home");
  return (
    <>
      <NavigationBar />
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <div className="mt-32">
            <Header />
          </div>
        </motion.div>
        <div className="fixed bottom-0 left-0 right-0 p-7">
          <Footer />
        </div>
      </div>
    </>
  );
}
