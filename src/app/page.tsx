import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Project from "@/components/Project";
import SideNav from "@/components/SideNav";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="px-10 flex">
      <SideNav />
      <main className="ml-80 flex-1 px-10 bg-red-400 ">
        <Info />
        <Skill />
        <Project />
        <Certificate />
        <Footer />
      </main>
    </div>
  );
}
