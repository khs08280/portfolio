"use client";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Project from "@/components/Project";
import SideNav from "@/components/SideNav";
import Skill from "@/components/Skill";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="px-10 flex relative">
      <SideNav />
      <main className="ml-80 flex-1 px-10 bg-red-400 ">
        <Info />
        <Skill />
        <Project handleClick={handleClick} isClicked={isClicked} />
        <Certificate />
        <Footer />
      </main>
    </div>
  );
}
