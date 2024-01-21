const express = require('express');

const router = express.Router();

const airplaneRoutes = require('./airplane-routes');

const { InfoController, AirplaneController } = require('../../controllers/index');

const cityRoutes = require('./city-routes');

router.get('/info', InfoController.info);

router.use('/airplanes', airplaneRoutes);

router.use('/cities', cityRoutes);

module.exports = router;