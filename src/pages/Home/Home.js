import React from "react";
import Testimonials from "../../components/dashboardpage/testimonials/Testimonials";
import Welcome from "../../components/dashboardpage/welcomeComp/Welcome";
import CardsComponent from "../../components/dashboardpage/cardscomp/CardsComponent";
import "./Home.scss";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Welcome />
      <CardsComponent />
      <Testimonials />
      <div className="question-section">
        <div className="question-section__content">
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            className="question-section__title"
          >
            Have any questions?
          </Typography>
          <p className="question-section__sub-title">
            Our team is ready to assist you with any inquiries.
          </p>
        </div>
        <Button
          variant="contained"
          size="large"
          className="question-section__button"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Home;
