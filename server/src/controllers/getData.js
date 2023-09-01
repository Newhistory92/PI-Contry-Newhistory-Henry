const axios = require("axios");
const { Country } = require ('../db.js');
const ENDPOINT = 'http://localhost:5000/countries';

const getApiCountries = async () => {
    try {
        const countries = await axios.get(ENDPOINT)

        const mapCountry = countries.data.map(country => ({
            id: country.cca3,
            name: country.name.common,
            flag:country.flags.png,
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : "No capital",
            subregion: country.subregion ? country.subregion : "No subregion",
            area: country.area ? country.area : "No area",
            population: country.population
        }))
    
        await Promise.all(mapCountry.map(country => Country.create(country)));
    } catch (error) { 
      console.log( { error : error.message});
    }
  }
  


module.exports = getApiCountries