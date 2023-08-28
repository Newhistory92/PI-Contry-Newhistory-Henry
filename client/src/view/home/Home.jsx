import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterByActivity,
  filterByContinent,
  orderByPopulation,
  order,
} from "../../redux/actions";
import SearchBar from "../../component/searchbar/SearchBar";
import Card from "../../component/card/Card"; // Asumo que tienes un componente Card importado

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const selectCountry = useSelector((state) => state.selectCountry);
  const countries = useSelector((state) => state.countries);
  const continent = useSelector((state) => state.sortContinent);
  const population = useSelector((state) => state.sortPopulation);
  const countriesOrder = useSelector((state) => state.countriesOrder);
  const activityCountry = useSelector((state) => state.countriesWithActivities);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Asume el número de elementos por página que deseas mostrar

  useEffect(() => {
    dispatch(getAllCountries());
    
  }, [dispatch]);

  useEffect(() => {
    setCurrentData(countries);
  }, [countries]);
  
  useEffect(() => {
    setCurrentData(selectCountry);
  }, [selectCountry]);

  useEffect(() => {
    setCurrentData(continent);
  }, [continent]);

  useEffect(() => {
    setCurrentData(population);
  }, [population]);

  useEffect(() => {
    setCurrentData(countriesOrder);
  }, [countriesOrder]);

  useEffect(() => {
    setCurrentData(activityCountry);
  }, [activityCountry]);

  // Obtener los elementos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const data = currentData.slice(startIndex, endIndex);

  // Funciones para cambiar de página
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(currentData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  const handleFilterByContinent = (event) => {
    dispatch(filterByContinent(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterByPopulation = (event) => {
    dispatch(orderByPopulation(event.target.value));
    setCurrentPage(1);
  };

  const handlerOrderAlphabetically = (event) => {
    dispatch(order(event.target.value));
    setCurrentPage(1);
  };

  const handleFilterByActivity = (event) => {
    dispatch(filterByActivity(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const renderItem = (country) => (
    <Card
      key={country.id}
      id={country.id}
      flag={country.flag}
      name={country.name}
      continent={country.continent}
    />
  );

  return (
         <div className={style.container}>
          <div className={style.selects}>
            <select className={style.select} onChange={handleFilterByContinent}>
              <option value="All">CONTINENTS</option>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="South America">South America</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
              <option value="Oceania">Oceania</option>
            </select>

            <select className={style.select} onChange={handleFilterByPopulation}>
              <option value="All">POPULATION</option>
              <option value="Max">Max population</option>
              <option value="Min">Min population</option>
            </select>

            <select
              className={style.select}
              onChange={handlerOrderAlphabetically}
            >
              <option value="All">ORDER</option>
              <option value="A-Z">A to Z</option>
              <option value="Z-A">Z to A</option>
            </select>

            <select className={style.select} onChange={handleFilterByActivity}>
              <option value="All">BY ACTIVITY</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
            </select>
          </div>

          <div>
            <SearchBar onPageChange={handlePageChange} />
          </div>
          {data.length > 0 ? (
          <div className={style.cards}>
              <div>
                {data.map((item) => renderItem(item))}
                <div>
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <span>
                    {currentPage} de {totalPages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={endIndex >= currentData.length}
                  >
                    Next
                  </button>
                </div>
              </div>
          </div>
          ): (
            <div>
             
              <p>Loading...</p>
              </div>
            )}
        </div>
     
    )
  

};

export default Home;


