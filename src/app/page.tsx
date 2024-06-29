"use client";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Project from "@/components/Project";
import SideNav from "@/components/SideNav";
import Skill from "@/components/Skill";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <SideNav />
      <main className="ml-80 px-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Info />
            <Skill />
            <Project handleClick={handleClick} isClicked={isClicked} />
            <Certificate />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}
