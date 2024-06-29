import Image from "next/image";
import { motion } from "framer-motion";
import SkillSection from "./SkillSection";

export default function Skill() {
  const languages = [
    {
      skill: "TypeScript",
      image: "/typescript.png",
      content:
        "• typed.t.ts 파일에서 제네릭 인터페이스를 선언해 자동완성을 통한 생산성 향상 및 타입 검증을 할 수 있습니다.",
    },
    {
      skill: "HTML",
      image: "/html.png",
      content:
        "• 시맨틱 태그가 주는 코드 가독성 향상의 효과를 알고 있고 이를 활용할 수 있습니다.",
    },
    {
      skill: "CSS",
      image: "/css.png",
      content:
        "• flex, grid 등 여러 디자인 클래스에 익숙하며 tailwind, styled-component 등에 적용할 수 있습니다.",
    },
    {
      skill: "JavaScript",
      image: "/js.png",
      content:
        "• ES6 문법을 사용할 수 있고 여러 내장 함수의 사용에 익숙합니다. 비동기처리에 대해 이해하고 있으며 자바스크립트 문법의 불안함에 대해 이해하고 있습니다.",
    },
  ];
  const frontends = [
    {
      skill: "React",
      image: "/react.png",
      content:
        "• 리액트 컴포넌트를 사용해 재사용성을 높일 수 있고 useState, useEffect 등의 hook 동작 원리를 이해하고 사용할 수 있습니다.",
    },
    {
      skill: "Next.js(App Router)",
      image: "/nextjs.png",
      content:
        "• App Router의 폴더구조를 이해하고 있습니다. loading.tsx나 layout.tsx 등 특수 파일들을 활용하고 정적 사이트를 생성해 성능향상 및 SEO 최적화를 한 경험이 있습니다.",
    },
    {
      skill: "Recoil",
      image: "/recoil.png",
      content:
        "• atom을 생성하고 다른 컴포넌트에 사용하는 것에는 익숙하지만 selector에 대한 이해도는 조금 부족한 편인 것 같습니다.",
    },
    {
      skill: "Redux",
      image: "/redux.png",
      content:
        "• ES6 문법을 사용할 수 있고 여러 내장 함수의 사용에 익숙합니다. 비동기처리에 대해 이해하고 있으며 자바스크립트 문법의 불안함에 대해 이해하고 있습니다.",
    },
    {
      skill: "Styled-Component",
      image: "/styled-component.png",
      content:
        "• 컴포넌트 네이밍이 주는 가독성 향상의 영향력을 이해하고 있으며 props를 활용하는 것에 익숙합니다.",
    },
    {
      skill: "React-Query",
      image: "/react-query.svg",
      content:
        "• useQuery를 통해 서버 데이터를 캐싱할 수 있으며 useMutation으로 optimistic Update를 구현할 수 있습니다. 또한 useInfiniteQuery를 통해 무한스크롤을 구현한 경험이 있습니다.",
    },
    {
      skill: "tailwind",
      image: "/tailwind.png",
      content:
        "• tailwind를 사용해 개발의 생선성을 높일 수 있고 디자인을 일관되게 사용할 수 있습니다. 많이 사용되는 클래스들은 문서없이 구현이 가능합니다.",
    },
    {
      skill: "framer-motion",
      image: "/framer-motion.png",
      content:
        "• motion 태그를 사용해 애니메이션 효과를 지정할 수 있고 animatePresence를 사용해 퇴장 애니메이션과 layoutId를 이용한 애니메이션을 구현할 수 있습니다.",
    },
  ];
  const backends = [
    {
      skill: "Express.js",
      image: "/express.png",
      content:
        "• CRUD API를 구현할수 있고 RESTful에 대해 기본적인 지식을 가지고 있습니다. 유지보수가 용이한 폴더 구조를 사용한 경험이 있습니다.",
    },
    {
      skill: "Mongo DB",
      image: "/mongodb.png",
      content:
        "• mongoose를 통해 모델을 만들고 해당 모델을 확장할 수 있는 능력이 있습니다. 데이터를 찾기 위한 메서드에 대해 이해하고 있습니다.",
    },
  ];
  const deplyments = [
    {
      skill: "AWS",
      image: "/aws.png",
      content:
        "• S3,cloudfront를 통해 프론트엔드를, EC2를 통해 백엔드를 배포한 경험이 있습니다. 또한 Route53과 ACM을 통해 ssl인증서를 요청하고 백엔드 서버를 https로 배포한 경험이 있습니다.",
    },
    {
      skill: "S3",
      image: "/s3.png",
      content:
        "• 버킷을 생성하고 빌드를 통해 생성된 정적 파일들을 업로드하여 배포한 경험이 있습니다.",
    },
    {
      skill: "CloudFront",
      image: "/cloudfront.svg",
      content:
        "• s3를 통해 업로드한 정적 데이터를 어느 지역에서라도 빠르게 전송하기 위해 CloudFront를 사용한 경험이 있습니다.",
    },
    {
      skill: "EC2",
      image: "/ec2.svg",
      content:
        "• EC2 인스턴스를 사용하여 웹 서버를 배포한 경험이 있습니다. 또한 ssl 인증서를 발급받아 https로 api 요청을 받을 수 있게 구현하였습니다.",
    },
    {
      skill: "GitHub",
      image: "/github.png",
      content:
        "• 협업을 위한 기본적인 명령어와 동작 원리를 이해하고 있습니다. 또한 git-flow와 github-flow를 상황에 맞게 적용하려 공부하고 있습니다.",
    },
  ];

  return (
    <section id="skill" className="py-20 bg-gary-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h2>
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Frontend" skills={frontends} />
        <SkillSection title="Backend & Database" skills={backends} />
        <SkillSection
          title="Deployment & Version Control"
          skills={deplyments}
        />
      </div>
    </section>
  );
}
