const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

// Importa el modelo Country desde el archivo db.js, que representa la tabla correspondiente en la base de datos.
// Importa el objeto Op de Sequelize para utilizar operadores en las consultas.

const getCountries = async (name) => {
  if (!name) {
    return await Country.findAll({
      include: Activity,// aca incluyo al modelo para que me sea más fácil el filtrado de actividades
    });
  }

  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: Activity,
  });

  if (countries.length === 0) {
    throw new Error('Country not found');
  }

  return countries;
};

const getCountryById = async (id) => {
  // Define una función `getCountryById` que se encarga de obtener un país por su identificador.

  return await Country.findByPk(id, {
    include: Activity,
  });
  // Realiza una consulta a la tabla `Country` utilizando el método `findByPk`, que busca un registro por su clave primaria (en este caso, el identificador).
  // El argumento `include` se utiliza para incluir la asociación con la tabla `Activity` en la consulta.
};

module.exports = { getCountries, getCountryById };
// Exporta las funciones getCountries y getCountryById para que puedan ser utilizadas en otros archivos.
