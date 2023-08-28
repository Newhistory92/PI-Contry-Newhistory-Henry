const { Router } = require('express');
//requiero los handlers para countries
const {getCountriesHandler, getCountryIdHandler} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);//get all countries
countriesRouter.get("/:idPais", getCountryIdHandler);//get country by id

module.exports = countriesRouter;
