import Image from "next/image";
import { Link } from "react-scroll";

export default function SideNav() {
  const list = ["INFO", "SKILL", "PROJECT", "CERTIFICATE"];
  return (
    <nav className="bg-slate-400 w-80 flex flex-col items-center py-10 fixed h-full top-0 overflow-hidden left-10">
      <Image
        src="/KakaoTalk_20200910_105747897.jpg"
        alt="profile"
        width={208}
        height={288}
        style={{ objectFit: "cover" }}
      />
      <ul className="text-lg text-center mt-5 space-y-3">
        {list.map((item: string, index: number) => (
          <li className="cursor-pointer" key={index}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
