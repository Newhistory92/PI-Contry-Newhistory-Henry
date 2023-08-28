const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING ,
      unique:true,
      primaryKey: true,
      allowNull:false,
      validate: {
        len: {
          args: [3, 3], // Validar longitud exacta de 3 caracteres
          msg: 'El campo "id" debe contener exactamente 3 letras.'
        },
        is: {
          args: /^[A-Za-z]+$/, // Expresión regular para validar letras
          msg: 'El campo "id" solo puede contener letras.'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING, 
    },
    area:{
      type:DataTypes.FLOAT,
      allowNull: false
    },
    population:{
      type:DataTypes.INTEGER,
      allowNull:false
    }

  });
};