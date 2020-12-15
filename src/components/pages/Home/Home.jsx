import React from "react";
import { Typography } from "@material-ui/core";
import {
  SolutionsContainer,
  PartnersContainer,
  HeroBg2,
  SolutionsContent,
  SolutionsBar,
  Solutions,
  PartnersWrapper,
  PartnersLogo,
} from "./styles";
import HeroContainer from "../../HeroContainer";
import About from "../../About";
import erp from "../../../assets/images/erp.png";
import crm from "../../../assets/images/crm.png";
import pos from "../../../assets/images/pos.png";
import hr from "../../../assets/images/hr.png";
import mobile from "../../../assets/images/mobile.png";
import bi from "../../../assets/images/bi.png";
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
      <SolutionsContainer id="solutions">
        <HeroBg2></HeroBg2>
        <SolutionsContent>
          <Typography color="secondary" variant="h1">
            Soluções
          </Typography>
          <Typography className="solutions-container-descr" color="secondary">
            Tenha nossas soluções em tuas mãos, aonde quer que você esteja.
            Acreditamos na mobilidade empresarial, na qual disponibilizamos
            nossas soluções em forma de aplicativos móveis. Dessa forma, suas
            informações estarão disponíveis a todo momento, basta haver uma
            conexão.
          </Typography>
        </SolutionsContent>
        <SolutionsBar>
          <Solutions>
            <img
              className="solutions-icon"
              alt="erp"
              src={erp}
              width="120rem"
            />
            <Typography>Sistemas Integrados de Gestão</Typography>
          </Solutions>
          <Solutions>
            <img
              className="solutions-icon"
              alt="crm"
              src={crm}
              width="120rem"
            />
            <Typography>
              Administração do Relacionamento com o Cliente
            </Typography>
          </Solutions>
          <Solutions>
            <img
              className="solutions-icon"
              alt="pos"
              src={pos}
              width="120rem"
            />
            <Typography>Ponto de Venda</Typography>
          </Solutions>
          <Solutions>
            <img className="solutions-icon" alt="hr" src={hr} width="120rem" />
            <Typography>Recursos Humanos</Typography>
          </Solutions>
          <Solutions>
            <img
              className="solutions-icon"
              alt="mobile"
              src={mobile}
              width="120rem"
            />
            <Typography>Mobile</Typography>
          </Solutions>
          <Solutions>
            <img className="solutions-icon" alt="bi" src={bi} width="120rem" />
            <Typography>Inteligência de Negócios</Typography>
          </Solutions>
        </SolutionsBar>
      </SolutionsContainer>
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
