import React from "react";
import { StyledBox } from "./styles";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import logo from "../../assets/images/logo.png";
import { Grid } from "@material-ui/core";

const Footer = () => {
  const style = {
    height: "100%",
  };

  return (
    <>
      <StyledBox component="footer">
        <Grid xs={2}>
          <img className="footer-logo" src={logo} alt="apprime" />
        </Grid>
        <Grid xs={8} style={style}>
          <div className="footer-info">
            <div>
              <PhoneIcon color="secondary" />
              <a href="tel:+556733333333">+55 67 3333 3333</a>
              <EmailIcon id="mail" color="secondary" />
              <a href="mailto:apprime@apprime.com.br">apprime@apprime.com.br</a>
            </div>
            <div>
              <RoomIcon color="secondary" />
              <a
                href="https://www.google.com.br/maps/place/Rua+Dr.+Michel+Scaff,+105+-+Ch%C3%A1cara+Cachoeira,+Campo+Grande+-+MS,+79040-860/@-20.4606469,-54.5858562,17z/data=!3m1!4b1!4m5!3m4!1s0x9486e8c10dbb445b:0x18de0d8f03363a71!8m2!3d-20.4606519!4d-54.5836675"
                target="blank"
              >
                Campo Grande - MS Rua Dr. Michel Scaff, 105 - 08 - Chácara
                Cachoeira - 79040-860
              </a>
            </div>
            <span>2020 © Apprime. Todos os direitos reservados.</span>
          </div>
        </Grid>
        <Grid xs={2}></Grid>
      </StyledBox>
    </>
  );
};

export default Footer;
