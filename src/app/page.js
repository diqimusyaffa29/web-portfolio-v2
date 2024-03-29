import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <Navbar />
      <div className="container mx-auto px-12 py-4  mt-14 lg:mt-28">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
      </div>
        <Footer/>
    </main>
  );
}
