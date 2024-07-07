import { useMemo } from "react";

export default function MobileNav() {
  const list = useMemo(
    () => ["INFO", "SKILL", "PROJECT", "CERTIFICATE & GITHUB"],
    []
  );

  return (
    <nav className="sticky top-0 w-full bg-slate-200 rounded-md z-50 lg:hidden shadow-sm">
      <ul className="text-lg text-center w-full flex items-center py-2">
        {list.map((item: string, index: number) => {
          const itemId = item
            .toLowerCase()
            .replace(/ & /g, "-")
            .replace(/\s+/g, "-");

          return (
            <li key={index} className="w-full px-4">
              <a
                href={`#${itemId}`}
                className={`block py-1 px-2 sm:py-3 sm:px-4 rounded-lg transition-all hover:bg-slate-700 hover:text-white `}
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
