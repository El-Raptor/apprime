import React from "react";
import { Typography } from "@material-ui/core";
import {
  PartnersContainer,
  PartnersWrapper,
  PartnersLogo,
} from "./styles";
import HeroContainer from "../../HeroContainer";
import About from "../../About";
import Solutions from "../../Solutions";
import bnl from "../../../assets/images/bnl.png";
import ingen from "../../../assets/images/ingen.png";
import dinoco from "../../../assets/images/dinoco.png";
import abstergo from "../../../assets/images/abstergo.png";
import monstersInc from "../../../assets/images/monsters-inc.png";
import stark from "../../../assets/images/stark.png";

const Home = () => {
  return (
    <>
      <HeroContainer></HeroContainer>
      <About></About>
      <Solutions></Solutions>
      <PartnersContainer id="partners">
        <Typography variant="h1" color="primary">
          Parceiros
        </Typography>
        <PartnersWrapper>
          <PartnersLogo>
            <img src={bnl} alt="BnL" width="90px" />
          </PartnersLogo>
          <PartnersLogo>
            <img src={ingen} alt="InGen" width="90px" />
          </PartnersLogo>
          <PartnersLogo>
            <img src={dinoco} alt="Dinoco" width="90px" />
          </PartnersLogo>
          <PartnersLogo>
            <img src={abstergo} alt="Abstergo Industries" width="90px" />
          </PartnersLogo>
          <PartnersLogo>
            <img src={monstersInc} alt="Monsters Inc" width="90px" />
          </PartnersLogo>
          <PartnersLogo>
            <img src={stark} alt="Stark Industries" width="90px" />
          </PartnersLogo>
        </PartnersWrapper>
      </PartnersContainer>
    </>
  );
};

export default Home;
