import React from "react";

import "./styles.scss";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WorldMap from "../../assets/images/map.png";

function HomePageFooter() {
  return (
    <div className="homePageFooterContainer">
      <div className="address">
        <div className="addressText">
          <p>
            <b>SeizureCare</b>
          </p>
          <div className="countriesList">
            <a href="/">USA</a>
            <a href="/">India</a>
          </div>
        </div>
        <img className="worldMap" alt="SeizureCare" src={WorldMap} />

        {/* <img */}
      </div>
      <div className="footerLinks">
        <p className="link">
          <a href="/services">Services</a>
        </p>
        |
        <p className="link">
          <a href="/order">Order</a>
        </p>
        |
        <p className="link">
          <a href="/research">Research</a>
        </p>
        |
        <p className="link">
          <a href="/resources">Resources</a>
        </p>
        |
        <p className="link">
          <a href="/about">About</a>
        </p>
        |
        <p className="link">
          <a href="/contact-us">Contact</a>
        </p>
      </div>
      <div className="socialContainer">
        <FontAwesomeIcon className="fbIcon" icon={faFacebook} />
        <FontAwesomeIcon className="ytIcon" icon={faYoutubeSquare} />
        <FontAwesomeIcon className="linkedInIcon" icon={faLinkedin} />
      </div>
    </div>
  );
}

export default HomePageFooter;
