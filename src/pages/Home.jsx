import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Competencies from "../sections/Competencies";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import { scrollToId } from "../lib/asset";

export default function Home() {
  const { state } = useLocation();

  // Datang dari halaman lain (mis. detail proyek) -> langsung ke section tujuan
  useEffect(() => {
    const target = state?.scrollTo;
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }
    const t = setTimeout(() => scrollToId(target), 60);
    return () => clearTimeout(t);
  }, [state]);

  return (
    <>
      <Hero />
      <About />
      <Competencies />
      <Experience />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
    </>
  );
}
