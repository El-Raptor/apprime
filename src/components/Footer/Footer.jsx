import React from "react";
import { Link } from "react-router-dom";
import {
  AddressWrapper,
  ContactWrapper,
  FooterLogo,
  FooterInfo,
  StyledBox,
  FooterLink,
  ReservedRights,
  LogoWrapper,
  FooterWrapper,
} from "./styles";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <StyledBox component="footer">
        <LogoWrapper>
          <Link to="/">
            <FooterLogo
              src={logo}
              alt="apprime"
              onClick={() => scrollToTop()}
            />
          </Link>
        </LogoWrapper>
        <FooterWrapper>
          <FooterInfo>
            <ContactWrapper>
              <PhoneIcon color="secondary" />
              <FooterLink href="tel:+556733333333">+55 67 3333 3333</FooterLink>
              <EmailIcon id="mail" color="secondary" />
              <FooterLink href="mailto:apprime@apprime.com.br">
                apprime@apprime.com.br
              </FooterLink>
            </ContactWrapper>
            <AddressWrapper>
              <RoomIcon color="secondary" />
              <FooterLink
                href="https://www.google.com.br/maps/place/Rua+Dr.+Michel+Scaff,+105+-+Ch%C3%A1cara+Cachoeira,+Campo+Grande+-+MS,+79040-860/@-20.4606469,-54.5858562,17z/data=!3m1!4b1!4m5!3m4!1s0x9486e8c10dbb445b:0x18de0d8f03363a71!8m2!3d-20.4606519!4d-54.5836675"
                target="blank"
              >
                Campo Grande - MS Rua Dr. Michel Scaff, 105 - 08 - Chácara
                Cachoeira - 79040-860
              </FooterLink>
            </AddressWrapper>
            <ReservedRights>
              2020 © Apprime. Todos os direitos reservados.
            </ReservedRights>
          </FooterInfo>
        </FooterWrapper>
      </StyledBox>
    </>
  );
};

export default Footer;
