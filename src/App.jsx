import React, { useState, useEffect } from "react";
import NavBar from "./components/Header/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Dropdown from "./components/DropdownMenu";

function App({ location }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const windowResize = () => {
    if (window.innerWidth <= 540) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    windowResize();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  window.addEventListener("resize", windowResize);
  
  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {(location.pathname !== "/contact" || !isMobile) && (
        <NavBar isOpen={isOpen} toggle={toggle} />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />

      <GlobalStyles />
    </>
  );
}

export default withRouter(App);
