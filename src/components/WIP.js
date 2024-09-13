import React from "react";

import Typography from "@mui/material/Typography";

const WIP = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "50px",
        textAlign: "center",
        margin: "25vh 50vh"
      }}
    >
      <Typography
        className="main-title"
        gutterBottom
        variant="h2"
        component="div"
        style={{
          color: "#35294D",
        }}
      >
        Work in Progress! 🚧
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        className="research_notes_text"
        style={{
          fontSize: "20px",
        }}
      >
        <p>
          This page is currently a work in progress. We're working to get it
          ready for you.
        </p>
        <p>Please check back soon!</p>
      </Typography>
    </div>
  );
};

export default WIP;
