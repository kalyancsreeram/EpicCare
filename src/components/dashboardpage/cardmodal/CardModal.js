import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import "./CardModal.scss";

export default function CardModal({ open, handleClose, modalData }) {
  const { title, description, doi, image, altText } = modalData;
  // const imgSrc = require(`../../../assets/images/${image}`);
  return (
    <Modal open={open} onClose={handleClose} className="card-modal">
      <div className="modal__content">
        <Card className="card">
          {/* //TODO: add image */}
          {/* <CardMedia
            component="img"
            height="140"
            src={imgSrc}
            alt={altText}
            className="card__img"
          /> */}
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
            <CardActions className="card__actions">
              <Button
                size="medium"
                className="actions__button"
                onClick={handleClose}
              >
                Close
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
}
