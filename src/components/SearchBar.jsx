import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  const history = useHistory();
  const pathname = history.location.pathname;
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
    if (pathname !== '/') {
      history.push('/');
    }
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
