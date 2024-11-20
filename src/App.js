import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
import Order from "./pages/Order/Order";
import Resources from "./pages/Resources";
import Footer from "./components/footer/Footer";

import NavBar from "./components/navbar/NavBar";
import PhysicianPortalComp from "./components/physiciangrid/PhysicianPortalComp";

import { AuthProvider } from "./utils/auth";
import RequireAuth from "./utils/RequireAuth";
import { ThemeProvider, createTheme } from "@mui/material";

import useWhatsappScript from "./hooks/useWhatsappScript";

const headingStyle = {
  fontFamily: "Barlow",
};

const subHeadingStyle = {
  fontFamily: "IBMPlexSans",
};

const otherTextStyle = {
  fontFamily: "Inter",
};

const theme = createTheme({
  typography: {
    h1: headingStyle,
    h2: subHeadingStyle,
    h3: subHeadingStyle,
    h4: subHeadingStyle,
    h5: subHeadingStyle,
    h6: subHeadingStyle,
    body1: otherTextStyle,
    body2: otherTextStyle,
    subtitle1: otherTextStyle,
    subtitle2: otherTextStyle,
    button: otherTextStyle,
    caption: otherTextStyle,
    overline: otherTextStyle,
    fontFamily: otherTextStyle,
  },
  components: {
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       color: "#333333",
    //     },
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333333 !important",
        },
      },
    },
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
          <Route path="contact" element={<Contact />}></Route>
          <Route path="order" element={<Order />}></Route>
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
