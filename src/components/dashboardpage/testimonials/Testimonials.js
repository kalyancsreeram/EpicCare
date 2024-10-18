import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Testimonials.scss";
import { Typography } from "@mui/material";
import { homePageData } from "../../../data/data";

function Testimonials() {
  const { testimonials } = homePageData;
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      interval={6100}
    >
      {testimonials.map(({ name, testimony }) => (
        <div className="carousel__item-container">
          <div className="carousel__item">
            <h3 className="item__heading">{name}</h3>
            <Typography
              className="item__testimonial"
              variant="p"
              color="text.secondary"
            >
              {testimony}
            </Typography>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Testimonials;
