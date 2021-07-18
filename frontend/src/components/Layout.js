import React from "react";
import { Link } from "gatsby";
import { IconContext } from "react-icons/lib";

import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles.js";
import Typography from "../styles/Typography.js";
import Menu from "./Menu";
import MiniNav from "./MiniNav";
import Footer from "./Footer.js";

import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: "-2px" } }}>
        <GlobalStyles />
        <Typography />
        <MiniNav />
        <Menu />
        {children}
        <Footer />
      </IconContext.Provider>

      <CookieConsent
        style={{
          alignItems: "middle",
          background: "rgba(0,0,0,.95)",
          padding: "2em",
          zIndex: 99999,
          textShadow: "2px 2px black",
        }}
        buttonStyle={{
          background: "orange",
          padding: "1em",
          textTransform: "uppercase",
          color: "black",
          fontWeight: "500",
          borderRadius: "50%",
          alignSelf: "middle",
        }}
        cookieName="gatsby-gdpr-google-analytics"
      >
        <strong>Fitness Republic uses cookies.</strong> By using our site you
        are agreeing to the terms of our{" "}
        <Link to="/privacy#cookie-policy/">Cookie Policy</Link>.
        <br />
        We also discuss how we use any data we collect from you in our{" "}
        <Link to="/privacy/">Privacy Policy</Link>
      </CookieConsent>
      {/* <WhatsAppWidget
          companyName="Fitness Republic Ashby"
          phoneNumber="+441530413330"
          textReplyTime="Typically replies within an hour or two"
          message="Hi there! Ready to increase your health and fitness in 2021? Let's chat about it"
        /> */}
    </>
  );
};

export default Layout;
