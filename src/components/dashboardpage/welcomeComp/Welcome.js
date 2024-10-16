import React from "react";
import "./Welcome.scss";
import Typography from "@mui/material/Typography";

import WelcomeImg from "../../../assets/images/welcomeImg.jpg";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img className="welcome__img" alt="SeizureCare" src={WelcomeImg} />
        <div className="welcome__message">
          <Typography
            className="message__text"
            gutterBottom
            variant="p"
            component="div"
          >
            <blockquote>
              <p id="ceoMessage">
                <b>Welcome to SeizureCare</b>, an American healthcare company
                revolutionizing remote epilepsy care. Our team of esteemed
                American board-certified epileptologists earns global trust and
                respect from healthcare professionals through an unwavering
                commitment to exceptional patient care and life-changing
                outcomes. By harnessing the latest advancements in medical
                technology, we're redefining access to epilepsy services while
                maintaining the highest standards of patient privacy and
                confidentiality. Guided by our core values of integrity,
                empathy, quality, innovation, and refinement, we're dedicated to
                reshaping the boundaries of epilepsy care and setting a new
                benchmark for patient experience and success.
                <footer>
                  <cite>Chief Executive Officer</cite>
                </footer>
              </p>
            </blockquote>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
