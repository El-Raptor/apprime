import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import { StyledBox, LinksList, HamburguerMenu } from "./styles";
import image from "../../assets/images/logo.png";

const NavBar = ({ toggle, isOpen }) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  const headerPosition = isOpen ? 'none' : 'sticky';

  return (
    <>
      <AppBar position={headerPosition} color="#fff" elevation="0">
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
            <LinksList>
              <Link to="/#about">Quem Somos</Link>
              <Link to="/#solutions">Soluções</Link>
              <Link to="/#partners">Parceiros</Link>
              <Link to="/contact">Fale Conosco</Link>
            </LinksList>
            <HamburguerMenu onClick={toggle}/>
          </StyledBox>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
