import React from "react";
import Testimonials from "../components/dashboardpage/testimonials/Testimonials";
import CEO from "../components/dashboardpage/ceocomp/CEO";
import CardsComponent from "../components/dashboardpage/cardscomp/CardsComponent";

function Home() {
  return (
    <div className="homePage">
      <CEO></CEO>
      <CardsComponent></CardsComponent>
      <Testimonials></Testimonials>
    </div>
  );
}

export default Home;
