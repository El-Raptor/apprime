import React from "react";
import NavBar from "./components/Header/NavBar";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
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
