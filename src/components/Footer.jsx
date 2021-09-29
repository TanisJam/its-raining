import React from "react";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./StyledComponents";

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/TanisJam" target="_blank"> 2021 - Mauricio Romero</a>
      {/* <NavLink to="/about">About</NavLink> */}
    </StyledFooter>
  );
}
