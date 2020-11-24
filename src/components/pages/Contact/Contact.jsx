import React from "react";
import { StyledForm } from "./styles";
import { TextField, Paper } from "@material-ui/core";

const Contact = () => {
  return (
    <>
      <style>{"body { background-color:#F09949; }"}</style>
      <StyledForm>
        <Paper component="form" elevation={2}>
          <div id="name">
            <TextField
              required
              id="first-name"
              label="Nome"
              variant="outlined"
              style={{width: "40%"}}
            />
            <TextField
              required
              id="last-name"
              label="Sobrenome"
              variant="outlined"
              style={{width: "40%"}}
            />
          </div>
          <div>
            <TextField
              required
              id="email"
              label="E-mail"
              variant="outlined"
              fullWidth
            />
          </div>
        </Paper>
      </StyledForm>
    </>
  );
};

export default Contact;
