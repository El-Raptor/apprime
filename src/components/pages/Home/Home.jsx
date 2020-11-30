import React from "react";
import { Typography, Button } from "@material-ui/core";
import {
  HeroContainer,
  AboutContainer,
  SolutionsContainer,
  PartnersContainer,
  HeroBg,
  HeroContent,
  AboutWrapper,
  ImgWrapper,
  HeroBg2,
  SolutionsContent,
  SolutionsBar,
  Solutions,
} from "./styles";
import { Link } from "react-router-dom";
import aboutImage from "../../../assets/images/about-image.png";
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
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroContent>
          <Typography className="hero-container-slogan">
            Integre tudo em poucos cliques
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
      </HeroContainer>
      <AboutContainer id="about">
        <AboutWrapper>
          <Typography color="primary" variant="h1">
            Quem Somos
          </Typography>
          <Typography color="primary">
            Mais de 15 anos aumentando a lucratividade das empresas Nesta
            trajetória agregamos experiência agregando valor aos clientes com a
            personalização dos projetos, através de análise e implementação de
            tecnologias, customização do software, integração entre sistemas ou
            desenvolvimento específico de funcionalidades para atender um
            determinado requisito e gerar ao nosso cliente uma vantagem
            competitiva frente a sua concorrência. <br />
            <br />
            Dedicamos em proporcionar às pessoas a melhor experiência em
            implementação e uso de softwares de gestão empresarial, essa é a
            nossa missão, através da inovação e excelência em serviços de
            consultoria, implementação e treinamentos, elevamos a satisfação das
            pessoas e melhoramos os resultados da sua empresa.
          </Typography>
        </AboutWrapper>
        <ImgWrapper>
          <img alt="sobre-nós" src={aboutImage} />
        </ImgWrapper>
      </AboutContainer>
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
        <div className="partners-container">
          <div className="partners-logo">
            <img src={bnl} alt="BnL" width="90px" />
          </div>
          <div className="partners-logo">
            <img src={ingen} alt="InGen" width="90px" />
          </div>
          <div className="partners-logo">
            <img src={dinoco} alt="Dinoco" width="90px" />
          </div>
          <div className="partners-logo">
            <img src={abstergo} alt="Abstergo Industries" width="90px" />
          </div>
          <div className="partners-logo">
            <img src={monstersInc} alt="Monsters Inc" width="90px" />
          </div>
          <div className="partners-logo">
            <img src={stark} alt="Stark Industries" width="90px" />
          </div>
        </div>
      </PartnersContainer>
    </>
  );
};

export default Home;
