(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8482:function(e,s,l){Promise.resolve().then(l.bind(l,8445))},8445:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return w}});var t=l(7437);function a(){return(0,t.jsxs)("footer",{id:"info",className:"flex flex-col items-center justify-center relative px-5 sm:px-0 py-20 bg-gray-200",children:[(0,t.jsx)("ul",{className:"text-lg text-center mt-5 space-x-3 flex text-black text-opacity-40",children:["TRIPTALK","OTHER-PROJECTS"].map((e,s)=>(0,t.jsx)("li",{className:"cursor-pointer",children:(0,t.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},s))}),(0,t.jsx)("span",{className:"text-black text-opacity-40  mt-10",children:"\xa9 Gu Minuk. All rights reserved. | 이 페이지는 포트폴리오 용도로 제작되었습니다."})]})}var r=l(2265);function n(){let e=(0,r.useMemo)(()=>["INFO","SKILL","PROJECT","CERTIFICATE & GITHUB"],[]);return(0,t.jsx)("nav",{className:"sticky top-0 w-full bg-slate-200 rounded-md z-50 lg:hidden shadow-sm ",children:(0,t.jsx)("ul",{className:"text-sm sm:text-lg text-center w-full flex items-center py-2",children:e.map((e,s)=>{let l=e.toLowerCase().replace(/ & /g,"-").replace(/\s+/g,"-");return(0,t.jsx)("li",{className:"w-full sm:px-4",children:(0,t.jsx)("a",{href:"#".concat(l),className:"block py-1 px-2 sm:py-3 sm:px-4 rounded-lg transition-all hover:bg-slate-700 hover:text-white ",children:e})},s)})})})}var c=l(4599),i=l(5127),o=l(6648),d=l(1942),x=l(9824),m=l(357);let h=["production"===m.env.STATE?"/portfolio/캡처.PNG":"/캡처.PNG","production"===m.env.STATE?"/portfolio/모달.PNG":"/모달.PNG","production"===m.env.STATE?"/portfolio/커뮤니티.PNG":"/커뮤니티.PNG","production"===m.env.STATE?"/portfolio/한줄.PNG":"/한줄.PNG"],p=["production"===m.env.STATE?"/portfolio/홈.PNG":"/홈.PNG","production"===m.env.STATE?"/portfolio/모집 1.PNG":"모집 1.PNG","production"===m.env.STATE?"/portfolio/프로젝트1.PNG":"/프로젝트1.PNG","production"===m.env.STATE?"/portfolio/프로필변경1.PNG":"/프로필변경1.PNG"];function j(e){let{handleClick:s,isClicked:l}=e,[a,n]=(0,r.useState)(0),[j,f]=(0,r.useState)(0),[u,g]=(0,r.useState)(!1),[N,b]=(0,r.useState)(!1),w=e=>{N||(g(!1),b(!0),1==e?n(e=>e===h.length-1?e:e+1):f(e=>e===h.length-1?e:e+1),setTimeout(()=>{b(!1)},500))},v=e=>{N||(g(!0),b(!0),1==e?n(e=>0===e?e:e-1):f(e=>0===e?e:e-1),setTimeout(()=>{b(!1)},500))},y={start:e=>({opacity:0,x:e?-400:400,transition:{duration:.5,ease:"easeInOut"}}),middle:{opacity:1,x:0,transition:{duration:.5,ease:"easeInOut"}},end:e=>({opacity:0,x:e?400:-400,transition:{duration:.5,ease:"easeInOut"}})};return(0,t.jsxs)("section",{id:"other-projects",className:"flex flex-col px-1 sm:px-0 min-h-screen items-center py-60 relative bg-gray-50 ",children:[(0,t.jsx)(c.E.h2,{className:"text-4xl font-bold mb-16 text-center text-gray-900",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:"Other Projects"}),(0,t.jsxs)("div",{className:"w-full lg:w-2/3 mb-20 flex flex-col shadow-xl items-center p-10 rounded-lg space-y-5 border-2 border-solid border-blue-200",children:[(0,t.jsx)("h3",{className:"text-3xl font-bold text-center",children:"BOOX - 책 리뷰 및 커뮤니티 사이트"}),(0,t.jsx)("span",{className:"text-black text-opacity-40 text-center",children:"2024.05~2024.06 (1人 프로젝트)"}),(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row  w-full justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-col w-full ",children:[(0,t.jsx)("div",{className:"relative h-96 w-full  overflow-hidden",children:(0,t.jsx)(i.M,{initial:!1,custom:u,children:h.map((e,s)=>s===a?(0,t.jsx)(c.E.div,{custom:u,initial:"start",animate:"middle",exit:"end",variants:y,transition:{duration:.5},className:"absolute top-0 left-0 h-full w-full bg-black",children:(0,t.jsx)(o.default,{src:e,alt:"Slide ".concat(s),fill:!0,style:{objectFit:"contain"}})},e):null)})}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-center mt-10",children:[(0,t.jsx)("button",{onClick:()=>v(1),className:"  p-2",children:(0,t.jsx)(x.u1R,{className:"size-6"})}),(0,t.jsxs)("span",{children:[a+1,"/",h.length]}),(0,t.jsx)("button",{onClick:()=>w(1),className:"  p-2",children:(0,t.jsx)(x.hjJ,{className:"size-6"})})]})]}),(0,t.jsxs)("div",{className:"w-full sm:w-3/5 sm:pl-10 flex flex-col text-lg",children:[(0,t.jsxs)("div",{className:"space-y-5 mt-5 sm:mt-0 flex flex-col mb-5",children:[(0,t.jsx)("span",{children:"책에 대해 소통하고 싶은 사람들을 위한 리뷰 및 커뮤니티 웹사이트입니다. 블로그의 책 리뷰는 한 사람만의 의견이고 책 ott 서비스를 이용하지 않는 사람은 원하는 책의 리뷰를 보기 어렵기 때문에 이 사이트를 만들었습니다."}),(0,t.jsx)("span",{children:"빠른 렌더링 속도와 SEO 최적화를 위해 Next.js를 사용했습니다. tailwind를 사용해 스타일링을 빠르게 적용할 수 있었고 framer-motion을 통해 interactive함을 더했습니다."}),(0,t.jsx)("span",{children:"RESTful한 API를 만드는 데에 초첨을 맞췄습니다. 인증에는 passport와 jwt를 사용했고 accessToken과 refreshToken을 따로 발급해 보안성을 높였습니다."})]}),(0,t.jsx)("a",{href:"production"===m.env.STATE?"https://khs08280.github.io/portfolio/boox":"/boox",children:(0,t.jsxs)("div",{onClick:s,className:"p-2 hover:bg-gray-800 transition-colors cursor-pointer mb-5 flex items-center px-4 bg-black rounded-md w-fit text-blue-300",children:["포트폴리오 자세히 보기"," ",(0,t.jsx)(x.ntD,{className:"size-6 ml-2"})," "]})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"주요 기능"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"책 별로 리뷰 확인 및 리뷰 작성, 책의 장르별로 커뮤니티 활동 가능,팔로우 한 유저들의 활동을 sns처럼 모아보기"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"GitHub"]}),(0,t.jsx)("a",{target:"blank",className:"underline text-blue-300 hover:text-blue-400 transition-colors overflow-hidden whitespace-nowrap text-ellipsis",style:{width:"calc(100% - 10rem)"},href:"https://github.com/khs08280/Book_Review",children:"https://github.com/khs08280/Book_Review"})]}),(0,t.jsxs)("li",{className:"flex  items-start justify-between",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"Frontend"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"Next.js, recoil, react-query, tailwind, framer-motion"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"Backend"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"Express.js, passport, jwt"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"DB"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"MongoDB, mongoose"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"Deployment"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"S3, cloudfront, EC2"})]})]})]})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-2/3 flex flex-col items-center shadow-xl p-10 rounded-lg space-y-5 border-2 border-solid border-blue-200",children:[(0,t.jsx)("h3",{className:"text-3xl font-bold  text-center sm:text-start",children:"Synergy - 개발자들을 위한 프로젝트 매칭 사이트"}),(0,t.jsx)("span",{className:"text-black text-opacity-40 text-center",children:"2023.05~2023.11 (3人 프로젝트, Front 1人, Back 2人)"}),(0,t.jsxs)("div",{className:" flex flex-col sm:flex-row  w-full justify-between",children:[(0,t.jsxs)("div",{className:"flex flex-col w-full ",children:[(0,t.jsx)("div",{className:"relative h-96 w-full  overflow-hidden",children:(0,t.jsx)(i.M,{initial:!1,custom:u,children:p.map((e,s)=>s===j?(0,t.jsx)(c.E.div,{custom:u,initial:"start",animate:"middle",exit:"end",variants:y,transition:{duration:.5},className:"absolute top-0 left-0 h-full w-full bg-black place-content-end ",children:(0,t.jsx)(o.default,{src:e,alt:"Slide ".concat(s),fill:!0,style:{objectFit:"contain"}})},e):null)})}),(0,t.jsxs)("div",{className:"flex w-full items-center justify-center mt-10",children:[(0,t.jsx)("button",{onClick:()=>v(2),className:"  p-2",children:(0,t.jsx)(x.u1R,{className:"size-6"})}),(0,t.jsxs)("span",{children:[j+1,"/",p.length]}),(0,t.jsx)("button",{onClick:()=>w(2),className:"  p-2",children:(0,t.jsx)(x.hjJ,{className:"size-6"})})]})]}),(0,t.jsxs)("div",{className:"w-full sm:w-3/5 sm:pl-10 flex flex-col mt-5 sm:mt-0 text-lg",children:[(0,t.jsxs)("div",{className:"space-y-5 flex flex-col mb-5",children:[(0,t.jsx)("span",{children:"개발자들의 사이드 프로젝트를 위한 팀원 매칭 웹사이트입니다. 기존 매칭 사이트에서의 아쉬운 점을 보완하여 만들었습니다."}),(0,t.jsx)("span",{children:"처음 시작할 때는 CORS 문제부터 난관이었지만 하나하나 해결해 나감으로써 팀원과의 소통, 백엔드로의 요청 방법 등 많은 것을 배울 수 있었던 프로젝트였습니다. styled-component를 사용해 코드 가독성을 높였습니다."})]}),(0,t.jsx)("a",{target:"_blank",href:"https://github.com/khs08280/capstone",children:(0,t.jsxs)("div",{className:"p-2 hover:bg-gray-800 transition-colors cursor-pointer mb-5 flex items-center px-4 bg-black rounded-md w-fit text-blue-300",children:["ReadMe에서 자세히 보기"," ",(0,t.jsx)(x.ntD,{className:"size-6 ml-2"})," "]})}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"맡은 역할"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"FrontEnd, 다자인"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"주요 기능"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"프로젝트 매칭을 위해 모집글을 작성, 모집하는 포지션과 스택, 기간 등을 설정, 모집글을 작성한 유저와 실시간 대화 기능"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"GitHub"]}),(0,t.jsx)("a",{target:"blank",className:"underline  text-blue-300 hover:text-blue-400 transition-colors overflow-hidden whitespace-nowrap text-ellipsis",style:{width:"calc(100% - 10rem)"},href:"https://github.com/khs08280/capstone",children:"https://github.com/khs08280/capstone"})]}),(0,t.jsxs)("li",{className:"flex  items-start justify-between",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"Frontend"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"React.js, redux, styled-component, axios"})]}),(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsxs)("span",{className:"flex items-center w-40",children:[(0,t.jsx)(d.l_A,{className:"mr-2"}),"Deployment"]}),(0,t.jsx)("span",{style:{width:"calc(100% - 10rem)"},children:"Netlify"})]})]})]})]})]})]})}var f=l(357);function u(){let e=(0,r.useMemo)(()=>["TRIPTALK","OTHER PROJECTS"],[]),[s,l]=(0,r.useState)("");return(0,r.useEffect)(()=>{let s=()=>{let s=e.map(e=>document.getElementById(e.toLowerCase().replace(/ /g,"-"))).find(e=>{if(!e)return!1;let s=e.getBoundingClientRect();return s.top<=100&&s.bottom>=100});s&&l(s.id)};return window.addEventListener("scroll",s),s(),()=>{window.removeEventListener("scroll",s)}},[e]),(0,t.jsxs)("nav",{className:"bg-gradient-to-b from-slate-800 to-slate-600 w-80 hidden lg:flex flex-col items-center py-10 fixed h-full top-0 left-0 overflow-hidden shadow-lg",children:[(0,t.jsx)("div",{className:"rounded-full overflow-hidden border-4 border-white shadow-md mb-8",children:(0,t.jsx)(o.default,{src:"production"===f.env.STATE?"/portfolio/취업사진.JPG":"/취업사진.JPG",alt:"profile",width:200,height:270,className:"object-cover"})}),(0,t.jsx)("ul",{className:"text-lg text-center w-full space-y-2",children:e.map((e,l)=>{let a=e.toLowerCase().replace(/ /g,"-");return(0,t.jsx)("li",{className:"w-full px-4",children:(0,t.jsx)("a",{href:"#".concat(a),className:"block py-3 px-4 rounded-lg transition-all ".concat(s===a?"bg-green-500 text-white shadow-md":"text-gray-300 hover:bg-slate-700 hover:text-white"),children:e})},l)})}),(0,t.jsx)("a",{href:"https://linen-ricotta-970.notion.site/bde65fd5104d4b00bb4d8757fdb106ec",target:"_blank",rel:"noopener noreferrer",className:"text-white cursor-pointer hover:text-blue-300 transition-colors mt-4",children:"이력서 파일을 찾고 계시다면?"}),(0,t.jsx)("a",{href:"https://github.com/khs08280",target:"_blank",rel:"noopener noreferrer",className:"mt-4",children:(0,t.jsx)(d.hJX,{className:"text-4xl text-white cursor-pointer hover:text-blue-300 transition-colors"})})]})}let g=[{name:"Java 21",image:"자바.png"},{name:"Spring Boot",image:"스프링부트.png"},{name:"Spring Security",image:"스프링시큐리티.png"},{name:"Spring Data JPA",image:"jpa.jpg"},{name:"MySql",image:"mysql.png"},{name:"JUnit5",image:"junit.jpeg"},{name:"Docker",image:"docker.webp"},{name:"Jenkins",image:"jenkins.png"},{name:"Ncp Server, Container Registry",image:"ncp.png"},{name:"React",image:"react.png"},{name:"Redux",image:"redux.png"},{name:"Tailwind CSS",image:"tailwind.png"}];var N=l(357),b=()=>(0,t.jsxs)("div",{id:"triptalk",className:"flex flex-col items-center py-10",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold mb-10",children:"Triptalk"}),(0,t.jsxs)("div",{className:"w-full max-w-6xl px-4",children:[(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"프로젝트 소개"}),(0,t.jsxs)("p",{className:"text-gray-700 mb-8 text-lg",children:["Triptalk은 ",(0,t.jsx)("span",{className:"font-bold",children:"실시간 채팅과 Open Api를 활용한 장소 검색으로 여행 일정을 계획하는 사이트"}),"입니다.",(0,t.jsx)("br",{})," 같이 계획을 짜고 있다는 느낌을 주기 위해 실시간 채팅 기능을 넣었고, 여행 장소를 찾을 수 있게 네이버 검색 api와 Web Dinamic Maps을 사용했습니다. 찾은 여행 장소를 시간, 날짜 정보 등을 추가해 계획을 생성할 수 있게 만들었습니다."]}),(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"프로젝트 정보"}),(0,t.jsxs)("div",{className:"flex items-center mb-8 gap-4 text-lg",children:[(0,t.jsx)("span",{className:"font-semibold ",children:"프로젝트 기간: "}),(0,t.jsx)("p",{className:"text-gray-700 ",children:"2025.02 ~ 2025.03"})]}),(0,t.jsxs)("div",{className:"flex items-center mb-8 gap-4 text-lg",children:[(0,t.jsx)("span",{className:"font-semibold",children:"참여 인원: "}),(0,t.jsx)("p",{className:"text-gray-700",children:" 1인"})]}),(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"사용 기술"}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 border-2 border-gray-200 rounded-xl bg-gray-50 auto-rows-[200px]",children:g.map((e,s)=>(0,t.jsxs)("div",{className:"flex flex-col items-center p-4 bg-white rounded-lg shadow-sm justify-center",children:[(0,t.jsx)("div",{className:"w-[100px] h-[100px] relative",children:(0,t.jsx)(o.default,{src:e.image,alt:e.name,fill:!0,className:"object-contain"})}),(0,t.jsx)("span",{className:"mt-4 text-sm font-medium text-gray-600",children:e.name})]},s))}),(0,t.jsxs)("div",{className:"mt-12 flex flex-col items-center",children:[(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-8 self-start",children:"아키텍쳐 구조"}),(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/아키텍쳐 구조.png":"/아키텍쳐 구조.png",alt:"architecture",width:1e3,height:800,className:"object-cover rounded-lg shadow-lg"})]}),(0,t.jsxs)("div",{className:"mt-12 space-y-12",children:[(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-8 self-start",children:"상세 코드"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold mb-4",children:"채팅방 입장 코드"}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/서버joinroom.png":"/서버joinroom.png",alt:"architecture",width:800,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"서버 채팅방 입장 코드"}),(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/프론트joinroom.png":"/프론트joinroom.png",alt:"architecture",width:700,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"프론트 채팅방 입장 코드"}),(0,t.jsxs)("span",{className:"self-start text-lg break-words whitespace-normal",children:["채팅방에 입장했을 때 발생하는 이벤트 리스너의 코드입니다. 먼저 접속한 채팅방에 유저를 참가시킵니다. 그리고 유저가 이전에 참가했던 채팅방에 접속을 할 시에는 채팅방에 유저를 참가시키지 않고 이전 메세지들을 불러오고 이벤트를 전달합니다.",(0,t.jsx)("br",{}),"만약 처음 채팅방에 참가하는 유저라면 채팅방 내부에 새 유저가 참가했다는 메세지를 전달하고 참가한 유저를 DB에 저장합니다. 그리고 이전 메세지들을 불러와 전달합니다."]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold mb-4",children:"전역 예외 처리 코드"}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/전역예외.png":"/전역예외.png",alt:"architecture",width:800,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"전역 예외 핸들러 코드(일부)"}),(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/controller.png":"/controller.png",alt:"architecture",width:700,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"컨트롤러 코드"}),(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/service.png":"/service.png",alt:"architecture",width:700,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"서비스 계층 예외 처리 코드"}),(0,t.jsx)("span",{className:"self-start text-lg break-words whitespace-normal",children:"ControllerAdvice 어노테이션을 통해 컨트롤러러 계층에서 반복되는 예외처리 작업을 줄였습니다. 예외 처리 또한 핵심 비즈니스 로직이기 때문에 서비스 계층의 코드에서 예외 처리를 해주었습니다. 컨트롤러에서는 요청을 받아 서비스 계층에 전달하고 서비스 계층에서의 응답을 프론트에 전달하는 역할만 수행하하게 하였습니다."})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold mb-4",children:"리팩토링"}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/리팩토링.png":"/리팩토링.png",alt:"architecture",width:800,height:600,className:"object-cover rounded-lg shadow-lg"}),(0,t.jsx)("span",{className:" text-gray-500",children:"Extract Method 리팩토링"}),(0,t.jsx)("span",{className:"self-start text-lg break-words whitespace-normal",children:"코드 가독성을 높이고 중복되는 코드를 줄이기 위해해 메서드를 분리하였습니다."})]})]})]}),(0,t.jsxs)("div",{className:"mt-12 space-y-12",children:[(0,t.jsx)("h3",{className:"text-3xl font-semibold mb-8 self-start",children:"트러블 슈팅"}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold",children:"\uD83D\uDEA8문제 배경"}),(0,t.jsxs)("p",{className:"text-lg mb-6",children:[(0,t.jsx)("span",{className:"font-bold",children:"배포 서버에서 gradle 빌드 중 20분,30분이 지나도 진행률이 멈춰있는 현상"}),"이 발생했습니다.",(0,t.jsx)("br",{}),"로컬에서 테스트 했었을 때는 정상적으로 동작한 것을 바탕으로 배포 서버에서의 문제라고 생각했습니다."]}),(0,t.jsx)(o.default,{src:"production"===N.env.STATE?"/portfolio/빌드오류.png":"/빌드오류.png",alt:"architecture",width:300,height:400,className:"object-cover rounded-lg shadow-lg"})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold",children:"\uD83C\uDF1F해결 과정"}),(0,t.jsxs)("p",{className:"text-lg mb-6",children:["문제 발생 후, 먼저 ",(0,t.jsx)("span",{className:"font-bold",children:"NCP 콘솔의 Server 모니터링"}),"을 통해 CPU, 메모리, 디스크 상태를 확인했습니다.",(0,t.jsx)("br",{})," 확인 결과, 메모리 그래프가 최고점을 기록한 후 모든 상태 그래프가 중단된 것을 통해 ",(0,t.jsx)("span",{className:"font-bold",children:"메모리 부족"}),"이 서버 오류의 원인임을 파악했습니다.",(0,t.jsx)("br",{}),"서버 스펙 수정이나 다른 부분에서의 메모리 절감이 어려운 상황이었기 때문에, ",(0,t.jsx)("span",{className:"font-bold",children:"스왑 메모리 활용 방안"}),"을 떠올렸습니다.",(0,t.jsx)("br",{})," 스왑 메모리는 디스크 공간을 활용하여 메모리 부족 문제를 해결할 수 있기 때문에 관련 자료를 찾아 스왑 메모리 설정 방법을 추가적으로 조사하였고,",(0,t.jsx)("span",{className:"font-bold",children:"기존 1GB였던 스왑 메모리 용량을 2GB로 증설"}),"하여 문제를 해결했습니다."]})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("h4",{className:"text-2xl font-semibold",children:"\uD83D\uDCD6해결 후 회고"}),(0,t.jsxs)("p",{className:"text-lg mb-6",children:["한정된 서버 자원을 효율적으로 활용하기 위해서는 메모리 관리 방법을 알아야 한다는 것을 알게 된 트러블 슈팅이었습니다.",(0,t.jsx)("br",{}),"로컬에서 정상적으로 테스트를 수행했더라도 배포 환경에서는 문제가 발생할 수도 있기 때문에 배포 환경에서의 테스트의 중요성을 알게 되었습니다."]})]})]})]})]});function w(){let[e,s]=(0,r.useState)(!1);return(0,t.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,t.jsx)(u,{}),(0,t.jsxs)("main",{className:"lg:ml-80 sm:px-10 ",children:[(0,t.jsx)(i.M,{mode:"wait",children:(0,t.jsxs)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},children:[(0,t.jsx)(n,{}),(0,t.jsx)(b,{}),(0,t.jsx)(j,{handleClick:()=>{s(!e)},isClicked:e})]})}),(0,t.jsx)(a,{}),(0,t.jsxs)("div",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:" fixed bottom-5 right-10 bg-slate-100 cursor-pointer w-16 h-16 rounded-full border-2 border-solid border-green-500 flex flex-col justify-center items-center",children:[(0,t.jsx)(d.ZTc,{className:"size-8 text-green-500"}),(0,t.jsx)("span",{className:"text-sm text-green-500",children:"UP"})]})]})]})}}},function(e){e.O(0,[452,699,173,829,971,23,744],function(){return e(e.s=8482)}),_N_E=e.O()}]);