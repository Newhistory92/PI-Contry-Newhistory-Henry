import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ image, name, continent, id }) => {
  return (
    <div className={style.container}>
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="imagen"  className={style.card_image} />
      </Link>
      <div className={style.card_name}>
      <em>{name}</em>
      </div>
      <h3>{continent}</h3>
    </div>
  </div>
  );
};
export default Card;
