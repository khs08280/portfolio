import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Certificate() {
  return (
    <section
      id="certificate-github"
      className=" min-h-screen flex flex-col justify-center relative bg-stone-200"
    >
      <h2 className="absolute top-20 text-3xl font-bold">
        Certificate & Github
      </h2>
      <div className=" px-5 ">
        <div className="flex justify-evenly">
          <div className="flex flex-col p-10 border-2 border-solid border-green-600 rounded-lg space-y-8">
            <span className="flex items-center text-3xl font-semibold">
              정보처리기사
            </span>
            <div className="relative w-60 h-80">
              <Image
                src="/certificate.png"
                alt="github Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-xl">
              • 이론적인 실무 지식을 얻기 위해 취득했습니다.
            </span>
          </div>
          <div className="flex flex-col  justify-center p-10 border-2 border-solid border-green-600 rounded-lg space-y-8">
            <span className="flex items-center text-3xl font-semibold">
              <FaGithub className="size-16 mr-5" />
              Github Profile
            </span>
            <Link
              className=" underline text-2xl text-blue-500"
              href={"https://github.com/khs08280"}
            >
              https://github.com/khs08280
            </Link>
            <span className="text-xl">프로젝트의 소스 코드 저장소입니다.</span>
            <span className="text-xl">
              • 팀 프로젝트부터 혼자 공부하기 위해 진행한 프로젝트의 코드
            </span>
            <span className="text-xl">
              • 프로필에는 간단한 자기소개를 작성했습니다.
            </span>
            <span className="text-xl">
              • 최근 프로젝트부터 꾸준히 커밋 중입니다.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
