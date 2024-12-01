import React from "react";
import "./Welcome.scss";
import Typography from "@mui/material/Typography";

import WelcomeImg from "../../../assets/images/welcomeImg.jpg";

import { homePageData } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Welcome() {
  const { companyInfo } = homePageData;
  const navigate = useNavigate();

  //TODO: Clean the unused code
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img className="welcome__img" alt="SeizureCare" src={WelcomeImg} />
        <div className="welcome__message">
          {/* <Typography
            className="message__text"
            gutterBottom
            variant="p"
            component="div"
          >
            <blockquote>
              <p id="ceoMessage">
                <b>Welcome to SeizureCare</b>
                <br />
                {companyInfo.intro}
                <footer>
                  <cite>Chief Executive Officer</cite>
                </footer>
              </p>
            </blockquote>
          </Typography> */}
          <Typography
            className="main-title"
            gutterBottom
            variant="h1"
            component="div"
          >
            Welcome to SeizureCare
          </Typography>
          <p className="home-text--default">{companyInfo.intro}</p>
          <p className="home-text--default">{companyInfo.serviceCommitment}</p>
          <p className="home-text--default">{companyInfo.futureVision}</p>

          <div className="cta-section">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              className="cta-title"
            >
              Order Services Easily
            </Typography>
            <p className="welcome__cta-description">
              Need help with EEG, EMU, or Epilepsy Care? Fill out our service
              order form, and our team will reach out to confirm your request.
              Experience seamless support tailored to your needs.
            </p>
            <Button
              variant="contained"
              size="large"
              className="cta-button"
              onClick={() => navigate("/order")}
            >
              Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
