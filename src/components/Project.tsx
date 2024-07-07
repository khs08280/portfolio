"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowRoundForward,
} from "react-icons/io";

interface ProjectProps {
  handleClick: () => void;
  isClicked: boolean;
}

const images = [
  process.env.STATE === "production" ? "/portfolio/캡처.PNG" : "/캡처.PNG",
  process.env.STATE === "production" ? "/portfolio/모달.PNG" : "/모달.PNG",
  process.env.STATE === "production"
    ? "/portfolio/커뮤니티.PNG"
    : "/커뮤니티.PNG",
  process.env.STATE === "production" ? "/portfolio/한줄.PNG" : "/한줄.PNG",
];
const secondImages = [
  process.env.STATE === "production" ? "/portfolio/홈.PNG" : "/홈.PNG",
  process.env.STATE === "production" ? "/portfolio/모집 1.PNG" : "모집 1.PNG",
  process.env.STATE === "production"
    ? "/portfolio/프로젝트1.PNG"
    : "/프로젝트1.PNG",
  process.env.STATE === "production"
    ? "/portfolio/프로필변경1.PNG"
    : "/프로필변경1.PNG",
];

export default function Project({ handleClick, isClicked }: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSecondImageIndex, setSecondCurrentImageIndex] = useState(0);
  const [isBack, setIsBack] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleNext = (number: number) => {
    if (isButtonDisabled) return;
    setIsBack(false);
    setIsButtonDisabled(true);
    if (number == 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
      );
    } else {
      setSecondCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
      );
    }
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 500);
  };

  const handlePrev = (number: number) => {
    if (isButtonDisabled) return;
    setIsBack(true);
    setIsButtonDisabled(true);
    if (number == 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? prevIndex : prevIndex - 1
      );
    } else {
      setSecondCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? prevIndex : prevIndex - 1
      );
    }
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 500);
  };

  const variants: Variants = {
    start: (isBack) => ({
      opacity: 0,
      x: isBack ? -400 : 400,
      transition: {},
    }),
    middle: {
      opacity: 1,
      x: 0,
    },
    end: (isBack) => ({
      opacity: 0,
      x: isBack ? 400 : -400,
      transition: {},
    }),
  };

  return (
    <section
      id="project"
      className="flex flex-col px-1 sm:px-0 min-h-screen items-center py-60 relative bg-gray-50 "
    >
      <motion.h2
        className="text-4xl font-bold mb-16 text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      <div className="w-full lg:w-2/3 mb-20 flex flex-col shadow-xl items-center p-10 rounded-lg space-y-5 border-2 border-solid border-blue-400">
        <h3 className="text-3xl font-bold text-center">
          책 리뷰 및 커뮤니티 사이트
        </h3>
        <span className="text-black text-opacity-40 text-center">
          2024.05~2024.06 (1人 프로젝트)
        </span>
        <div className="flex flex-col sm:flex-row  w-full justify-between">
          <div className="flex flex-col w-full ">
            <div className="relative h-96 w-full  overflow-hidden">
              <AnimatePresence initial={false} custom={isBack}>
                {images.map((src, index) =>
                  index === currentImageIndex ? (
                    <motion.div
                      key={src}
                      custom={isBack}
                      initial="start"
                      animate="middle"
                      exit="end"
                      variants={variants}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 h-full w-full bg-black"
                    >
                      <Image
                        src={src}
                        alt={`Slide ${index}`}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            <div className="flex w-full items-center justify-center mt-10">
              <button onClick={() => handlePrev(1)} className="  p-2">
                <IoIosArrowBack className="size-6" />
              </button>

              <span>
                {currentImageIndex + 1}/{images.length}
              </span>
              <button onClick={() => handleNext(1)} className="  p-2">
                <IoIosArrowForward className="size-6" />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-3/5 sm:pl-10 flex flex-col text-lg">
            <div className="space-y-5 mt-5 sm:mt-0 flex flex-col mb-5">
              <span>
                책에 대해 소통하고 싶은 사람들을 위한 리뷰 및 커뮤니티
                웹사이트입니다. 블로그의 책 리뷰는 한 사람만의 의견이고 책 ott
                서비스를 이용하지 않는 사람은 원하는 책의 리뷰를 보기 어렵기
                때문에 이 사이트를 만들었습니다.
              </span>
              <span>
                빠른 렌더링 속도와 SEO 최적화를 위해 Next.js를 사용했습니다.
                tailwind를 사용해 스타일링을 빠르게 적용할 수 있었고
                framer-motion을 통해 interactive함을 더했습니다.
              </span>
              <span>
                RESTful한 API를 만드는 데에 초첨을 맞췄습니다. 인증에는
                passport와 jwt를 사용했고 accessToken과 refreshToken을 따로
                발급해 보안성을 높였습니다.
              </span>
            </div>
            <a target="blank" href="https://github.com/khs08280/Book_Review">
              <div
                onClick={handleClick}
                className="p-2 cursor-pointer mb-5 flex items-center px-4 bg-black rounded-md w-fit text-blue-300"
              >
                README에서 자세히 보기{" "}
                <IoMdArrowRoundForward className="size-6 mx-2" />{" "}
              </div>
            </a>
            <ul>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  주요 기능
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  책 별로 리뷰 확인 및 리뷰 작성, 책의 장르별로 커뮤니티 활동
                  가능,팔로우 한 유저들의 활동을 sns처럼 모아보기
                </span>
              </li>

              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  GitHub
                </span>
                <a
                  target="blank"
                  className="underline text-blue-300   overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ width: "calc(100% - 10rem)" }}
                  href="https://github.com/khs08280/Book_Review"
                >
                  https://github.com/khs08280/Book_Review
                </a>
              </li>
              <li className="flex  items-start justify-between">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  Frontend
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  Next.js, recoil, react-query, tailwind, framer-motion
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  Backend
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  Express.js, passport, jwt
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  DB
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  MongoDB, mongoose
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  Deployment
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  S3, cloudfront, EC2
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col items-center shadow-xl p-10 rounded-lg space-y-5 border-2 border-solid border-blue-400">
        <h3 className="text-3xl font-bold  text-center sm:text-start">
          개발자들을 위한 프로젝트 매칭 사이트
        </h3>
        <span className="text-black text-opacity-40 text-center">
          2023.05~2023.11 (3人 프로젝트, Front 1人, Back 2人)
        </span>
        <div className=" flex flex-col sm:flex-row  w-full justify-between">
          <div className="flex flex-col w-full ">
            <div className="relative h-96 w-full  overflow-hidden">
              <AnimatePresence initial={false} custom={isBack}>
                {secondImages.map((src, index) =>
                  index === currentSecondImageIndex ? (
                    <motion.div
                      key={src}
                      custom={isBack}
                      initial="start"
                      animate="middle"
                      exit="end"
                      variants={variants}
                      transition={{ duration: 0.5 }}
                      className="absolute top-0 left-0 h-full w-full bg-black place-content-end "
                    >
                      <Image
                        src={src}
                        alt={`Slide ${index}`}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <div className="flex w-full items-center justify-center mt-10">
              <button onClick={() => handlePrev(2)} className="  p-2">
                <IoIosArrowBack className="size-6" />
              </button>

              <span>
                {currentSecondImageIndex + 1}/{secondImages.length}
              </span>
              <button onClick={() => handleNext(2)} className="  p-2">
                <IoIosArrowForward className="size-6" />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-3/5 sm:pl-10 flex flex-col mt-5 sm:mt-0 text-lg">
            <div className="space-y-5 flex flex-col mb-5">
              <span>
                개발자들의 사이드 프로젝트를 위한 팀원 매칭 웹사이트입니다. 기존
                매칭 사이트에서의 아쉬운 점을 보완하여 만들었습니다.
              </span>
              <span>
                처음 시작할 때는 CORS 문제부터 난관이었지만 하나하나 해결해
                나감으로써 팀원과의 소통, 백엔드로의 요청 방법 등 많은 것을 배울
                수 있었던 프로젝트였습니다. styled-component를 사용해 코드
                가독성을 높였습니다.
              </span>
            </div>
            <a target="black" href="https://github.com/khs08280/capstone">
              <div className="p-2 cursor-pointer mb-5 flex items-center px-4 bg-black rounded-md w-fit text-blue-300">
                README에서 자세히 보기{" "}
                <IoMdArrowRoundForward className="size-6 mx-2" />{" "}
              </div>
            </a>
            <ul>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  맡은 역할
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  FrontEnd, 다자인
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  주요 기능
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  프로젝트 매칭을 위해 모집글을 작성, 모집하는 포지션과 스택,
                  기간 등을 설정, 모집글을 작성한 유저와 실시간 대화 기능
                </span>
              </li>

              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  GitHub
                </span>
                <a
                  target="blank"
                  className="underline  text-blue-300  overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ width: "calc(100% - 10rem)" }}
                  href="https://github.com/khs08280/capstone"
                >
                  https://github.com/khs08280/capstone
                </a>
              </li>
              <li className="flex  items-start justify-between">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  Frontend
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>
                  React.js, redux, styled-component, axios
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex items-center w-40">
                  <FaCheck className="mr-2" />
                  Deployment
                </span>
                <span style={{ width: "calc(100% - 10rem)" }}>Netlify</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
