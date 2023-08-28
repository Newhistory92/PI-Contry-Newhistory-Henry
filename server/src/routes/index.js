const { Router } = require('express');
// Importar todos los routers;
const countriesRouter = require('../routes/countriesRouter');
const activitiesRouter = require('../routes/activitiesRouter');

const router = Router();

// Configurar los routers
router.use('/countries', countriesRouter);//agrego el prefijo /countries a todas las rutas de countriesRouter
router.use('/activities', activitiesRouter);//agrego el prefijo /activities a todas las rutas de activitiesRouter


module.exports = router;