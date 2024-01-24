const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, sequelize } = require('../models');
const { Sequelize } = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplane_detail'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departure_airport', //to show the key as 'departure_airport' in the JSON response
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=",
                            Sequelize.col("departure_airport.code"))
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrival_airport', //to show the key as 'arrival_airport' in the JSON response
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=",
                            Sequelize.col("arrival_airport.code"))
                    }
                }
            ]
        })
        return response;
    }
}

module.exports = FlightRepository;