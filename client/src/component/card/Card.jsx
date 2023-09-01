import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
// Este componente debe mostrar la info de cada country mapeado pero ademas darnos un link para ir al Detail del mismo
const Card = ({ flag, name, continent, id }) => {
  return (
    <div className={style.container}>
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <img src={flag} alt="imagen"  className={style.card_image} />
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
