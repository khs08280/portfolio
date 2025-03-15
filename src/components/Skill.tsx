import Image from "next/image";
import { motion } from "framer-motion";
import SkillSection from "./SkillSection";

export default function Skill() {
  const backends = [
    {
      skill: "AWS",
      image:
        process.env.STATE === "production" ? "/portfolio/aws.png" : "/aws.png",
      content:
        "• S3,cloudfront를 통해 프론트엔드를, EC2를 통해 백엔드를 배포한 경험이 있습니다. 또한 Route53과 ACM을 통해 ssl인증서를 요청하고 백엔드 서버를 https로 배포한 경험이 있습니다.",
    },
    {
      skill: "S3",
      image:
        process.env.STATE === "production" ? "/portfolio/s3.png" : "/s3.png",
      content:
        "• 버킷을 생성하고 빌드를 통해 생성된 정적 파일들을 업로드하여 배포한 경험이 있습니다.",
    },
    {
      skill: "CloudFront",
      image:
        process.env.STATE === "production"
          ? "/portfolio/cloudfront.svg"
          : "/cloudfront.svg",
      content:
        "• s3를 통해 업로드한 정적 데이터를 어느 지역에서라도 빠르게 전송하기 위해 CloudFront를 사용한 경험이 있습니다.",
    },
    {
      skill: "EC2",
      image:
        process.env.STATE === "production" ? "/portfolio/ec2.svg" : "/ec2.svg",
      content:
        "• EC2 인스턴스를 사용하여 웹 서버를 배포한 경험이 있습니다. 또한 ssl 인증서를 발급받아 https로 api 요청을 받을 수 있게 구현하였습니다.",
    },
    {
      skill: "GitHub",
      image:
        process.env.STATE === "production"
          ? "/portfolio/github.png"
          : "/github.png",
      content:
        "• 협업을 위한 기본적인 명령어와 동작 원리를 이해하고 있습니다. 또한 git-flow와 github-flow를 상황에 맞게 적용하려 공부하고 있습니다.",
    },
  ];
  const dbs = [
    {
      skill: "AWS",
      image:
        process.env.STATE === "production" ? "/portfolio/aws.png" : "/aws.png",
      content:
        "• S3,cloudfront를 통해 프론트엔드를, EC2를 통해 백엔드를 배포한 경험이 있습니다. 또한 Route53과 ACM을 통해 ssl인증서를 요청하고 백엔드 서버를 https로 배포한 경험이 있습니다.",
    },
  ];
  const frontends = [
    {
      skill: "React",
      image:
        process.env.STATE === "production"
          ? "/portfolio/react.png"
          : "/react.png",
      content:
        "• 컴포넌트를 사용해 재사용성을 높일 수 있고 useState, useEffect 등의 hook 동작 원리를 이해하고 사용할 수 있습니다.",
    },
    {
      skill: "Redux",
      image:
        process.env.STATE === "production"
          ? "/portfolio/redux.png"
          : "/redux.png",
      content:
        "• Redux Toolkit의 여러 메서드를 사용한 경험이 있고 컴포넌트 내에서 Redux 데이터를 읽고 쓸 수 있습니다.",
    },
    {
      skill: "React-Query",
      image:
        process.env.STATE === "production"
          ? "/portfolio/react-query.svg"
          : "react-query.svg",
      content:
        "• useQuery를 통해 서버 데이터를 캐싱할 수 있으며 useMutation으로 optimistic Update를 구현할 수 있습니다. 또한 useInfiniteQuery를 통해 무한스크롤을 구현한 경험이 있습니다.",
    },
    {
      skill: "tailwind",
      image:
        process.env.STATE === "production"
          ? "/portfolio/tailwind.png"
          : "/tailwind.png",
      content:
        "• tailwind를 사용해 개발의 생선성을 높일 수 있고 디자인을 일관되게 사용할 수 있습니다. 많이 사용되는 클래스들은 문서없이 구현이 가능합니다.",
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
        <SkillSection title="Backend" skills={backends} />
        <SkillSection title="DB & Deployment" skills={dbs} />
        <SkillSection title="Frontend" skills={frontends} />
      </div>
    </section>
  );
}
