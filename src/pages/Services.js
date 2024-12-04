import React from "react";
import ServicesComp from "../components/servicescomp/ServicesComp";
import useScrollToTop from "../hooks/useScrollToTop";

function Services() {
  useScrollToTop();

  return (
    <div style={{ minHeight: "100vh" }}>
      <ServicesComp />
    </div>
  );
}

export default Services;
