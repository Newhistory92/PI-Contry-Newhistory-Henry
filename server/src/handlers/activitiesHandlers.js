const { createActivity, getActivity, modifyActivity } = require("../controllers/activitiesControllers");

// Manejador de la ruta para obtener todas las actividades
const getActivityHandler = async (req, res) => {
  try {
    const activity = await getActivity(); // Llama a la función getActivity para obtener todas las actividades
    res.status(200).json(activity); // Envía la respuesta con el código de estado 200 y las actividades en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Envía la respuesta de error con el código de estado 400 y el mensaje de error en formato JSON
  }
};

// Manejador de la ruta para crear una nueva actividad
const postActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body; // Obtiene los datos de la actividad del cuerpo de la solicitud, desestructuro el objeto req.body
  try {
    if (countries.length === 0) throw new Error('Debe estar asociado a un país'); // Verifica si la actividad está asociada a algún país, los paises se alamcenan en un array, verifico si el array está vacío
    const newActivity = await createActivity(name, difficulty, duration, season, countries); // Llama a la función createActivity con los datos de la nueva actividad
    res.status(200).json(newActivity); // Envía la respuesta con el código de estado 200 y la nueva actividad creada en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Envía la respuesta de error con el código de estado 400 y el mensaje de error en formato JSON
  }
};
const putActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body; // Obtiene los datos de la actividad del cuerpo de la solicitud, desestructuro el objeto req.body
  const { id } = req.params;
  try {
    if (countries.length === 0) throw new Error('Debe estar asociado a un país'); // Verifica si la actividad está asociada a algún país, los paises se alamcenan en un array, verifico si el array está vacío
    const modifiedActivity  = await modifyActivity(id, name, difficulty, duration, season, countries); // Llama a la función modifyActivity con los datos de la nueva actividad
    res.status(200).json(modifiedActivity); // Envía la respuesta con el código de estado 200 y la nueva actividad creada en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Envía la respuesta de error con el código de estado 400 y el mensaje de error en formato JSON
  }
};
// Exporta los manejadores de las rutas como un objeto
module.exports = { getActivityHandler, postActivityHandler,putActivityHandler };
