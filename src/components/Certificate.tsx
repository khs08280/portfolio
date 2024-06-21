import React from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

interface IInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default function Certificate() {
  const infos = [
    {
      title: "이름",
      content: "구민욱",
      icon: <FaUser />,
    },
    {
      title: "생년월일",
      content: "99.12.20",
      icon: <FaBirthdayCake />,
    },
    {
      title: "주소지",
      content: "경상남도 창원시 의창구",
      icon: <FaHome />,
    },
    {
      title: "연락처",
      content: "010-4530-8516",
      icon: <FaPhone />,
    },
    {
      title: "이메일",
      content: "u6959@naver.com",
      icon: <FaEnvelope />,
    },
    {
      title: "학력",
      content: "부경대학교(컴퓨터 공학부)",
      icon: <FaGraduationCap />,
    },
  ];
  return (
    <section
      id="certificate"
      className="flex min-h-screen items-center justify-evenly relative bg-green-200"
    >
      <div className="flex-1 px-5 ">
        <h2 className="absolute top-20 text-3xl font-bold">Certificate</h2>
        <p className="font-semibold text-3xl mb-10 break-keep">
          안녕하세요 무언가를 배움에 있어 끊임없이 &quot;왜?&quot; 라는 질문을
          던지는 신입 프론트엔드 개발자 구민욱입니다.
        </p>
        <p className="text-2xl">
          • 생활을 편리하고 자유롭게 만들기 위해 개발을 공부해왔습니다.
        </p>
        <p className="text-2xl">
          • 한 분야의 진짜 전문가가 되는 것이 제 목표입니다.
        </p>
        <p className="text-2xl">
          • 새로운 기술을 배움에 있어 두려움이 없고 개발 문서를 읽고 프로젝트에
          적용할 수 있습니다.
        </p>
        <p className="text-2xl">
          • 다양한 분야를 배우고 싶어하고 호기심이 많은 개발자입니다.
        </p>
      </div>
      <div className="flex-1 px-5">
        <ul className="grid grid-cols-2 grid-rows-3 gap-5">
          {infos.map((info: IInfo, index: number) => (
            <li className="flex items-center space-y-3" key={index}>
              <div className="text-3xl mr-5">{info.icon}</div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold">{info.title}</span>
                <span className="text-2xl">{info.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
