const express = require('express');

const { AirplaneController } = require('../../controllers/index');

const {AirplaneMiddlewares} = require('../../middlewares/index');

const router = express.Router();

/**
 *    /api/v1/airplanes POST
 */

router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

 /**
 *     /api/v1/airplanes GET 
 */
router.get('/',AirplaneController.getAirplanes);

module.exports = router;