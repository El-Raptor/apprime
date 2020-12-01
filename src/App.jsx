import React, { useState } from "react";
import NavBar from "./components/Header/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Footer from "./components/Footer/Footer";
import Dropdown from "./components/DropdownMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <NavBar isOpen={isOpen} toggle={toggle}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>

      <GlobalStyles />
    </>
  );
}

export default App;
