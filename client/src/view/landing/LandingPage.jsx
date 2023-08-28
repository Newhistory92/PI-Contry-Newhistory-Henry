import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={style.landing}>
      <div className={style.overlay}></div>
      <div className={style.content}>
      <h1>UP FOR A TRIP?</h1>
      <Link to={"/home"}style={{ textDecoration: 'none', color: 'white' }}>
      <h2>Let's go</h2>
      </Link>
      </div>
    </div>
  );
  
}

export default LandingPage;