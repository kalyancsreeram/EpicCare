import React, { Fragment } from "react";

import "./Footer.scss";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WorldMap from "../../assets/images/map.png";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../data/data";
import { TbExternalLink } from "react-icons/tb";

const getNavLinks = () => {
  return navLinks.map((item, index) => {
    let link = ``;
    if (item === "Home") {
      link = `/`;
    } else if (item === "Login") {
      link = `https://app.seizurecarenet.com/`;
    } else {
      link = `/${item.toLowerCase()}`;
    }
    return (
      <Fragment key={index}>
        <NavLink to={link}>
          <span className="link">
            {item}
            {item === "Login" && (
              <TbExternalLink className="external-link-icon" size={20} />
            )}
          </span>
        </NavLink>
        {index !== navLinks.length - 1 && "|"}
      </Fragment>
    );
  });
};

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="address">
          <div className="address-text">
            <p>
              <b>SeizureCare</b>
            </p>
            <div className="countries-list">
              <a href="https://seizurecarenet.com">USA</a>
              <a href="https://seizurecarenet.in">India</a>
            </div>
          </div>
          <img className="world-map" alt="SeizureCare" src={WorldMap} />
        </div>
        <div className="footer-links">{getNavLinks()}</div>
        <div className="socials-container">
          <FontAwesomeIcon className="icon-fb" icon={faFacebook} />
          <FontAwesomeIcon className="icon-yt" icon={faYoutubeSquare} />
          <FontAwesomeIcon className="icon-in" icon={faLinkedin} />
        </div>
      </div>
      <div className="footer-bottom-container">
        Copyright &#169; 2024 SeizureCare | Privacy Notice
      </div>
    </div>
  );
};

export default Footer;
