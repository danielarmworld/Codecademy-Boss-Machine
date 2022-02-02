const express = require('express');
const apiRouter = express.Router();

//Controllers
const minionsController = require('../controller/minions');
const ideasController = require('../controller/ideas');
const meetingsController = require('../controller/meetings');

apiRouter.use('/minions', minionsController);
apiRouter.use('/ideas', ideasController);
apiRouter.use('/meetings', meetingsController);


module.exports = apiRouter;
