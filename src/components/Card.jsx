import React from "react";

import { StyledCard, BtnClose } from "./StyledComponents";

export default function Card({ max, min, name, id, img, onClose, onClick }) {
  return (
    <StyledCard onClick={(e) => onClick(e)} id={id}>
      <p>
        {" "}
        {name}{" "}
        <sup>
          <BtnClose onClick={onClose}>&#10060;</BtnClose>
        </sup>{" "}
      </p>
      <div className="c-body">
        <div>
          Min <span> {min}º</span>
        </div>
        <div>
          Max <span> {max}º</span>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={name}
          />
        </div>
      </div>
    </StyledCard>
  );
}
