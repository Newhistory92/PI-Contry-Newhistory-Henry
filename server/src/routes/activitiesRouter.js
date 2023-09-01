const { Router } = require('express');
//requiero los handlers para activities
const { getActivityHandler, postActivityHandler} = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivityHandler);//get all activities
activitiesRouter.post("/", postActivityHandler);//create activity

module.exports = activitiesRouter;