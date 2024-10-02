import React from "react";
import './Card.css'
const Card = ({ imgSrc, imgAlt, imgPrice, imgQuantity }) => {
  return (
    <>
      <div className="imgBox">
        dgdgdggd
        <img src={imgSrc} alt={imgAlt} className="imgCard"/>
        <div>Prise : Rs{imgPrice}</div>
        <div>Quantity {imgQuantity}</div>
      </div>
    </>
  );
};

export default Card;
