import React from "react";
import ResearchComp from "../components/research/ResearchComp";
import useScrollToTop from "../hooks/useScrollToTop";

function Research() {
  useScrollToTop();

  return (
    <div style={{ minHeight: "100vh" }}>
      <ResearchComp />
    </div>
  );
}

export default Research;
