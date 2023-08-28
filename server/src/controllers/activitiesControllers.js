const { Activity, Country } = require("../db");

// Importa los modelos Activity y Country desde el archivo db.js, que representan las tablas correspondientes en la base de datos.

const getActivity = async () => {
  // Define una función getActivity que se encarga de obtener todas las actividades.
  return await Activity.findAll({
    // Realiza una consulta a la tabla Activity para obtener todas las filas de datos. El método findAll devuelve una promesa.
    include: [
      {
        model: Country,
        attributes: ["id"]
        // Especifica las relaciones que se deben incluir en la consulta. En este caso, se incluye la relación con el modelo Country.
        // Establece el modelo Country como el modelo de referencia para la relación.
        // Especifica los atributos del modelo Country que se deben incluir en la consulta. En este caso, solo se incluye el atributo "id".
      }
    ]
  });
}

const createActivity = async (name, difficulty, duration, season, countries) => {
  // Define una función createActivity que crea una nueva actividad.
  const newActivity = await Activity.create({ name, difficulty, duration, season });
  // Crea una nueva instancia del modelo Activity con los parámetros proporcionados y la asigna a la variable newActivity. El método create devuelve una promesa.
  await newActivity.addCountries(countries);
  // Asocia los países especificados a la nueva actividad utilizando el método addCountries, que es generado automáticamente por Sequelize debido a la relación definida entre Activity y Country. La asociación se basa en los identificadores de los países proporcionados en el parámetro countries.
  return newActivity;
  // Devuelve la nueva actividad creada.
}
const modifyActivity = async (id, name, difficulty, duration, season, countries) => {
  try {
    const activity = await Activity.findByPk(id);
    if (!activity) {
      throw new Error('No se encontró la actividad');
    }
    
    await activity.setCountries(countries);
    
    const updatedActivity = await activity.update({ name, difficulty, duration, season });
    
    return updatedActivity;
  } catch (error) {
    throw new Error('No se pudo modificar la actividad');
  }
};
module.exports = { createActivity, getActivity, modifyActivity };
// Exporta las funciones createActivity y getActivity para que puedan ser utilizadas en otros archivos.
