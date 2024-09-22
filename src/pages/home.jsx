import React, { lazy, Suspense } from "react";

const About = lazy(() => import("../sections/about"));
const Resume = lazy(() => import("../sections/resume"));
const Portfolio = lazy(() => import("../sections/portfolio"));

const Home = () => {
  return (
    <>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <Resume />
      </Suspense>
      <Suspense>
        <Portfolio />
      </Suspense>
    </>
  );
};

export default Home;
