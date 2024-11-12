import React from "react";
import "./Welcome.scss";
import Typography from "@mui/material/Typography";

import WelcomeImg from "../../../assets/images/welcomeImg.jpg";

import { homePageData } from "../../../data/data";

function Welcome() {
  const { companyInfo } = homePageData;

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
        </div>
      </div>
    </div>
  );
}

export default Welcome;
