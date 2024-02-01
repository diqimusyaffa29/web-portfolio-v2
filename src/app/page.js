import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-14 lg:mt-28">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  );
}
