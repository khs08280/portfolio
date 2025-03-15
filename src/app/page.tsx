"use client";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Project from "@/components/Project";
import SideNav from "@/components/SideNav";
import TripTalk from "@/components/TripTalk";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <SideNav />
      <main className="lg:ml-80 sm:px-10 ">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
                    
            <MobileNav />
            <TripTalk />
            {/* <Skill /> */}
            <Project handleClick={handleClick} isClicked={isClicked} />
          </motion.div>
        </AnimatePresence>
        <Footer />
        <div
          onClick={scrollToTop}
          className=" fixed bottom-5 right-10 bg-slate-100 cursor-pointer w-16 h-16 rounded-full border-2 border-solid border-green-500 flex flex-col justify-center items-center"
        >
          <FaArrowUp className="size-8 text-green-500" />
          <span className="text-sm text-green-500">UP</span>
        </div>
      </main>
    </div>
  );
}
