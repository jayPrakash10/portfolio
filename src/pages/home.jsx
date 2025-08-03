import { lazy } from "react";

// Lazy load Sections
const HeroBanner = lazy(() => import("../sections/home/Banner"));
const About = lazy(() => import("../sections/home/About"));
const Experience = lazy(() => import("../sections/home/Experience"));
const Projects = lazy(() => import("../sections/home/Projects"));
const Contact = lazy(() => import("../sections/home/Contact"));

const Home = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
