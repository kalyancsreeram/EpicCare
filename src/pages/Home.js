import React from "react";
import Testimonials from "../components/dashboardpage/testimonials/Testimonials";
import Welcome from "../components/dashboardpage/welcomeComp/Welcome";
import CardsComponent from "../components/dashboardpage/cardscomp/CardsComponent";

function Home() {
  return (
    <div className="home-page">
      <Welcome></Welcome>
      <CardsComponent></CardsComponent>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
