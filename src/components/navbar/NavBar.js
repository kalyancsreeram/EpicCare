import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.scss";
import LoginModal from "../loginmodal/LoginModal";
import SignupModal from "../signupmodal/SignupModal";
import { useAuth } from "../../utils/auth";

//import CompanyLogo from '../../assets/images/CompanyLogoSVG.svg'
import CompanyLogo from "../../assets/images/CompanyLogoEdited.png";
import { decodeToken } from "../../utils/tokenUtil";
import { Button } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const token = decodeToken();
    console.log(`Auth --> ${auth}`);
    auth.login(token);
  }, []);

  const loginBtnHandler = () => {
    document.getElementById("loginModal").style.display = "block";
  };
  const homeBtnHandler = () => {
    navigate("/");
  };

  const logoutBtnHandler = () => {
    auth.logout();
    navigate("/");
  };

  const signupBtnHandler = () => {
    document.getElementById("signupModal").style.display = "block";
  };

  return (
    <div>
      <nav>
        <img
          className="homeBtn"
          alt="SeizureCare"
          style={{ width: "200px", cursor: "pointer", left: "10" }}
          src={CompanyLogo}
          onClick={homeBtnHandler}
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/order">Order</NavLink>
        <NavLink to="/research">Research</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        {/* {
            auth.user && (
              <NavLink to='/physician-portal'>Physician</NavLink>  
            )
          }   
          {
            !auth.user && (
              <button className='loginBtn' onClick={loginBtnHandler}>Physician Login</button> 
            )
          }
          {
            !auth.user && (
              <button className='signupBtn' onClick={signupBtnHandler}>Sign Up</button> 
            )
          }
          {
            auth.user && (
              <button className='logoutBtn' onClick={logoutBtnHandler}>Logout</button> 
            )
          }         */}
        <div className="loginBtn-container">
          <Button variant="contained" className="loginBtn" href="/wip">
            Login
          </Button>
        </div>
      </nav>
      <LoginModal />
      <SignupModal />
    </div>
  );
}

export default NavBar;
