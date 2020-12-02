import React, { useEffect, useState } from "react";
import {
  FirstNameTextField,
  LastNameTextField,
  EmailWrapper,
  NameWrapper,
  StyledForm,
  TitleWrapper,
  ButtonWrapper,
  CloseIcon,
  Icon,
} from "./styles";
import { TextField, Paper, Typography, Divider } from "@material-ui/core";
import ButtonStyled from "../../Button";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  const windowResize = () => {
    if (window.innerWidth <= 540) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    windowResize();
  }, []);

  window.addEventListener("resize", windowResize);

  return (
    <>
      <Link to='/'>
        <Icon>
          <CloseIcon />
        </Icon>
      </Link>
      <StyledForm>
        <Paper component="form" elevation={isMobile ? 0 : 2} square={isMobile}>
          <TitleWrapper>
            <Typography variant="h1">CONTATE-NOS</Typography>
          </TitleWrapper>
          <Divider />
          <NameWrapper>
            <FirstNameTextField
              required
              className="first-name"
              id="first-name"
              label="Nome"
              variant="outlined"
            />
            <LastNameTextField
              required
              className="last-name"
              id="last-name"
              label="Sobrenome"
              variant="outlined"
            />
          </NameWrapper>
          <EmailWrapper>
            <TextField
              required
              id="email"
              label="E-mail"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="topic"
              label="Assunto"
              variant="outlined"
              fullWidth
            />
            <TextField
              required
              id="message"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
            />
          </EmailWrapper>
          <ButtonWrapper>
            <ButtonStyled
              type="submit"
              elevation={!isMobile}
              round={!isMobile}
              size={isMobile ? "fullWidth" : "large"}
            >
              ENVIAR
            </ButtonStyled>
          </ButtonWrapper>
        </Paper>
      </StyledForm>
    </>
  );
};

export default Contact;
