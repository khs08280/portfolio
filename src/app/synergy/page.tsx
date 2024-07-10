export default function Synergy() {
  const list = ["INFO", "SKILL", "PROJECT", "CERTIFICATE"];
  return (
    <footer
      id="info"
      className="flex flex-col items-center justify-center relative px-5 sm:px-0 py-20 bg-gray-200"
    >
      <ul className="text-lg text-center mt-5 space-x-3 flex text-black text-opacity-40">
        {list.map((item: string, index: number) => (
          <li className="cursor-pointer" key={index}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <span className="text-black text-opacity-40  mt-10">
        &copy; Gu Minuk. All rights reserved. | 이 페이지는 포트폴리오 용도로
        제작되었습니다.
      </span>
    </footer>
  );
}
