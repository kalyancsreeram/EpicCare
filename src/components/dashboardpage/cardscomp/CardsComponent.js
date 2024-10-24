import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { homePageData } from "../../../data/data";

import "./CardsComponent.scss";
import { Button, CardActions } from "@mui/material";
import CardModal from "../cardmodal/CardModal";

export default function CardsComponent() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { articlesData } = homePageData;

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

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

      {open && (
        <CardModal
          open={open}
          handleClose={handleModalClose}
          modalData={modalData}
        />
      )}

      <div className="home-cards-container">
        {articlesData.map(({ simplifiedTitle, image, altText }, index) => {
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
                  {simplifiedTitle}
                </Typography>
                <CardActions className="card__actions">
                  <Button
                    size="medium"
                    className="actions__button"
                    onClick={() => {
                      setModalData(articlesData[index]);
                      handleModalOpen();
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
