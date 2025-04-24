import { triptalkSkill } from "@/infos/triptalkSkill";
import Image from "next/image";

const TripTalk = () => {
  return (
    <div id="triptalk" className="flex flex-col items-center py-10">
      <h2 className="text-4xl font-bold mb-10">Triptalk</h2>
      <div className="w-full max-w-6xl px-4">
        <h3 className="text-3xl font-semibold mb-4">프로젝트 소개</h3>
        <p className="text-gray-700 mb-8 text-lg">
          Triptalk은{" "}
          <span className="font-bold">
            실시간 채팅과 Open Api를 활용한 장소 검색으로 여행 일정을 계획하는
            사이트
          </span>
          입니다.
          <br /> 같이 계획을 짜고 있다는 느낌을 주기 위해 실시간 채팅 기능을
          넣었고, 여행 장소를 찾을 수 있게 네이버 검색 api와 Web Dinamic Maps을
          사용했습니다. 찾은 여행 장소를 시간, 날짜 정보 등을 추가해 계획을
          생성할 수 있게 만들었습니다.
          <br />
          <br />
          처음으로 jenkins를 사용해서 배포 자동화를 경험한 프로젝트입니다.
          jenkins 서버에서 블루 오션으로 제 깃허브의 토큰을 통해 파이프라인을
          생성했고 jenkins 작업 디렉토리에서 빌드 및 테스트를 진행하고 만들어진
          이미지를 ncp container registry에 push 하고 docker 컨테이너를 실행하는
          서버에서 이미지를 pull 하고 Mysql 컨테이너와 함께 배포했습니다.
        </p>

        <h3 className="text-3xl font-semibold mb-4">프로젝트 정보</h3>
        <div className="flex items-center mb-8 gap-4 text-lg">
          <span className="font-semibold ">프로젝트 기간: </span>
          <p className="text-gray-700 ">2025.02 ~ 2025.03</p>
        </div>
        <div className="flex items-center mb-8 gap-4 text-lg">
          <span className="font-semibold">참여 인원: </span>
          <p className="text-gray-700"> 1인</p>
        </div>

        <h3 className="text-3xl font-semibold mb-4">사용 기술</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 border-2 border-gray-200 rounded-xl bg-gray-50 auto-rows-[200px]">
          {triptalkSkill.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm justify-center"
            >
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-4 text-sm font-medium text-gray-600">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-8 self-start">
            아키텍쳐 구조
          </h3>
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
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-8 self-start">ERD</h3>
          <Image
            src={
              process.env.STATE === "production"
                ? "/portfolio/erd.png"
                : "/erd.png"
            }
            alt="architecture"
            width={1000}
            height={800}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-8 self-start">
            프로젝트 화면
          </h3>
          <div className="grid gap-3 grid-cols-2">
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/입장.png"
                    : "/입장.png"
                }
                alt="architecture"
                width={600}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">채팅방 목록 화면</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/메인.png"
                    : "/메인.png"
                }
                alt="architecture"
                width={600}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">채팅방 및 일정 생성 화면</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/계획 생성.png"
                    : "/계획 생성.png"
                }
                alt="architecture"
                width={600}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">여행 일정 추가 화면</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/초대2.png"
                    : "/초대2.png"
                }
                alt="architecture"
                width={600}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">일행 초대 화면</span>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-12">
          <h3 className="text-3xl font-semibold mb-8 self-start">상세 코드</h3>
          <div>
            <h4 className="text-2xl font-semibold mb-4">채팅방 입장 코드</h4>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/서버joinroom.png"
                    : "/서버joinroom.png"
                }
                alt="architecture"
                width={800}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">서버 채팅방 입장 코드</span>
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/프론트joinroom.png"
                    : "/프론트joinroom.png"
                }
                alt="architecture"
                width={700}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">프론트 채팅방 입장 코드</span>
              <span className="self-start text-lg break-words whitespace-normal">
                채팅방에 입장했을 때 발생하는 이벤트 리스너의 코드입니다. 먼저
                접속한 채팅방에 유저를 참가시킵니다. 그리고 유저가 이전에
                참가했던 채팅방에 접속할 시 채팅방에 유저를 참가시키지 않고 이전
                메세지들을 불러오고 이벤트를 전달합니다.
                <br />
                만약 처음 채팅방에 참가하는 유저라면 채팅방 내부에 새 유저가
                참가했다는 메세지를 전달하고 참가한 유저를 DB에 저장합니다.
                그리고 이전 메세지들을 불러와 전달합니다.
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">전역 예외 처리 코드</h4>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/전역예외.png"
                    : "/전역예외.png"
                }
                alt="architecture"
                width={800}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">
                전역 예외 핸들러 코드(일부)
              </span>
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/controller.png"
                    : "/controller.png"
                }
                alt="architecture"
                width={700}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">컨트롤러 코드</span>
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/service.png"
                    : "/service.png"
                }
                alt="architecture"
                width={700}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">서비스 계층 예외 처리 코드</span>
              <span className="self-start text-lg break-words whitespace-normal">
                ControllerAdvice 어노테이션을 통해 컨트롤러 계층에서 반복되는
                예외처리 작업을 줄였습니다. 예외 처리 또한 핵심 비즈니스
                로직이기 때문에 서비스 계층의 코드에서 예외 처리를 해주었습니다.
                컨트롤러에서는 요청을 받아 서비스 계층에 전달하고 서비스
                계층에서의 응답을 프론트에 전달하는 역할만 수행하게
                구현하였습니다.
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">리팩토링</h4>
            <div className="flex flex-col gap-4 items-center">
              <Image
                src={
                  process.env.STATE === "production"
                    ? "/portfolio/리팩토링.png"
                    : "/리팩토링.png"
                }
                alt="architecture"
                width={800}
                height={600}
                className="object-cover rounded-lg shadow-lg"
              />
              <span className=" text-gray-500">Extract Method 리팩토링</span>
              <span className="self-start text-lg break-words whitespace-normal">
                코드 가독성을 높이고 중복되는 코드를 줄이기 위해 메서드를
                분리하였습니다.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-12">
          <h3 className="text-3xl font-semibold mb-8 self-start">
            트러블 슈팅
          </h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">🚨문제 배경</h4>
            <p className="text-lg mb-6">
              <span className="font-bold">
                배포 서버에서 gradle 빌드 중 20분,30분이 지나도 진행률이
                멈춰있는 현상
              </span>
              이 발생했습니다.
              <br />
              로컬에서 테스트 했었을 때는 정상적으로 동작한 것을 바탕으로 배포
              서버에서의 문제라고 생각했습니다.
            </p>
            <Image
              src={
                process.env.STATE === "production"
                  ? "/portfolio/빌드오류.png"
                  : "/빌드오류.png"
              }
              alt="architecture"
              width={300}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">🌟해결 과정</h4>
            <p className="text-lg mb-6">
              문제 발생 후, 먼저{" "}
              <span className="font-bold">NCP 콘솔의 Server 모니터링</span>을
              통해 CPU, 메모리, 디스크 상태를 확인했습니다.
              <br /> 확인 결과, 메모리 그래프가 최고점을 기록한 후 모든 상태
              그래프가 중단된 것을 통해{" "}
              <span className="font-bold">메모리 부족</span>이 서버 오류의
              원인임을 파악했습니다.
              <br />
              서버 스펙 수정이나 다른 부분에서의 메모리 절감이 어려운 상황이었기
              때문에, <span className="font-bold">스왑 메모리 활용 방안</span>을
              떠올렸습니다.
              <br /> 스왑 메모리는 디스크 공간을 활용하여 메모리 부족 문제를
              해결할 수 있기 때문에 관련 자료를 찾아 스왑 메모리 설정 방법을
              추가적으로 조사하였고,
              <span className="font-bold">
                기존 1GB였던 스왑 메모리 용량을 2GB로 증설
              </span>
              하여 문제를 해결했습니다.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-semibold">📖해결 후 회고</h4>
            <p className="text-lg mb-6">
              한정된 서버 자원을 효율적으로 활용하기 위해서는 메모리 관리 방법을
              알아야 한다는 것을 알게 된 트러블 슈팅이었습니다.
              <br />
              로컬에서 정상적으로 테스트를 수행했더라도 배포 환경에서는 문제가
              발생할 수도 있기 때문에 배포 환경에서의 테스트의 중요성을 알게
              되었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripTalk;
