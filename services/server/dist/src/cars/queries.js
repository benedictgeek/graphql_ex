"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsQuery = exports.CarsQuery = exports.CarQuery = void 0;
const graphql_1 = require("graphql");
const models_1 = require("./models");
exports.CarQuery = {
    type: models_1.CarType,
    description: "Fetch a single car",
    args: {
        id: { type: graphql_1.GraphQLInt },
    },
    resolve: (_, args) => {
        return models_1.cars.find((car) => car.id == args.id);
    },
};
exports.CarsQuery = {
    type: (0, graphql_1.GraphQLList)(models_1.CarType),
    description: "List all cars",
    resolve: () => {
        return models_1.cars;
    },
};
exports.carsQuery = {
    car: exports.CarQuery,
    cars: exports.CarsQuery,
};
