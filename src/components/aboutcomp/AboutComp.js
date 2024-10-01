import React from "react";

import "./AboutComp.scss";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  FaBalanceScale,
  FaGem,
  FaHeart,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { coreValues } from "../../data/data";

const getIcon = (index, iconSize = 42) => {
  const valueIcons = [
    <FaBalanceScale size={iconSize} />,
    <FaHeart size={iconSize} />,
    <FaLightbulb size={iconSize} />,
    <FaUsers size={iconSize} />,
    <FaGem size={iconSize} />,
  ];

  return valueIcons[index];
};

const AboutComp = () => {
  return (
    <div className="about-container">
      <div className="intro">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          About Us
        </Typography>

        <div className="intro-notes">
          <p id="firstHeadLineBold">
            SeizureCare is an American Healthcare Company.
          </p>
          <Typography variant="body2" color="text.primary" id="firstHeadLine">
            Connecting medical professionals worldwide to epilepsy expertise and
            resources, our goal is to reduce the barriers and create a more
            equitable future for all those affected.
          </Typography>
        </div>
        <Typography
          variant="body2"
          color="text.primary"
          className="intro-notes"
        >
          Epilepsy impacts the lives of millions globally, yet inadequate access
          to care persists, hindered by unaffordable services and a scarcity of
          trained specialists. Closing this gap is crucial to transform the
          lives of those affected by epilepsy, ensuring timely and quality care
          for all who need it.
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="intro-notes"
        >
          SeizureCare achieves this goal with the expertise of American
          board-certified epileptologists and innovative remote software
          solutions, enabling efficient and accessible services anytime,
          anywhere.
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          className="intro-notes"
        >
          Additionally, SeizureCare strives to establish an efficient
          coordinating human organization and collaborate with various
          technology companies and NGO groups to make high-quality epilepsy care
          affordable and available to the needy.
        </Typography>

        <Typography
          className="intro-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          Our Mission
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          className="intro-notes"
        >
          We dedicated ourselves to the unrelenting quest for knowledge and
          discovery to transform epilepsy care by joining forces against
          epilepsy to crack the code of this complex condition. <br /> We
          believe in an inspirational research quote by Roosevelt -{" "}
          <span id="rooseveltQuote">
            <i>
              <q>Every doubt is an opportunity to discover.</q>
            </i>
          </span>
        </Typography>

        <Typography
          className="intro-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          Our Vision
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          className="intro-notes"
        >
          Our vision is to expand top-tier epilepsy remote services globally
          over the next five years, setting new standards in the management and
          changing outcomes of epilepsy-related neurological conditions.
        </Typography>
      </div>
      <div className="core-values-container">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="core-values-title"
        >
          Our Core Values
        </Typography>
        <div className="cards-container">
          {coreValues.map(({ value, content }, index) => (
            <Card sx={{ maxWidth: 345 }} className="card" key={index}>
              <CardContent>
                <div className="card-title">
                  <div className="card-icon">{getIcon(index, 42)}</div>
                  <Typography gutterBottom variant="h6" component="div">
                    {value}
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="card-content"
                >
                  {content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
