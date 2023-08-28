import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountriesDetail, cleanDetail } from "../../redux/actions";
import style from "./DetailCountries.module.css";

const DetailCountries = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountriesDetail(id)); // me traigo el detalle del pais
    dispatch(cleanDetail()); // limpio el estado global details para que no aparezca el detalle del pais anterior
  }, [dispatch, id]);

  return (
  <div className={style.body}>
    {detail.name ? (
    <div className={style.container}>
      <h1>{detail.name}</h1>
      <img src={detail.image} alt="imagen" width="200px" height="150px" />
      <div className={style.countryDetail}>
      <p className={style.nameDetail}>ID: </p>
      <p>{detail.id}</p>
      <p className={style.nameDetail}>CONTINENT: </p>
      <p>{detail.continent}</p>
      <p className={style.nameDetail}>CAPITAL:  </p>
      <p>{detail.capital}</p>
      <p className={style.nameDetail}>POPULATION: </p>
      <p> {detail.population}</p>
      <p className={style.nameDetail}>AREA: </p>
      <p> {detail.area}</p>
      <p className={style.nameDetail}>SUB-REGION: </p>
      <p> {detail.subregion}</p>
      </div>
      {detail.activities && detail.activities.length > 0 && (
        <>
        <div className={style.activities}>
        <h2>Activities:</h2>
          {detail.activities.map((activity) => (
            <div key={activity.id}>
              <p className={style.nameActivity}>NAME: </p>
              <p >{activity.name}</p>
              <p className={style.nameActivity}>DURATION: </p>
              <p>{activity.duration} hs</p>
              <p className={style.nameActivity}>SEASON: </p>
              <p>{activity.season}</p>
              <p className={style.nameActivity}>DIFFICULTY: </p>
              <p>Level: {activity.difficulty}</p>
            </div>
          ))}
          </div>
        </>
      )} 
       </div>
    ):(
      <div>
          <p>Loading...</p>
      </div>
    )
    }
    </div>
  );
};

export default DetailCountries;

    
         
