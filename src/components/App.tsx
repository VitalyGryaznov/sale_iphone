import React, { useEffect } from "react";
import Main from "./Main";
import CookiesConsent from "./CookieConsent";
import Footer from "./Footer";
import Header from "./header/Header";
import ReactGA from "react-ga";

import "./App.css";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-192948383-1");
    ReactGA.pageview("/");
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <CookiesConsent />
      <Footer />
    </div>
  );
}

export default App;
