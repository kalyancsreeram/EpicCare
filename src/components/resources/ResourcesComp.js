import React from "react";
import "./ResourcesComp.scss";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ResourcesTable from "./ResourcesTable";

import { resourcesPageData } from "../../data/data";

const { articles, websites, featuresTableData } = resourcesPageData;

const ResourcesComp = () => {
  return (
    <div className="resources-container">
      <Typography
        className="main-title"
        gutterBottom
        variant="h1"
        component="div"
      >
        Resources
      </Typography>
      <div className="articles-container">
        <Typography
          className="secondary-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          Articles and book references:
        </Typography>

        <div className="articles-list">
          {articles.map(({ title, list }, index) => (
            <div key={index} className="article">
              <Typography
                className="article-title"
                gutterBottom
                variant="h6"
                component="div"
              >
                {title}
              </Typography>
              <ul className="article-notes">
                {list.map((item, index) => (
                  <li className="article-notes-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="websites-container">
        <Typography
          className="secondary-title"
          gutterBottom
          variant="h4"
          component="div"
        >
          Websites:
        </Typography>

        <ol className="websites-list">
          {websites.map(({ link, title, description }, index) => (
            <li key={index} className="website-list-item">
              <div className="website-link-title">
                <Typography
                  className="website-title"
                  gutterBottom
                  variant="h6"
                  component="div"
                >
                  <NavLink href={link}>{title}</NavLink>
                </Typography>
              </div>

              <ul className="website-content">
                {description?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <ResourcesTable data={featuresTableData} />
    </div>
  );
};

export default ResourcesComp;
