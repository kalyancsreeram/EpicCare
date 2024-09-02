import React from "react";

import "./styles.scss";

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

const AboutComp = () => {
  return (
    <div className="aboutContainer">
      <div className="intro">
        <Typography
          className="main-title"
          gutterBottom
          variant="h4"
          component="div"
        >
          About Us
        </Typography>

        <Typography
          variant="body2"
          color="text.primary"
          className="about_us_notes"
        >
          <b>SeizureCare is an American Healthcare Company</b>. Connecting
          medical professionals worldwide to epilepsy expertise and resources,
          our goal is to reduce the barriers and create a more equitable future
          for all those affected.
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          className="about_us_notes"
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
          className="about_us_notes"
        >
          SeizureCare achieves this goal with the expertise of American
          board-certified epileptologists and innovative remote software
          solutions, enabling efficient and accessible services anytime,
          anywhere. Additionally, SeizureCare strives to establish an efficient
          coordinating human organization and collaborate with various
          technology companies and NGO groups to make high-quality epilepsy care
          affordable and available to the needy.
        </Typography>

        <div>
          <Typography
            className="about_title"
            gutterBottom
            variant="h5"
            component="div"
          >
            Our Mission
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            className="about_us_notes"
          >
            We dedicated ourselves to the unrelenting quest for knowledge and
            discovery to transform epilepsy care by joining forces against
            epilepsy to crack the code of this complex condition. We believe in
            an inspirational research quote by Roosevelt -{" "}
            <i>
              <q>Every doubt is an opportunity to discover.</q>
            </i>
          </Typography>
        </div>
        <div>
          <Typography
            className="about_title"
            gutterBottom
            variant="h5"
            component="div"
          >
            Our Vision
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            className="about_us_notes"
          >
            Our vision is to expand top-tier epilepsy remote services globally
            over the next five years, setting new standards in the management
            and changing outcomes of epilepsy-related neurological conditions.
          </Typography>
        </div>
      </div>
      <div className="core-values-container">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="core_values_title"
        >
          Our Core Values
        </Typography>
        {/* <h3 className="core_values_title"></h3> */}
        <div className="cards-container">
          <div className="first_row">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardContent>
                <div className="card_title">
                  <div className="card_icon">
                    <FaBalanceScale size={42} />
                  </div>
                  <Typography gutterBottom variant="h6" component="div">
                    Integrity
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="about_us_sec_notes"
                >
                  We uphold the highest standards of professionalism, ethics,
                  and honesty in all our actions, fostering a culture of
                  confidentiality, trust, respect, and transparency.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardContent>
                <div className="card_title">
                  <div className="card_icon">
                    <FaHeart size={42} />
                  </div>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="card_title"
                  >
                    Empathy
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="about_us_sec_notes"
                >
                  Our commitment to excellence is reflected in our dedication to
                  understanding and addressing the needs of our client
                  physicians every day.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardContent>
                <div className="card_title">
                  <div className="card_icon">
                    <FaLightbulb size={42} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="card_title"
                  >
                    Quality and Innovation
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="about_us_sec_notes"
                >
                  We constantly seek innovative solutions that enhance safety
                  and efficiency, striving to implement the most effective
                  practices for superior outcomes.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="second_row">
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardContent>
                <div className="card_title">
                  <div className="card_icon">
                    <FaUsers size={42} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="card_title"
                  >
                    Collaboration
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="about_us_sec_notes"
                >
                  We are resolute in forming robust partnerships with hospitals
                  and organizations, particularly those concerning financially
                  disadvantaged patients, to extend our reach and impact. Our
                  collaborative efforts ensure that all stakeholders experience
                  exceptional support.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardContent>
                <div className="card_title">
                  <div className="card_icon">
                    <FaGem size={42} />
                  </div>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="card_title"
                  >
                    Refinement
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="about_us_sec_notes"
                >
                  SeizureCare is devoted to ongoing learning and technological
                  integration to achieve faster, more precise, and effective
                  clinical results, continually enhancing the quality of care we
                  provide.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
