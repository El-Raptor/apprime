import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { HeroBg, Container, HeroContent } from "./styles";

const HeroContainer = () => {
  return (
    <Container>
      <HeroBg></HeroBg>
      <HeroContent>
        <Typography className="hero-container-slogan">
          Integre Tudo em Poucos Cliques
        </Typography>
        <Typography className="hero-container-descr">
          Aumente sua eficiência de trabalho integrando as suas soluções de
          forma fácil e automática.
        </Typography>
        <Link to="/contact">
          <Button variant="contained" color="primary">
            Fale Conosco
          </Button>
        </Link>
      </HeroContent>
    </Container>
  );
};

export default HeroContainer;
