const { Router } = require('express');
//requiero los handlers para activities
const { getActivityHandler, postActivityHandler,putActivityHandler } = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivityHandler);//get all activities
activitiesRouter.post("/", postActivityHandler);//create activity
activitiesRouter.put("/:id", putActivityHandler);//update activity
module.exports = activitiesRouter;