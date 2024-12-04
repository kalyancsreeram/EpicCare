import React from "react";
import "./Welcome.scss";
// import Typography from "@mui/material/Typography";

import WelcomeImg from "../../../assets/images/welcomeImg.jpg";
import CompanyLogo from "../../../assets/images/CompanyLogoEdited-in.png";

import { homePageData } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Welcome() {
  const { companyInfo } = homePageData;
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img className="welcome__img" alt="SeizureCare" src={WelcomeImg} />
        <div className="welcome__message">
          {/* <Typography
            className="main-title"
            gutterBottom
            variant="h1"
            component="div"
          >
            SeizureCare
          </Typography> */}
          <img src={CompanyLogo} alt="SeizureCare Logo" className="main-logo" />
          <div className="about-section">
            <p className="home-text--default headline">
              {companyInfo.headline}
            </p>
            <p className="home-text--default">{companyInfo.intro}</p>
            <p className="home-text--default">{companyInfo.mission}</p>
            <p className="home-text--default">{companyInfo.values}</p>
            <p className="home-text--default">{companyInfo.vision}</p>
          </div>
          <div class="info-section">
            <div class="info-stats">
              <div class="stat">
                <h2>24/7</h2>
                <p>Support Available</p>
              </div>
              <div class="stat">
                <h2>1000+</h2>
                <p>Patients Helped</p>
              </div>
              <div class="stat">
                <h2>15+</h2>
                <p>Years Experience</p>
              </div>
            </div>
            <div class="info-actions">
              <Button
                variant="contained"
                size="large"
                className="btn btn-primary"
                onClick={() => navigate("/services")}
              >
                Explore Services
              </Button>
              <Button
                variant="outlined"
                size="large"
                className="btn btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
