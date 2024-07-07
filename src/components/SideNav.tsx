"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function SideNav() {
  const list = useMemo(
    () => ["INFO", "SKILL", "PROJECT", "CERTIFICATE & GITHUB"],
    []
  );

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-10% 0px -10% 0px" }
    );

    list.forEach((item) => {
      const sectionId = item
        .toLowerCase()
        .replace(/ & /g, "-")
        .replace(/\s+/g, "-");
      const section = document.getElementById(sectionId);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      list.forEach((item) => {
        const sectionId = item
          .toLowerCase()
          .replace(/ & /g, "-")
          .replace(/\s+/g, "-");
        const section = document.getElementById(sectionId);
        if (section) sectionObserver.unobserve(section);
      });
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
          const itemId = item
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s+/g, "-");
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
    </nav>
  );
}
