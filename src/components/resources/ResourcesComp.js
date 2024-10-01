import React from "react";
import "./styles.scss";

import Typography from "@mui/material/Typography";
import ResourcesTable from "./ResourcesTable";

import { resourcesPageData } from "../../data/data";

const { articles, websites } = resourcesPageData;

function ResourcesComp() {
  return (
    <div className="resourcesContainer">
      <Typography
        className="resourcesMainHeading"
        gutterBottom
        variant="h4"
        component="div"
      >
        Resources
      </Typography>

      <Typography
        className="boldHeading secondaryTitle"
        gutterBottom
        variant="h5"
        component="div"
      >
        Articles and book references:
      </Typography>

      <br></br>

      {articles.map(({ title, list }, index) => (
        <div key={index}>
          <Typography
            className="boldHeading"
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className="smallerFont"
            gutterBottom
            variant="h6"
            component="div"
          >
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>
        </div>
      ))}

      <Typography
        className="boldHeading secondaryTitle"
        gutterBottom
        variant="h6"
        component="div"
      >
        Websites:
      </Typography>

      <Typography gutterBottom variant="h6" component="div">
        <ol className="smallerFont">
          {websites.map(({ link, title, description }, index) => (
            <li key={index}>
              <a href={link} className="smallerFont">
                {link}
              </a>
              <Typography
                className="addPadding smallerFont"
                gutterBottom
                variant="h6"
                component="div"
              >
                {title}
              </Typography>
              <Typography
                className="addPadding smallerFont"
                gutterBottom
                variant="h6"
                component="div"
              >
                <ul>
                  {description?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </li>
          ))}
        </ol>
      </Typography>

      <ResourcesTable />
    </div>
  );
}

export default ResourcesComp;
