const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services/index');

const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

/**
 * POST : /flights
 * req-body 
 * {
 *  flightNumber: 'UK656',
 *  airplaneId: 'A380'
 *  code: 'BLR', 
 *  departureAirportId:'1',
 *  arrivalAirportId: '2',
 *  arrivalTime: '19:00:00',
 *  departureTime: '18:00:00',
 *  price: 7000,
 *  boardingGate: 'D19',
 *  totalSeats: 300
 * } 
 */
async function createFlight(req, res) {
    try {
        const airport = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        })
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createFlight
}