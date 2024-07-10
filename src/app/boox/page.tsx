import Image from "next/image";
import { PiArrowFatLinesUpLight } from "react-icons/pi";

export default function Boox() {
  return (
    <main className="w-3/4 lg:w-1/2 mx-auto my-0 flex flex-col items-center py-20  text-base lg:text-xl space-y-10">
      <h1 className="text-3xl font-semibold">
        BOOX(책 리뷰 및 커뮤니티 사이트)
      </h1>
      <nav className="flex flex-col leading-8 p-5 bg-slate-200 rounded-lg px-10">
        <span className="text-2xl font-semibold">목차</span>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#info"
        >
          - Info
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#background"
        >
          - Background
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#troubleshooting"
        >
          - Trouble Shooting
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#sequence"
        >
          - 일부 기능 시퀀스 다이어그램
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#code"
        >
          - 일부 기능 코드
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#seo"
        >
          - SEO 최적화 및 성능을 높이기 위해 시도한 방법들
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#stack"
        >
          - Technology Stacks
        </a>
        <a
          className=" hover:underline text-blue-400 transition-all w-fit"
          href="#review"
        >
          - Review
        </a>
      </nav>
      <section className="flex flex-col w-full space-y-5 ">
        <h2 className="text-3xl font-medium" id="info">
          🔍 Info
        </h2>
        <ul className=" list-disc leading-8">
          <li>1인 개발</li>
          <li>프로젝트 이름 : BOOX</li>
          <li>개발 기간 : 2024.05 ~ 2024.06</li>
        </ul>
        <h2 className="text-xl font-semibold">📌Summary</h2>
        <span className=" leading-8">
          책에 대해 소통하고 싶은 사람들을 위한 리뷰 및 커뮤니티 웹사이트입니다.
          블로그의 책 리뷰는 한 사람만의 의견이고 책 ott 서비스를 이용하지 않는
          사람은 원하는 책의 리뷰를 보기 어렵기 때문에 이 사이트를 만들었습니다.
          빠른 렌더링 속도와 SEO 최적화를 위해 Next.js를 사용했습니다.
          Tailwind를 사용해 스타일링을 빠르게 적용할 수 있었고 framer-motion을
          통해 interactive함을 더했습니다. RESTful한 API를 만드는 데에 초첨을
          맞췄습니다. 인증에는 passport와 jwt를 사용했고 accessToken과
          refreshToken을 따로 발급해 보안성을 높였습니다.
        </span>
        <h3 className="text-xl font-semibold">주요 기능</h3>
        <ul className="list-disc leading-8">
          <li>원하는 책에 대한 사람들의 리뷰를 보고, 리뷰를 남길 수 있음.</li>
          <li>커뮤니티에서 카테고리에 따라 사람들과 소통</li>
          <li>
            커뮤니티에서 원하는 유저를 팔로우 해 일주일 간 해당 유저의 활동을
            SNS처럼 볼 수 있음.
          </li>
          <li>한줄 책 추천을 통해 심플하게 책을 추천 받을 수 있음.</li>
          <li>프로필에서 자신의 활동 한 눈에 보기</li>
        </ul>
        <div className="flex flex-col lg:flex-row flex-wrap">
          <div className="flex flex-col items-center w-full ">
            <Image
              src={"/캡처.PNG"}
              alt={`홈화면`}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg text-opacity-40 text-black my-4">
              홈화면
            </span>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center w-full ">
            <Image
              src={"/모달.PNG"}
              alt={`모달 화면`}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg text-opacity-40 text-black my-4">
              모달 화면
            </span>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center w-full ">
            <Image
              src={"/다크모드.PNG"}
              alt={`다크모드 화면`}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg text-opacity-40 text-black my-4">
              다크모드
            </span>
          </div>

          <div className="flex mt-5 lg:mt-0 flex-col items-center w-full  ">
            <Image
              src={"/반응형1.PNG"}
              alt={`모바일 반응형 화면`}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg text-opacity-40 text-black my-4">
              반응형 디자인 - 모바일
            </span>
          </div>
          <div className="flex mt-5 lg:mt-0 flex-col items-center w-full ">
            <Image
              src={"/반응형2.PNG"}
              alt={`테블릿 반응형 화면`}
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
            />
            <span className="text-lg text-opacity-40 text-black my-4">
              반응형 디자인 - 테블릿
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full space-y-5">
        <h2 className="text-3xl font-semibold" id="background">
          💾 Background
        </h2>
        <span className="leading-8">
          웹사이트 제작의 전반적인 과정을 공부하고자 사이트 기획, 디자인, 구현,
          배포를 혼자 진행한 프로젝트입니다. 처음 이 사이트를 기획하게 된 계기는
          특정 책에 대한 사람들의 평가를 알고 싶지만 그럴만한 사이트를 쉽게 찾지
          못했던 것입니다. 독서 ott를 사용하지 않는 사람은 책 구매 사이트나
          블로그의 리뷰로 책의 정보를 얻는데 한 사이트에서 원하는 책의 모든
          정보를 알 수 있으면 좋을 것 같아 제작하게 되었습니다.
        </span>
        <span className="leading-8">
          Next.js는 App Router가 출시된 이후로 React 기반의 핵심 프레임워크로
          자리잡았다 생각하여 직접 구현해보고자 사용했습니다. 서버는 RESTful한
          API 구현 및 공부에 집중하기 위해 익숙한 js를 쓰고자 Node.js의
          프레임워크인 Express.js를 사용했습니다. 기획 단계에서 모든 기능이나
          데이터 모델을 정하고 시작한 프로젝트가 아니어서 확장성이 좋고
          mongoose를 통해 사용이 편리한 MongoDB를 DB로 정했습니다. 프론트엔드의
          배포는 빠른 로딩 속도를위해 정적 파일들을 S3에 업로드하였고 지역 간의
          로딩 차를 줄이고 효과적으로 요청을 라우팅하기 위해 cloudfront를
          사용하였습니다. 비용적인 측면 뿐만 아니라 용량이나 성능 등을 제가 직접
          조절하기 위해 백엔드의 배포는 EC2를 사용하였습니다.
        </span>
      </section>
      <section className="flex flex-col w-full space-y-5">
        <h2 className="text-3xl font-semibold" id="troubleshooting">
          🎯 Trouble Shooting
        </h2>
        <h3 className="text-2xl font-semibold">
          프론트엔드 빌드 시 발생한 정적 파일 생성 오류
        </h3>
        <span className="text-xl font-medium">
          상황: next.js의 정적 파일을 s3에 업로드하기 위해 next.config.js에
          output: &quot;export&quot; 설정을 한 후 빌드 시 발생한 오류
        </span>
        <span className="px-3 py-5  bg-slate-100 font-mono">
          Error: Page &quot;/books/[bookId]&quot; is missing
          &quot;generateStaticParams()&quot; so it cannot be used with
          &quot;output: export&quot; config.
        </span>
        <span>
          에러의 내용은 generateStaticParams()를 사용하지 않아서 발생한다고
          한다.
        </span>
        <div className="">
          <h3 className="text-2xl font-semibold">
            에러 해결을 위해 시도한 방법
          </h3>
          <h4 className="font-semibold my-5">
            1. 기존 &quot;use client&quot;를 사용하는 page.tsx 파일을
            index.tsx파일로 파일명을 바꾸고 해당 컴포넌트를 새로 만든 서버
            컴포넌트인 page.tsx에서 공식문서를 보며 generateStaticParams()를
            사용하여 정적파일을 생성하고 index.tsx 컴포넌트를 불러오기
          </h4>
          <div className=" text-black text-opacity-50 border-l-4 border-solid pl-5 border-gray-300">
            해당 방법을 사용 시 오류가 발생하는 빌드 과정은 넘어가지만
            공식문서를 보며 적용한 getStaticPaths와 getStaticProps를 사용하는
            과정에서 App Router에서는 getStaticProps를 사용하지 않는다고 오류가
            발생. getStaticProps를 지우면 getStaticPaths나
            generateStaticParams에서 맞물리는 오류가 발생해 해결하려고
            시도했지만 정보가 많지 않아 다른 방법을 시도했다.
          </div>
          <h4 className="font-semibold my-5">
            2. stackOverFlow에서 next.js 13.4.13 버전에서는 해당 오류가 발생하지
            않고 정상적으로 동작한다는 정보 발견 후 적용
          </h4>
          <div className=" text-black text-opacity-50 border-l-4 border-solid pl-5 border-gray-300">
            해당 방법으로 Next.js 버전을 다운그레이드 후 빌드 시 정상적으로
            빌드가 완료되고 정적 파일이 생성되지만 배포된 사이트의 동적 라우팅을
            사용한 페이지 방문 시 404 오류가 발생. 정적 파일이 정상적으로
            생성되지 않은 것으로 판단하고 다른 방법을 찾아봄.
          </div>
          <h4 className="font-semibold my-5">
            next.js의 폴더명으로 자동 동적 라우팅을 사용하는게 아닌 query
            params를 이용하여 수동 동적 라우팅 적용
          </h4>
          <div className=" text-black text-opacity-50 border-l-4 border-solid pl-5 border-gray-300">
            Next.js의 공식 문서에도 해당 오류에 대한 내용이 없고 구글링에서
            찾아본 내용에서도 더 시도할만한 방법이 없어 해당 방법으로 정적
            파일을 생성했다. Next.js App Router의 자체적인 문제라는 글도 많아
            해당 방법으로 처리한 상태
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full items-center">
        <span
          id="sequence"
          className="text-2xl font-semibold flex items-start mb-10 place-self-start"
        >
          일부 기능 시퀀스 다이어그램
        </span>
        <div className="text-2xl font-semibold mb-5 mt-10">
          홈페이지 접속 시 시퀀스
        </div>
        <Image
          src="/홈페이지접속.png"
          alt="홈페이지접속 시퀀스 다이어그램"
          width={600}
          height={400}
        />
        <span className="mt-5">
          유저가 홈페이지에 접속 시 홈 화면에 표시되는 책, 커뮤니티 게시글, 한
          줄 책 추천의 데이터를 가져옵니다. 자동 로그인 확인을 위해 cookie에
          RefreshToken이 있을 시 refreshToLogin api를 요청합니다. 백엔드
          코드에서 RefreshToken이 만료되었는지, DB에 저장되어 있는 유저 데이터의
          토큰과 일치한지를 판단 후 성공 시 accessToken을 발급하고 passport로
          로그인 처리합니다.
        </span>

        <div className="text-2xl font-semibold mb-5 mt-10">
          책 상세 페이지 방문 시 시퀀스
        </div>
        <Image
          src="/책 모달 접속 및 리뷰 생성.png"
          alt="책 모달 접속 및 리뷰 생성 시퀀스 다이어그램"
          width={600}
          height={400}
        />
        <span className="mt-5">
          홈 화면에 있는 책 페이지를 방문 시 책의 자세한 정보를 백엔드에 요청해
          가져옵니다. 유저가 로그인을 했을 시 로그인한 유저의 아이디로 리뷰를
          작성했는지, 다른 유저의 리뷰에 좋아요 등록 여부를 판단해 표시합니다.
        </span>
        <span className="mt-5">
          리뷰를 작성할 때에는 별점을 따로 매길 수 있습니다. 리뷰를 먼저 달고
          별점을 후에 매겨도 되고, 별점을 먼저 매기고 리뷰를 달아도 정상적으로
          작동합니다. 이 방식을 사용시 유저들의 별점 등록 접근성이 좋아 많은
          별점 데이터를 모을 수 있다 생각해 도입했습니다.
        </span>
        <div className="text-2xl font-semibold mb-5 mt-10">
          SNS 페이지 방문 시 시퀀스
        </div>
        <Image
          src="/SNS 시퀀스.png"
          alt="SNS 시퀀스 다이어그램"
          width={600}
          height={400}
        />
        <span className="mt-5">
          SNS 페이지는 로그인한 유저만 방문할 수 있습니다. 로그인하지 않은
          유저가 방문 시 로그인 페이지로 redirect됩니다. SNS 페이지 방문 시
          로그인한 유저가 팔로우하고 있는 친구의 최근 1주일 활동 로그의 데이터를
          가져옵니다. 팔로우하고 있는 유저가 없거나 최근 1주일 간의 활동이
          없으면 커뮤니티에서 유저를 팔로우하라는 텍스트로 대체됩니다.
        </span>
        <span className="mt-5">
          팔로우하고 있는 유저가 리뷰를 등록했을 시 해당 리뷰가 있는 페이지에
          가지 않아도 SNS 페이지에서 좋아요를 등록하거나 해당 페이지로 이동할 수
          있습니다. 좋아요를 요청할 때는 이미 좋아요를 눌렀는지 등 여부 확인 후
          좋아요 등록을 표시합니다.
        </span>
      </section>

      <section className="flex flex-col w-full items-center">
        <span
          id="code"
          className="text-2xl font-semibold flex items-start mb-10  place-self-start"
        >
          일부 기능 코드
        </span>
        <div className="text-2xl font-semibold mb-5 mt-10">
          프론트 - SNS 좋아요 여부 확인 코드
        </div>
        <Image
          src="/SNS 좋아요 검증.PNG"
          alt="SNS 좋아요 검증 사진"
          width={600}
          height={400}
        />
        <span className="mt-5">
          SNS 페이지에서 방문 시 적용되는 좋아요 여부 확인 코드입니다.
          react-query로 백엔드에서 받아온 활동 로그에 로그인한 유저의 좋아요
          여부를 확인합니다. 여러 개의 활동 로그를 배열로 저장해 처리했습니다.
        </span>
        <span className="mt-5">
          이미 좋아요를 누른 활동로그의 처리에 대해 고민하다 적용한 코드입니다.
          백엔드에서 해당 로직을 처리할 시 로딩 속도가 길어질 수도 있다 생각해
          프론트에서 처리했습니다.
        </span>
        <div className="text-2xl font-semibold mb-5 mt-10">
          백엔드 - 팔로우 컨트롤러 코드
        </div>
        <Image
          src="/팔로우유저 코드.PNG"
          alt="팔로우유저 코드 사진"
          width={600}
          height={400}
        />
        <span className="mt-5">
          커뮤니티에서 유저를 팔로우하고 싶을 때 실행하는 팔로우 컨트롤러
          코드입니다. query params로 팔로우 하려는 유저의 아이디를 요청합니다.
          요청 받은 userId와 targetUserId를 검증합니다. 유효할 시 팔로우를 이미
          했을 시에는 언팔로우가 되고 하지 않았을 시에는 팔로우가 되는
          기능입니다.
        </span>
        <span className="mt-5">
          프론트의 출력에서도 커뮤니티 게시글 페이지에 방문 시 위의 좋아요 여부
          확인 코드처럼 팔로우 여부를 확인하여 팔로우와 언팔로우 표시 여부를
          결정합니다.
        </span>
        <div className="text-2xl font-semibold mb-5 mt-10">
          백엔드 - 재로그인 코드
        </div>
        <Image
          src="/재로그인 코드.PNG"
          alt="재로그인 코드 사진"
          width={600}
          height={400}
        />
        <span className="mt-5">
          이 코드는 refreshToken으로 passport 재로그인하는 코드입니다.
          accessToken의 만료시간과 passport로 발급한 쿠키의 만료 시간이 다르기
          때문에 따로 구현한 코드입니다.
        </span>
        <span className="mt-5">
          인증 및 권한이 필요한 api를 요청할 때에 자동으로 실행되는 코드입니다.
          accessToken의 만료를 확인하는 코드와 함께 실행됩니다.
        </span>
      </section>

      <section className="flex flex-col w-full items-center">
        <span
          id="seo"
          className="text-2xl font-semibold flex items-start mb-10 place-self-start"
        >
          <PiArrowFatLinesUpLight className="size-8 mr-2" />
          SEO 최적화 및 성능을 높이기 위해 시도한 방법들
        </span>
        <h2>Lighthouse로 측정한 사이트 성능</h2>
        <Image
          src="/lighthouse-빌드후.PNG"
          alt="lighthouse"
          width={400}
          height={300}
        />
        <div className="text-2xl font-semibold mb-5 mt-10">
          S3에 정적 파일을 미리 배포해 로딩 시간을 줄임
        </div>
        <Image src="/s3배포.PNG" alt="s3배포" width={600} height={400} />
        <div className="text-2xl font-semibold mb-5 mt-10">
          CDN서비스인 CloudFront를 이용해 네트워크 지연을 줄임
        </div>
        <Image
          src="/cloudfront배포.PNG"
          alt="cloudfront배포"
          width={600}
          height={400}
        />
        <div className="text-2xl font-semibold mb-5 mt-10">
          layout파일마다 메타 데이터 생성
        </div>
        <Image
          src="/메타데이터.PNG"
          alt="메타데이터"
          width={600}
          height={400}
        />
      </section>
      <section className="flex flex-col w-full space-y-5">
        <h2 id="stack" className="text-3xl font-semibold">
          🛠 Technology Stacks
        </h2>
        <ul className=" list-disc leading-8">
          <li>
            Frontend: Next.js, recoil, react-query, tailwind, framer-motion
          </li>
          <li>Backend: Node.js, Express.js, passport, jwt</li>
          <li>DB: MongoDB, mongoose</li>
          <li>Deployment: S3, cloudfront, EC2</li>
        </ul>
      </section>
      <section id="review" className="flex flex-col w-full space-y-5">
        <h2 className="text-3xl font-semibold">✔ Review</h2>
        <span className="leading-8">
          프론트엔드 개발자는 무작정 신기술을 따라가야 한다고 생각하지 않습니다.
          하지만 새로운 기술들은 무언가를 해결하기 위해 나온 것이고 장단점이
          있기 때문에 그 장점이 단점보다 크고 자신의 프로젝트 개발에 도움이
          된다면 신기술을 도입하는 것이 좋다고 생각합니다.
        </span>
        <span className="leading-8">
          이번 프로젝트에서 Next.js와 Tailwind를 사용하면서 앞서 말한 점들을
          많이 느꼈습니다. Next.js는 유의미한 로딩 속도 차이를 보였고 Tailwind는
          클래스들에 익숙해졌을 때 디자인 속도가 확실히 빨라졌습니다. 하지만
          Styled-component와 Tailwind를 둘 다 사용해본 결과 디자인 속도 차이로
          발생하는 이득보다 Tailwind의 클래스가 많아질수록 가독성 저하,
          Styled-component의 네이밍이 주는 코드 가독성 향상이 더 효과적이라
          생각했습니다. 이러한 부분들을 인지하고 필요한 새로운 기술들을 배우며
          개발의 전문가가 되고 싶습니다.
        </span>
      </section>
    </main>
  );
}
