import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  const location = useLocation();

  // Comprueba si la ubicación actual es la página de inicio
  const isHome = location.pathname === "/home";
  const isActivity = location.pathname === "/activity";
  return (
    <div className={style.nav}>
        {!isActivity && ( // Si no estás en la página de crear actividad, muestra el enlace a la página de crear actividad
          <>
          <li>
          <Link to="/activity">
            <button className={style.button}>CREATE ACTIVITY</button>
          </Link>
        </li>
        </>
        )}
        {!isHome && ( // Si no estás en la página de inicio, muestra el enlace a la página de inicio
          <li>
            <Link to="/home">
              <button className={style.button}>HOME</button>
            </Link>
          </li>
        )}
        {isHome && ( // Si no estás en la página de inicio, muestra el enlace a la página de inicio
          <li>
            <Link to="/">
              <button className={style.button}>LOGOUT</button>
            </Link>
          </li>
        )}
    </div>
  );
};

export default Nav;

        
          
        
    
