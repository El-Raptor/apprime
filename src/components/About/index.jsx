import React from "react";
import { Typography } from "@material-ui/core";
import { AboutContainer, AboutWrapper, ImgWrapper } from "./styles";
import aboutImage from "../../assets/images/about-image.png"

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Typography variant="h1" color="primary">
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
          implementação e uso de softwares de gestão empresarial, essa é a nossa
          missão, através da inovação e excelência em serviços de consultoria,
          implementação e treinamentos, elevamos a satisfação das pessoas e
          melhoramos os resultados da sua empresa.
        </Typography>
      </AboutWrapper>
      <ImgWrapper>
        <img alt='sobre-nos' src={aboutImage} />
      </ImgWrapper>
    </AboutContainer>
  );
};

export default About;
