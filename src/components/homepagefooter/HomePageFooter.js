import React from "react";

import "./styles.scss";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WorldMap from "../../assets/images/map.png";

const linkItems = [
  "Services",
  "Order",
  "Research",
  "Resources",
  "About",
  "Contact",
];

function HomePageFooter() {
  return (
    <div className="homePageFooterContainer">
      <div className="address">
        <div className="addressText">
          <p>
            <b>SeizureCare</b>
          </p>
          <div className="countriesList">
            <a href="https://seizurecarenet.com">USA</a>
            <a href="https://seizurecarenet.in">India</a>
          </div>
        </div>
        <img className="worldMap" alt="SeizureCare" src={WorldMap} />

        {/* <img */}
      </div>
      <div className="footerLinks">
        {linkItems.map((item, i) => {
          const link = `/${item.toLowerCase()}`;
          return (
            <>
              <p className="link">
                <a href={link}>{item}</a>
              </p>
              {i !== linkItems.length - 1 && "|"}
            </>
          );
        })}
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
