import React from "react";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./StyledComponents";

export default function Footer() {
  return (
    <StyledFooter>
      <NavLink to="/about">About</NavLink>
    </StyledFooter>
  );
}
