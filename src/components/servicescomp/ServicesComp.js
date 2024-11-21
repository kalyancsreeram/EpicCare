import React from "react";

import "./ServicesComp.scss";
import Typography from "@mui/material/Typography";
import { servicesPageData } from "../../data/data";

const ServicesComp = () => {
  return (
    <div className="services-container">
      <div className="intro">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          Services
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="services-text--default"
          id="servicesPageHeadline"
        >
          SeizureCare provides cutting-edge, remote care through a range of
          specialized services, delivering comprehensive support to providers
          dealing with epilepsy patients.
        </Typography>
      </div>
      <div className="services-panel-container">
        {servicesPageData.map(({ title, desc, image }, index) => {
          const imgSrc = require(`../../assets/images/${image}`);
          return (
            <div className="service-container" key={index}>
              <div className="service-image">
                <img alt="Seizure Care Service" src={imgSrc} />
              </div>
              <div className="service-text">
                <Typography
                  className="service-text--title"
                  gutterBottom
                  component="div"
                  variant="h6"
                >
                  {title}
                </Typography>
                <Typography
                  variant="p"
                  color="text.secondary"
                  component="div"
                  className="service-text--desc"
                >
                  {desc}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <Typography
        variant="body2"
        color="text.primary"
        className="services-text--default"
        id="servicesPageTextBottom"
      >
        In summary, we offer a holistic approach to epilepsy management,
        combining expert care, informative education, and innovative research to
        address the diverse needs of individuals with epilepsy.
      </Typography>
    </div>
  );
};

export default ServicesComp;
