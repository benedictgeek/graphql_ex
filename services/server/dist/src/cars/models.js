"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarType = exports.cars = void 0;
const graphql_1 = require("graphql");
exports.cars = [
    { id: 1, brand: "Audi", ownerId: 1 },
    { id: 2, brand: "Totota", ownerId: 1 },
    { id: 3, brand: "Lambo", ownerId: 1 },
    { id: 4, brand: "Ferarri", ownerId: 2 },
    { id: 5, brand: "BMW", ownerId: 2 },
    { id: 6, brand: "Susuki", ownerId: 2 },
    { id: 7, brand: "Volkswagen", ownerId: 3 },
    { id: 8, brand: "Honda", ownerId: 3 },
];
exports.CarType = new graphql_1.GraphQLObjectType({
    name: "Car",
    description: "This is a car object",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        brand: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        ownerId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
    }),
});
