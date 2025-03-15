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
          Certificate
        </motion.h2>
        <div className="flex md:flex-row justify-center">
          <motion.div
            className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8">
              <div className="relative flex justify-center w-full h-80 mb-6">
                <Image
                  src={
                    process.env.STATE === "production"
                      ? "/portfolio/certificate.png"
                      : "/certificate.png"
                  }
                  alt="Information Processing Engineer Certificate"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <ul className="flex flex-col">
                  <li className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-lg mr-5">정보처리기사</span>
                      <span>2023.09</span>
                    </div>
                    <span>한국산업인력공단</span>
                  </li>
                  <li className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-lg mr-5">SQLD</span>
                      <span>2024.12</span>
                    </div>
                    <span>한국데이터베이스진흥원</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
