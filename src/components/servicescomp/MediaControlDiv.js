import React from "react";
import Typography from "@mui/material/Typography";
import "./ServicesComp.scss";

function MediaControlDiv(props) {
  let styleString =
    props.styleLR === "Left"
      ? "mediaDivContainer mediaDivLeft"
      : "mediaDivContainer mediaDivRight";
  return (
    <div className={styleString}>
      <img alt="Seizure Care Service" src={props.source} />
      <div className="mediaDivTextContainer">
        <Typography className="service-title" component="div" variant="h6">
          {props.title}
        </Typography>
        <Typography
          variant="p"
          color="text.secondary"
          component="div"
          className="services_text"
        >
          {props.desc}
        </Typography>
      </div>
    </div>
  );
}

export default MediaControlDiv;
