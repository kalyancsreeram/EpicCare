import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Research from "./components/Research";
import Services from "./components/Services";
import NavBar from "./components/navbar/NavBar";
import NoMatch from "./components/NoMatch";
import PatientPortal from "./components/PatientPortal";
import PhysicianPortalComp from "./components/physiciangrid/PhysicianPortalComp";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./utils/RequireAuth";
import Footer from "./components/Footer";
import HomePageFooter from "./components/homepagefooter/HomePageFooter";
import Resources from "./components/Resources";
import { ThemeProvider, createTheme } from "@mui/material";
import WIP from "./components/WIP";

const headingStyle = {
  fontFamily: "DMSans",
};

const otherTextStyle = {
  fontFamily: "Inter",
};

const theme = createTheme({
  typography: {
    h1: headingStyle,
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
    body1: otherTextStyle,
    body2: otherTextStyle,
    subtitle1: otherTextStyle,
    subtitle2: otherTextStyle,
    button: otherTextStyle,
    caption: otherTextStyle,
    overline: otherTextStyle,
    fontFamily: otherTextStyle,
  },
});

function App() {
  useEffect(() => {
    document.title = "Seizure Care";
  }, []);
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="order" element={<PatientPortal />}></Route>
          <Route path="research" element={<Research />}></Route>
          <Route path="resources" element={<Resources />}></Route>
          <Route path="services" element={<Services />}></Route>
          {/* //TODO: Temporary page, remove it once the actual link is working */}
          <Route path="wip" element={<WIP />}></Route>
          <Route
            path="physician-portal"
            element={
              <RequireAuth>
                <PhysicianPortalComp />
              </RequireAuth>
            }
          ></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
        <HomePageFooter />
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
