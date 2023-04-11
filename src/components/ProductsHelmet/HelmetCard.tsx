import React from "react";
import "./HelmetStyles.css";

export default (props: any) => {
  return (
    <div className="helmet-card">
      <img src={props.imgsrc} alt="image" />

      <div className="card-details">
        <div className="pro-btns">
          <div className="btn">Detalhes</div>
        </div>
      </div>
    </div>
  );
};



