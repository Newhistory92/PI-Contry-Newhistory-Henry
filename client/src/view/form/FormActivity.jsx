import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, createActivity } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { validate } from "./validate"; // Reemplaza 'ruta-del-archivo' con la ruta correcta
import style from "./FormActivity.module.css";

const FormActivity = () => {
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});
  const [createAnother, setCreateAnother] = useState(false);// uso este estado para poder renderizar botones condicionalmente una vez que se crea la actividad

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    if (!input.countries.includes(selectedCountryId)) { //verifico que no se repita el pais
      setInput({
        ...input,
        countries: [...input.countries, selectedCountryId],
      });
    }
    setErrors(
      validate({
        ...input,
        countries: [...input.countries, selectedCountryId],
      })
    );
  };

  const handleRemoveCountry = (countryId) => {
    setInput({
      ...input,
      countries: input.countries.filter((id) => id !== countryId),//filtro los paises que no tenga el id que quiero eliminar
    });
    setErrors(
      validate({
        ...input,
        countries: input.countries.filter((id) => id !== countryId),
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.name === "") {
      alert("Debes completar los campos requeridos");
    } else {
      dispatch(createActivity(input));
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      setCreateAnother(true);
    }
  };

  return (
  <div classNam={style.back}>
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        {errors.name && <span className={style.span}>{errors.name}</span>}{" "}
        {/* Renderizar el mensaje de error si existe */}
        <label htmlFor="difficulty">Difficulty Level: </label>
        <input
          type="number"
          name="difficulty"
          min="1"
          max="5"
          value={input.difficulty}
          onChange={handleChange}
        />
        {errors.difficulty && (
          <span className={style.span}>{errors.difficulty}</span>
        )}{" "}
        {/* Renderizar el mensaje de error si existe */}
        <label htmlFor="duration">Duration: (hours) </label>
        <input
          type="number"
          name="duration"
          min="1"
          max="24"
          value={input.duration}
          onChange={handleChange}
        />
        {errors.duration && (
          <span className={style.span}>{errors.duration}</span>
        )}{" "}
        {/* Renderizar el mensaje de error si existe */}
        <div>
          <label htmlFor="season">Season: </label>
          <input
            type="radio"
            name="season"
            value="Summer"
            checked={input.season === "Summer"}
            onChange={handleChange}
          />
          Summer
          <input
            type="radio"
            name="season"
            value="Winter"
            checked={input.season === "Winter"}
            onChange={handleChange}
          />
          Winter
          <input
            type="radio"
            name="season"
            value="Autumn"
            checked={input.season === "Autumn"}
            onChange={handleChange}
          />
          Autumn
          <input
            type="radio"
            name="season"
            value="Spring"
            checked={input.season === "Spring"}
            onChange={handleChange}
          />
          Springs
        </div>
        {errors.season && <span className={style.span}>{errors.season}</span>}{" "}
        {/* Renderizar el mensaje de error si existe */}
        <div>
          <label htmlFor="countries">Country: </label>
          <div className={style.countryContainer}>
            <select name="countries" onChange={handleCountryChange}>
              <option>Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {errors.countries && (
          <span className={style.span}>{errors.countries}</span>
        )}{" "}
        {/* Renderizar el mensaje de error si existe */}
        <div className={style.countriesContainer}>
          {input.countries.map((countryId) => (
            <div key={countryId} className={style.countryItem}>
              <span>
                {countries.find((country) => country.id === countryId)?.name}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveCountry(countryId)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        {createAnother && (
          <>
            <p>Activity created!</p>

            <button
              type="submit"
              onClick={() => setCreateAnother(false)}
              className={style.button}
            >
              Create another activity
            </button>
            <button
              type="submit"
              onClick={() => navegate("/home")}
              className={style.button}
            >
              Home
            </button>
          </>
        )}
        <button
          type="submit"
          disabled={
            errors.name ||
            errors.difficulty ||
            errors.duration ||
            errors.season ||
            errors.countries ||
            createAnother
          }
          className={style.button}
        >
          Create
        </button>
      </form>
    </div>
  </div>
  );
};

export default FormActivity;
