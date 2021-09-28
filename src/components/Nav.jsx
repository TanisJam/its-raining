import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { StyledNav } from "./StyledComponents";

function Nav({ onSearch }) {
  return (
    <StyledNav>
      <NavLink to="/">Weather App</NavLink>
      <SearchBar onSearch={onSearch} />
    </StyledNav>
  );
}

export default Nav;
