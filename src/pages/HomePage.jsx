import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 flex h-screen flex-col items-center justify-around"
      >
        <Header />
        <Footer />
      </motion.div>
    </>
  );
}
