"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export default function SideNav() {
  const list = useMemo(() => ["TRIPTALK", "OTHER PROJECTS"], []);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = list.map(item => 
        document.getElementById(item.toLowerCase().replace(/ /g, "-"))
      );
      
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list]);

  return (
    <nav className="bg-gradient-to-b from-slate-800 to-slate-600 w-80 hidden lg:flex flex-col items-center py-10 fixed h-full top-0 left-0 overflow-hidden shadow-lg">
      <div className="rounded-full overflow-hidden border-4 border-white shadow-md mb-8">
        <Image
          src={
            process.env.STATE === "production"
              ? "/portfolio/취업사진.JPG"
              : "/취업사진.JPG"
          }
          alt="profile"
          width={200}
          height={270}
          className="object-cover"
        />
      </div>
      <ul className="text-lg text-center w-full space-y-2">
        {list.map((item: string, index: number) => {
          const itemId = item.toLowerCase().replace(/ /g, "-");
          const isActive = activeSection === itemId;

          return (
            <li key={index} className="w-full px-4">
              <a
                href={`#${itemId}`}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  isActive
                    ? "bg-green-500 text-white shadow-md"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href="https://linen-ricotta-970.notion.site/bde65fd5104d4b00bb4d8757fdb106ec"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white cursor-pointer hover:text-blue-300 transition-colors mt-4"
      >
        이력서 파일을 찾고 계시다면?
      </a>
      <a
        href="https://github.com/khs08280"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        <FaGithub className="text-4xl text-white cursor-pointer hover:text-blue-300 transition-colors" />
      </a>
    </nav>
  );
}
