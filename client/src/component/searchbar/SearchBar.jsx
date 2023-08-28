import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries } from '../../redux/actions';

import style from './SearchBar.module.css';

const SearchBar = ({onPageChange}) => {
  const dispatch = useDispatch();
  const [searchCountry, setSearchCountry] = useState('');
  const error = useSelector((state) => state.error);

  const handleInputChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchCountries(searchCountry));
    setSearchCountry('');
    onPageChange(1)
  };

  const handlerCleaner = () => {
    setSearchCountry('');
    window.location.reload(); // Recargar la página
  };

  return (
    <div className={style.container}>
      <div className={style.input_container}>
      <input
        type="search"
        value={searchCountry}
        onChange={handleInputChange}
        placeholder={!error ? "Search country" : "COUNTRY NOT FOUND"}
        className={style.input}/>
      </div >
      <div className={style.buton_container}>
      {!error ? (
        <button onClick={handleSearch} className={style.button}>
          BUSCAR
        </button>
      ) : (
        <button onClick={handlerCleaner} className={style.button_error}>
        TRY AGAIN!
        </button>
    )}
    </div>
  </div>
);
};

export default SearchBar;
        






