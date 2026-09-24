import BouncingCubesBackground from "@/component/background";
import AboutSection from "@/component/home/about";
import HomeBanner from "@/component/home/banner";
import ClientSection from "@/component/home/clients";
import Contact from "@/component/home/contact";
import Popups from "@/component/home/pop";
import ProjectsSection from "@/component/home/projects";
import ServicesSection from "@/component/home/services";
import ToolSection from "@/component/home/tools";

// page.tsx
export default function Home() {
  return (
    <div className="relative bg-[#ECF0F3]">
      {/* Background Layer */}
      <BouncingCubesBackground />
      <Popups/>
        <HomeBanner />
        <AboutSection />
        <ServicesSection />
        <ToolSection />
        <ClientSection />
        <ProjectsSection /><Contact/>
    </div>
  );
}