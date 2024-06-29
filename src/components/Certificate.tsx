import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Certificate() {
  return (
    <section
      id="certificate-github"
      className="py-20 bg-gradient-to-b min-h-screen bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Certificate & Github
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          <motion.div
            className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaCertificate className="text-4xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  정보처리기사
                </h3>
              </div>
              <div className="relative w-full h-80 mb-6">
                <Image
                  src="/certificate.png"
                  alt="Information Processing Engineer Certificate"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-600">
                • 이론적인 실무 지식을 얻기 위해 취득했습니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FaGithub className="text-4xl text-gray-800 mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Github Profile
                </h3>
              </div>
              <Link
                href="https://github.com/khs08280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300 mb-6 inline-block"
              >
                github.com/khs08280
              </Link>
              <Image
                src="/깃허브프로필.PNG"
                alt="깃허브 프로필"
                width={300}
                height={100}
                objectFit="contain"
                className="rounded-lg"
              />
              <ul className="space-y-3 text-lg text-gray-600">
                <li>• 프로젝트의 소스 코드 저장소입니다.</li>
                <li>
                  • 팀 프로젝트부터 혼자 공부하기 위해 진행한 프로젝트의 코드
                </li>
                <li>• 프로필에는 간단한 자기소개를 작성했습니다.</li>
                <li>• 최근 프로젝트부터 꾸준히 커밋 중입니다.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
