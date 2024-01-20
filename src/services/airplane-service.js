const { AirplaneRepository } = require('../repositories/index')

const { StatusCodes } = require('http-status-codes');

const airplaneRepository = new AirplaneRepository();

const AppError = require('../utils/errors/app-error');

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch (error) {
        if (error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}