import React from "react";

import "./ServicesComp.scss";
import Typography from "@mui/material/Typography";
import { servicesData } from "../../data/data";

const ServicesComp = () => {
  return (
    <div className="services-container">
      <div className="intro">
        <Typography
          className="main-title"
          gutterBottom
          variant="h4"
          component="div"
        >
          Services
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="services-text--default"
        >
          SeizureCare provides cutting-edge, remote care through a range of
          specialized services, delivering comprehensive support to providers
          dealing with epilepsy patients.
        </Typography>
      </div>
      <div className="services-panel-container">
        {servicesData.map(({ title, desc, image }, index) => {
          const imgSrc = require(`../../assets/images/${image}`);
          return (
            <div className="service-container" key={index}>
              <div className="service-image">
                <img alt="Seizure Care Service" src={imgSrc} />
              </div>
              <div className="service-text">
                <Typography
                  className="service-text--title"
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
        id="servicesTextBottom"
      >
        <b>
          In summary, we offer a holistic approach to epilepsy management,
          combining expert care, informative education, and innovative research
          to address the diverse needs of individuals with epilepsy.
        </b>
      </Typography>
    </div>
  );
};

export default ServicesComp;
