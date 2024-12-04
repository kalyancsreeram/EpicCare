import React from "react";
import AboutComp from "../components/aboutcomp/AboutComp";
import useScrollToTop from "../hooks/useScrollToTop";

function About() {
  useScrollToTop();

  return (
    <div style={{ minHeight: "100vh" }}>
      <AboutComp />
    </div>
  );
}

export default About;
