import React, { useMemo } from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

interface IInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default function Info() {
  const infos = [
    { title: "이름", content: "구민욱", icon: <FaUser /> },
    { title: "생년월일", content: "99.12.20", icon: <FaBirthdayCake /> },
    { title: "주소지", content: "경상남도 창원시 의창구", icon: <FaHome /> },
    { title: "연락처", content: "010-4530-8516", icon: <FaPhone /> },
    { title: "이메일", content: "u6959@naver.com", icon: <FaEnvelope /> },
    {
      title: "학력",
      content: "부경대학교(컴퓨터 공학부)",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section
      id="info"
      className="min-h-screen py-20 bg-gray-50 flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-16 text-center text-gray-700">
              안녕하세요, 신입 프론트엔드 개발자 구민욱입니다.
            </h3>
            <div className="container mx-auto flex items-center justify-center px-4 lg:hidden">
              <div className="rounded-full overflow-hidden border-4 border-white shadow-md mb-8">
                <Image
                  src={
                    process.env.STATE === "production"
                      ? "/portfolio/취업사진.JPG"
                      : "/취업사진.JPG"
                  }
                  alt="profile"
                  width={200}
                  height={250}
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-2xl mb-6 text-gray-600 leading-relaxed">
              무언가를 배움에 있어 끊임없이 &quot;왜?&quot;라는 질문을 던지며,
              생활을 편리하고 자유롭게 만들기 위해 개발을 공부해왔습니다.
            </p>
            <ul className="space-y-4 text-xl text-gray-600">
              <li>• 한 분야의 진짜 전문가가 되는 것이 제 목표입니다.</li>
              <li>
                • 새로운 기술을 배움에 있어 두려움이 없고 개발 문서를 읽고
                프로젝트에 적용할 수 있습니다.
              </li>
              <li>
                • 다양한 분야를 배우고 싶어하고 호기심이 많은 개발자입니다.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infos.map((info: IInfo, index: number) => (
                  <li key={index} className="flex items-center space-x-4">
                    <div className="text-2xl text-blue-600">{info.icon}</div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-500">
                        {info.title}
                      </h4>
                      <p className="text-xl text-gray-700">{info.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
