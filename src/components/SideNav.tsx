"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SideNav() {
  const list = ["INFO", "SKILL", "PROJECT", "CERTIFICATE & GITHUB"];
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // 현재 해시 값을 상태로 설정
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <nav className="bg-slate-400 w-80 flex flex-col items-center py-10 fixed h-full top-0 overflow-hidden left-10">
      <Image
        src="/KakaoTalk_20200910_105747897.jpg"
        alt="profile"
        width={208}
        height={288}
        style={{ objectFit: "cover" }}
      />
      <ul className="text-lg text-center mt-5 space-y-3 ">
        {list.map((item: string, index: number) => {
          const itemHash = `#${item
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s+/g, "-")}`;
          const isActive = currentHash === itemHash;

          return (
            <a key={index} href={itemHash}>
              <li
                className={`cursor-pointer hover:bg-green-300 transition-all w-full p-3 ${
                  isActive ? "bg-green-300" : ""
                }`}
              >
                {item}
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
