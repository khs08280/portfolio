import Image from "next/image";

export default function Skill() {
  return (
    <section
      id="skill"
      className="flex flex-col min-h-screen py-44 justify-center relative bg-red-300"
    >
      <h2 className="px-5 absolute top-20 text-3xl font-bold">Skill</h2>
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold mb-5">Language</h3>
        <ul className="grid grid-cols-5 grid-rows-auto gap-2 justify-items-center">
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
              <Image
                src="/typescript.png"
                alt="Typescript Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Typescript</span>
            <span className="text-lg text-center break-keep">
              typed.t.ts 파일에서 제네릭 인터페이스를 선언해 자동완성을 통한
              생산성 향상 및 타입 검증을 할 수 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
              <Image
                src="/html.png"
                alt="html Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">HTML</span>
            <span className="text-lg text-center break-keep">
              시맨틱 태그가 주는 코드 가독성 향상의 효과를 알고 있고 이를 활용할
              수 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
              <Image
                src="/css.png"
                alt="CSS Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">CSS</span>
            <span className="text-lg text-center break-keep">
              flex, grid 등 여러 디자인 클래스에 익숙하며 tailwind,
              styled-component 등에 적용할 수 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
              <Image
                src="/js.png"
                alt="JavaScript Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">JavaScript</span>
            <span className="text-lg text-center break-keep">
              ES6 문법을 사용할 수 있고 여러 내장 함수의 사용에 익숙합니다.
              비동기처리에 대해 이해하고 있으며 자바스크립트 문법의 불안함에
              대해 이해하고 있습니다.
            </span>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-5">FrontEnd</h3>
        <ul className="grid grid-cols-5 grid-rows-auto gap-2 justify-items-center">
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/react.png"
                alt="React Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">React</span>
            <span className="text-lg text-center break-keep">
              리액트 컴포넌트를 사용해 재사용성을 높일 수 있고 useState,
              useEffect 등의 hook 동작 원리를 이해하고 사용할 수 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/nextjs.png"
                alt="NEXT Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Next.js(App Router)</span>
            <span className="text-lg text-center break-keep">
              App Router의 폴더구조를 이해하고 있습니다. loading.tsx나
              layout.tsx등 특수 파일들을 활용하고 정적 사이트를 생성해 성능향상
              및 SEO 최적화를 한 경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/recoil.png"
                alt="Recoil Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Recoil</span>
            <span className="text-lg text-center break-keep">
              atom을 생성하고 다른 컴포넌트에 사용하는 것에는 익숙하지만
              selector에 대한 이해도는 조금 부족한 편인 것 같습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/redux.png"
                alt="redux Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">redux</span>
            <span className="text-lg text-center break-keep">
              리액트 컴포넌트를 사용해 재사용성을 높일 수 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/react-query.svg"
                alt="react-query Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">react-query</span>
            <span className="text-lg text-center break-keep">
              useQuery를 통해 서버 데이터를 캐싱할 수 있으며 useMutation으로
              optimistic Update를 구현할 수 있습니다. 또한 useInfiniteQuery를
              통해 무한스크롤을 구현한 경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/styled-component.png"
                alt="Styled-component Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Styled-component</span>
            <span className="text-lg text-center break-keep">
              컴포넌트 네이밍이 주는 가독성 향상의 영향력을 이해하고 있으며
              props를 활용하는 것에 익숙합니다.
            </span>
          </li>

          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/tailwind.png"
                alt="tailwind Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">tailwind</span>
            <span className="text-lg text-center break-keep">
              tailwind를 사용해 개발의 생선성을 높일 수 있고 디자인을 일관되게
              사용할 수 있습니다. 많이 사용되는 클래스들은 문서없이 구현이
              가능합니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/framer-motion.png"
                alt="framer-motion Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">framer-motion</span>
            <span className="text-lg text-center break-keep">
              motion 태그를 사용해 애니메이션 효과를 지정할 수 있고
              animatePresence를 사용해 퇴장 애니메이션과 layoutId를 이용한
              애니메이션을 구현할 수 있습니다.
            </span>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-5">BackEnd & DB</h3>
        <ul className="grid grid-cols-5 grid-rows-auto gap-2 justify-items-center">
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/express.png"
                alt="Express Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Express.js</span>
            <span className="text-lg text-center break-keep">
              CRUD API를 구현할수 있고 RESTful에 대해 기본적인 지식을 가지고
              있습니다. 유지보수가 용이한 폴더 구조를 사용한 경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/mongodb.png"
                alt="MongoDB Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">MongoDB</span>
            <span className="text-lg text-center break-keep">
              mongoose를 통해 모델을 만들고 해당 모델을 확장할 수 있는 능력이
              있습니다. 데이터를 찾기 위한 메서드에 대해 이해하고 있습니다.
            </span>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold mb-5">
          DEPLOYMENT & VERSION CONTROL
        </h3>
        <ul className="grid grid-cols-5 grid-rows-auto gap-2 justify-items-center">
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/aws.png"
                alt="AWS Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">AWS</span>
            <span className="text-lg text-center break-keep">
              S3,cloudfront를 통해 프론트엔드를, EC2를 통해 백엔드를 배포한
              경험이 있습니다. 또한 Route53과 ACM을 통해 ssl인증서를 요청하고
              백엔드 서버를 https로 배포한 경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/s3.png"
                alt="S3 Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">S3</span>
            <span className="text-lg text-center break-keep">
              버킷을 생성하고 빌드를 통해 생성된 정적 파일들을 업로드하여 배포한
              경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/cloudfront.svg"
                alt="Cloudfront Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Cloudfront</span>
            <span className="text-lg text-center break-keep">
              s3를 통해 업로드한 정적 데이터를 어느 지역에서라도 빠르게 전송하기
              위해 CloudFront를 사용한 경험이 있습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/ec2.svg"
                alt="EC2 Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">EC2</span>
            <span className="text-lg text-center break-keep">
              EC2 인스턴스를 사용하여 웹 서버를 배포한 경험이 있습니다. 또한 ssl
              인증서를 발급받아 https로 api 요청을 받을 수 있게 구현하였습니다.
            </span>
          </li>
          <li className="flex flex-col items-center w-60">
            <div className="relative w-36 h-36">
              <Image
                src="/github.png"
                alt="github Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <span className="text-lg mt-2 truncate">Github</span>
            <span className="text-lg text-center break-keep">
              협업을 위한 기본적인 명령어와 동작 원리를 이해하고 있습니다. 또한
              git-flow와 github-flow를 상황에 맞게 적용하려 공부하고 있습니다.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
