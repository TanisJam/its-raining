import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./../globalStyles";
import Nav from "./Nav.jsx";
import Cards from "./Cards.jsx";
import About from "./About.jsx";
import Ciudad from "./Ciudad.jsx";
import Footer from "./Footer.jsx";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  const onSearch = async (ciudad) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      );
      const recurso = await response.json();
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };
        const cityIndex = cities.findIndex((city) => city.id === ciudad.id);
        if (cityIndex !== -1) {
          const newCities = [...cities];
          newCities[cityIndex] = ciudad;
          setCities(() => newCities);
        } else {
          setCities((oldCities) => [...oldCities, ciudad]);
        }
      } else {
        alert("Ciudad no encontrada");
      }
    } catch (err) {
      console.error(`Fetch request failed : ${err}`);
      alert("Falló la busqueda, verifica la conexión");
    }
  };

  function onFilter(ciudadId) {
    let ciudad = cities.filter((city) => city.id === parseInt(ciudadId, 10));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <Router className="App">
      <GlobalStyle />
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route path="/about" component={About} />
      <Route
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
      <Route path="/" component={Footer} />
    </Router>
  );
}

export default App;