import React, { useState } from "react";
import "./NavBar.scss";
import CompanyLogo from "../../assets/images/CompanyLogoEdited-in.png"; 
import { NavLink, useNavigate } from "react-router-dom";
import { IconButton, Menu } from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import { TbExternalLink } from "react-icons/tb";

import { navLinks } from "../../data/data";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const homeBtnHandler = () => {
    navigate("/");
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getNavLinks = () => {
    return navLinks.map((item, index) => {
      let link = ``;
      if (item === "Home") {
        link = `/`;
      } else if (item === "Login") {
        link = `https://app.seizurecarenet.com/`;
      } else {
        link = `/${item.toLowerCase()}`;
      }
      return (
        <NavLink to={link} key={index}>
          <span className="nav-link--text">
            {item}
            {item === "Login" && (
              <TbExternalLink className="external-link-icon" size={18} />
            )}
          </span>
        </NavLink>
      );
    });
  };

  return (
    <nav>
      <img
        className="home-btn"
        alt="SeizureCare"
        style={{ width: "200px", cursor: "pointer", left: "10" }}
        src={CompanyLogo}
        onClick={homeBtnHandler}
      />
      <div className="nav-links-desktop">{getNavLinks()}</div>
      <div className="nav-links-mobile">
        <IconButton id="burger-icon" onClick={(e) => handleClick(e)}>
          <TiThMenu />
        </IconButton>
        <Menu
          id="burgerMenu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {getNavLinks()}
        </Menu>
      </div>
    </nav>
  );
}

export default NavBar;
