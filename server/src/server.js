const express = require("express"); // Importamos la biblioteca Express, para crear aplicaciones web y APIs en Node.js.
const router = require("./routes/index"); // Importamos el módulo de rutas
const morgan = require("morgan"); // Importamos la biblioteca Morgan, para registrar solicitudes HTTP en la consola con diversos formatos.
const cors = require("cors"); // Importamos la biblioteca Cors, para habilitar el intercambio de recursos entre diferentes dominios.
const server = express(); // Creamos una instancia de la aplicación Express.


//===MIDDLEWARES
server.use(morgan("dev")); // Morgan con el formato "dev" para registrar las solicitudes en la consola.
server.use(express.json()); // Express para analizar las solicitudes entrantes con formato JSON.
server.use(cors()); // Cors para permitir solicitudes de diferentes dominios.
//======
server.use(router); // Módulo de rutas importado para manejar las rutas y las solicitudes en la aplicación.

module.exports = server;










