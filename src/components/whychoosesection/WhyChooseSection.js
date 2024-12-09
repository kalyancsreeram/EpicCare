import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { FaHeartbeat, FaCloud, FaVideo } from "react-icons/fa"; // Importing relevant icons
import "./WhyChooseSection.scss";
import { homePageData } from "../../data/data";

const WhyChooseSection = () => {
  const { services } = homePageData;

  // Add icons to services dynamically
  const serviceIcons = [<FaHeartbeat />, <FaCloud />, <FaVideo />];

  return (
    <div className="why-choose-section">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        className="why-choose-title"
      >
        Why Choose SeizureCare?
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        className="why-choose-subtitle"
      >
        Revolutionizing epilepsy care with state-of-the-art technology, 24/7
        accessibility, and trusted expertise.
      </Typography>

      <div className="service-cards">
        {services.map((service, index) => (
          <Card key={index} className="service-card" elevation={3}>
            <CardContent
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center align the content
                gap: "16px",
              }}
            >
              <div className="service-icon">{serviceIcons[index]}</div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="service-title"
              >
                {service.title}
              </Typography>
              <ul className="service-description">
                {service.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
