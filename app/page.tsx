import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectSection />
        <SkillsSection/>
        <h2 className='text-4xl font-bold mb-7 mt-20 text-center' id='about'>About me</h2>
        <AboutSection />
        <EmailSection />
      </div>
        <Footer/>
    </main>
  );
}
