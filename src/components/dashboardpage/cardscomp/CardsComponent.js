import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { homePageData } from "../../../data/data";

import "./CardsComponent.scss";

export default function CardsComponent() {
  const { articlesData } = homePageData;

  return (
    <>
      <div className="cards-component-title-container">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="cards-component-title"
        >
          Latest developments in Epilepsy:
        </Typography>
      </div>

      <div className="cards-container">
        {articlesData.map(({ title, description, doi, image, altText }) => {
          const imgSrc = require(`../../../assets/images/${image}`);
          return (
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardMedia
                component="img"
                height="140"
                src={imgSrc}
                alt={altText}
                className="card__img"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="card__title"
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="card__desc"
                >
                  {description}
                </Typography>
                {doi && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card__doi"
                  >
                    {doi}
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
