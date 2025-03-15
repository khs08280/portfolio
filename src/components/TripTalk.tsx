import { triptalkSkill } from "@/infos/triptalkSkill";
import Image from "next/image";

const TripTalk = () => {
  return (
    <div id="triptalk" className="flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-10">Triptalk</h2>
      <div className="w-full max-w-6xl px-4">
        <h3 className="text-2xl font-semibold mb-4">프로젝트 소개</h3>
        <p className="text-gray-700 mb-8">
          Triptalk은 <span className="font-bold">실시간 채팅과 Open Api를 활용한 장소 검색으로 여행 일정을 계획하는 사이트</span>입니다. 사용자들이
          자신의 여행 경험을 공유하고, 다른 사람들의 여행 후기를 읽을 수 있습니다.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">프로젝트 기간</h3>
        <p className="text-gray-700 mb-8">2025.02 ~ 2025.03</p>
        
        <h3 className="text-2xl font-semibold mb-4">사용 기술</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 border-2 border-gray-200 rounded-xl bg-gray-50 auto-rows-[200px]">
          {triptalkSkill.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm justify-center">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-4 text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Image
            src={
              process.env.STATE === "production"
                ? "/portfolio/아키텍쳐 구조.png"
                : "/아키텍쳐 구조.png"
            }
            alt="architecture"
            width={1000}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TripTalk; 