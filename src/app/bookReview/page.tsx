"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BookReview() {
  return (
    <motion.div
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col relative  w-screen h-screen bg-blue-200"
    >
      <header className="bg-black text-white w-full p-3 px-10 text-xl ">
        <span>README</span>
      </header>
      <div className=" p-10"></div>
    </motion.div>
  );
}
