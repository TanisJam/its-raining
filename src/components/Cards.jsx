import React from "react";
import Card from "./Card";
import { useHistory } from "react-router-dom";
import { StyledCards } from "./StyledComponents";

export default function Cards({ cities, onClose }) {
  const history = useHistory();
  const handleClick = (e) => {
    const isCloseBtn = e.target.innerText === 'X';
    if (!isCloseBtn) {
      const id = e.currentTarget.id;
      history.push(`/Ciudad/${id}`)
    }

  };

  if (cities) {
    return (
      <StyledCards>
        {cities.map((c) => (
          <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            onClick={(e) => handleClick(e)}
            id={c.id}
            key={c.id}
          />
        ))}
      </StyledCards>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
