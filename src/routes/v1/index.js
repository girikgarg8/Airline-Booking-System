const express = require('express');

const router = express.Router();

const airplaneRoutes = require ('./airplane-routes');

const {InfoController , AirplaneController} = require('../../controllers/index');

router.get('/info',InfoController.info);
router.use('/airplanes',airplaneRoutes);

module.exports = router;