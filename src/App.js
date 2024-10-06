import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Research from "./pages/Research";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
import PatientPortal from "./pages/PatientPortal";
import Resources from "./pages/Resources";
import Footer from "./components/footer/Footer";

import NavBar from "./components/navbar/NavBar";
import PhysicianPortalComp from "./components/physiciangrid/PhysicianPortalComp";

import { AuthProvider } from "./utils/auth";
import RequireAuth from "./utils/RequireAuth";
import { ThemeProvider, createTheme } from "@mui/material";

import useWhatsappScript from "./hooks/useWhatsappScript";

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

const whatsappWidgetOptions = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#25D366",
    ctaText: "Chat with us",
    borderRadius: "25",
    marginLeft: "0",
    marginRight: "20",
    marginBottom: "20",
    ctaIconWATI: false,
    position: "right",
  },
  brandSetting: {
    brandName: "SeizureCare",
    brandSubTitle: "undefined",
    brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    welcomeText: "Hi there!\nHow can I help you?",
    messageText: "Hello, %0A I have a question about SeizureCare.",
    backgroundColor: "#25D366",
    ctaText: "Chat with us",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "919959819247",
  },
};

function App() {
  useEffect(() => {
    document.title = "Seizure Care";
  }, []);

  const url =
    "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?98423%27";

  useWhatsappScript(url, whatsappWidgetOptions);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="order" element={<PatientPortal />}></Route>
          <Route path="research" element={<Research />}></Route>
          <Route path="resources" element={<Resources />}></Route>
          <Route path="services" element={<Services />}></Route>
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
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
