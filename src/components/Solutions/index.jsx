import React from "react";
import { Typography } from "@material-ui/core";
import {
  SolutionsContainer,
  HeroContainer,
  SolutionsContent,
  SolutionsBar,
  Assets,
} from "./styles";
import erp from "../../assets/images/erp.png";
import crm from "../../assets/images/crm.png";
import pos from "../../assets/images/pos.png";
import hr from "../../assets/images/hr.png";
import mobile from "../../assets/images/mobile.png";
import bi from "../../assets/images/bi.png";

const Solutions = () => {
  return (
    <SolutionsContainer>
      <HeroContainer></HeroContainer>
      <SolutionsContent>
        <Typography color="secondary" variant="h1">
          Soluções
        </Typography>
        <Typography className="solutions-container-descr" color="secondary">
          Tenha nossas soluções em tuas mãos, aonde quer que você esteja.
          Acreditamos na mobilidade empresarial, na qual disponibilizamos nossas
          soluções em forma de aplicativos móveis. Dessa forma, suas informações
          estarão disponíveis a todo momento, basta haver uma conexão.
        </Typography>
      </SolutionsContent>
      <SolutionsBar>
        <Assets>
          <img className="solutions-icon" alt="erp" src={erp} width="120rem" />
          <Typography>Sistemas Integrados de Gestão</Typography>
        </Assets>
        <Assets>
          <img className="solutions-icon" alt="crm" src={crm} width="120rem" />
          <Typography>Administração do Relacionamento com o Cliente</Typography>
        </Assets>
        <Assets>
          <img className="solutions-icon" alt="pos" src={pos} width="120rem" />
          <Typography>Ponto de Venda</Typography>
        </Assets>
        <Assets>
          <img className="solutions-icon" alt="hr" src={hr} width="120rem" />
          <Typography>Recursos Humanos</Typography>
        </Assets>
        <Assets>
          <img
            className="solutions-icon"
            alt="mobile"
            src={mobile}
            width="120rem"
          />
          <Typography>Mobile</Typography>
        </Assets>
        <Assets>
          <img className="solutions-icon" alt="bi" src={bi} width="120rem" />
          <Typography>Inteligência de Negócios</Typography>
        </Assets>
      </SolutionsBar>
    </SolutionsContainer>
  );
};

export default Solutions;
