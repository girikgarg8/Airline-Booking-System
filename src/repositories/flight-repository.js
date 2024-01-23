const CrudRepository = require('./crud-repository');
const { Flight, Airplane } = require('../models/index');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: {
                model: Airplane //todo: explore more about this
            }
        })
        return response;
    }
}

module.exports = FlightRepository;