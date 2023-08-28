const { getCountries, getCountryById} = require("../controllers/countriesController");

// Manejador de la ruta para obtener todos los países
const getCountriesHandler = async (req, res) => {
  const { name } = req.query; // Obtiene el parámetro "name" de la consulta
  try {
    
    const country = await getCountries(name); // Llama a la función getCountries con el parámetro "name"
    res.status(200).json(country); // Envía la respuesta con el código de estado 200 y el resultado en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Envía la respuesta de error con el código de estado 400 y el mensaje de error en formato JSON
  }
};

// Manejador de la ruta para obtener un país por ID
const getCountryIdHandler = async (req, res) => {
  const { idPais } = req.params; // Obtiene el parámetro "idPais" de los parámetros de la ruta
  try {
    const country = await getCountryById(idPais); // Llama a la función getCountryById con el parámetro "idPais"
    if (!country) throw new Error('Country not found'); // Si no se encuentra el país, se lanza un error
    res.status(200).json(country); // Envía la respuesta con el código de estado 200 y el resultado en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Envía la respuesta de error con el código de estado 400 y el mensaje de error en formato JSON
  }
};


// Exporta los manejadores de las rutas como un objeto
module.exports = { getCountriesHandler, getCountryIdHandler };
