import React from "react";
import Testimonials from "../../components/dashboardpage/testimonials/Testimonials";
import Welcome from "../../components/dashboardpage/welcomeComp/Welcome";
import CardsComponent from "../../components/dashboardpage/cardscomp/CardsComponent";
import "./Home.scss";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import WhyChooseSection from "../../components/whychoosesection/WhyChooseSection";

function Home() {
  const navigate = useNavigate();

  useScrollToTop();

  return (
    <div className="home-page">
      <Welcome />
      {/* <div className="cta-section">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="cta-title"
        >
          Order Services
        </Typography>
        <p className="cta-description">
          Need help with EEG, EMU, or Epilepsy Care? Fill out our service order
          form, and our team will reach out to confirm your request. Experience
          seamless support tailored to your needs.
        </p>
        <Button
          variant="contained"
          size="large"
          className="cta-button"
          onClick={() => navigate("/order")}
        >
          Order
        </Button>
      </div> */}
      <WhyChooseSection />
      <CardsComponent />
      <Testimonials />
      <div className="advanced-care-section">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="advanced-care-title"
        >
          Experience the future of Epilepsy Care
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          className="advanced-care-description"
        >
          Join the growing network of leading healthcare providers leveraging
          SeizureCare's advanced epilepsy solutions.
        </Typography>
        <div className="button-group">
          <Button
            variant="contained"
            size="large"
            className="primary-button"
            onClick={() => navigate("/contact")}
          >
            Schedule a Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            className="secondary-button"
            onClick={() => navigate("/contact")}
          >
            View Sample Reports
          </Button>
        </div>
      </div>
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
