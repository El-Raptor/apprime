import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { StyledBox } from "./styles";
import image from "../../assets/images/logo.png";

const NavBar = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <AppBar position="sticky" color="#fff" elevation="0">
        <Toolbar>
          <StyledBox>
            <Link to="/">
              <img
                className="navbar-logo"
                src={image}
                alt="apprime"
                onClick={() => scrollToTop()}
              />
            </Link>
            <div className="links">
              <Link to="/#about">Quem Somos</Link>
              <Link to="/#solutions">Soluções</Link>
              <Link to="/#partners">Parceiros</Link>
              <Link to="/contact">Fale Conosco</Link>
            </div>
          </StyledBox>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
