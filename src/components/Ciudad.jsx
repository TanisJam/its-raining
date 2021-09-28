import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { StyledWeatherPage } from "./StyledComponents";

export default function Ciudad({ city }) {
  const history = useHistory();
  if (!city) {
    history.push("/");
    return null;
  } else {
    return (
      <StyledWeatherPage>
        <div className="container">
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperatura: {city.temp} ºC</div>
            <div>Clima: {city.weather}</div>
            <div>Viento: {city.wind} km/h</div>
            <div>Cantidad de nubes: {city.clouds}</div>
            <div>Latitud: {city.latitud}º</div>
            <div>Longitud: {city.longitud}º</div>
          </div>
        </div>
        <NavLink to="/">&#x23EA;</NavLink>
      </StyledWeatherPage>
    );
  }
}
