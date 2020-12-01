import React from "react";
import {
  CloseIcon,
  DropdownContainer,
  DropdownMenu,
  DropdownWrapper,
  Icon,
  MenuLink,
} from "./MenuElements";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <MenuLink to="/#about">Quem Somos</MenuLink>
          <MenuLink to="/#solutions">Soluções</MenuLink>
          <MenuLink to="/#partners">Parceiros</MenuLink>
          <MenuLink to="/contact">Fale Conosco</MenuLink>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
