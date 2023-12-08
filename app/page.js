import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
