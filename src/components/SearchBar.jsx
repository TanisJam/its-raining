import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledSearch } from "./StyledComponents";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const history = useHistory();
  const pathname = history.location.pathname;
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
    if (pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <StyledSearch onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className="send" type="submit" value="Agregar" />
    </StyledSearch>
  );
}
