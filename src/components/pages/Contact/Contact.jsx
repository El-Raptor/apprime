import React from "react";
import {
  FirstNameTextField,
  LastNameTextField,
  EmailWrapper,
  NameWrapper,
  StyledForm,
  TitleWrapper,
  ButtonWrapper,
} from "./styles";
import { TextField, Paper, Typography } from "@material-ui/core";
import { ButtonStyled } from "../../Button";

const Contact = () => {
  return (
    <>
      <style>{"body { background-color:#F09949; }"}</style>
      <StyledForm>
        <Paper component="form" elevation={2}>
          <TitleWrapper>
            <Typography variant="h3">Contate-nos</Typography>
          </TitleWrapper>
          <NameWrapper>
            <FirstNameTextField
              required
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
              rows={10}
              fullWidth
            />
          </EmailWrapper>
          <ButtonWrapper>
            <ButtonStyled round large>
              Enviar
            </ButtonStyled>
          </ButtonWrapper>
        </Paper>
      </StyledForm>
    </>
  );
};

export default Contact;
