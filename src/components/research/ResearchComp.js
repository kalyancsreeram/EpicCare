import React from "react";
import "./ResearchComp.scss";
import Typography from "@mui/material/Typography";

import { researchPageData } from "../../data/data";

const ResearchComp = () => {
  return (
    <div className="research-container">
      <div className="research-title-desc">
        <Typography
          className="main-title"
          gutterBottom
          variant="h1"
          component="div"
        >
          Research
        </Typography>

        <p className="research-desc" id="researchScopeDesc">
          The research scope in epilepsy is vast and multidisciplinary,
          encompassing various aspects of this complex condition.
        </p>
      </div>
      <span className="research-notes-title">
        Some potential areas of investigation include:
      </span>
      <div className="research-list-container">
        <ul className="research-list">
          {researchPageData.map(({ title, content }, index) => {
            return (
              <li className="research-list__item" key={index}>
                <p className="item__title">{title}:</p>
                <p className="item__content">{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="research-desc">
        This comprehensive scope encompasses various disciplines, from basic
        science to clinical practice, aiming to advance our understanding and
        management of epilepsy.
      </p>
      <p className="research-desc">
          SeizureCare website will be regularly updated to feature ongoing
          active projects and annual publications related to above disciplines,
          showcasing our commitment to innovation, research, and knowledge
          sharing.
      </p>
    </div>
  );
};

export default ResearchComp;
