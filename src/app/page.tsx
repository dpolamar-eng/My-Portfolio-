import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import EducationCertifications from "../components/EducationCertifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SectionTransition from "../components/SectionTransition";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6f3fb] text-[#1c1435]">
      <Navbar />
      <main className="flex-grow">
        <SectionTransition initialInView={true}>
          <Hero />
        </SectionTransition>

        <SectionTransition>
          <Experience />
        </SectionTransition>

        <SectionTransition>
          <Projects />
        </SectionTransition>

        <SectionTransition>
          <Skills />
        </SectionTransition>

        <EducationCertifications />

        <SectionTransition>
          <Contact />
        </SectionTransition>
      </main>

      <SectionTransition>
        <Footer />
      </SectionTransition>
    </div>
  );
}
