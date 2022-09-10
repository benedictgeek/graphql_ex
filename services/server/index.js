"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_1 = require("graphql");
const express_graphql_1 = require("express-graphql");
const app = (0, express_1.default)();
const cars = [
    { id: 1, brand: "Audi", ownerId: 1 },
    { id: 2, brand: "Totota", ownerId: 1 },
    { id: 3, brand: "Lambo", ownerId: 1 },
    { id: 4, brand: "Ferarri", ownerId: 2 },
    { id: 5, brand: "BMW", ownerId: 2 },
    { id: 6, brand: "Susuki", ownerId: 2 },
    { id: 7, brand: "Volkswagen", ownerId: 3 },
    { id: 8, brand: "Honda", ownerId: 3 },
];
const CarType = new graphql_1.GraphQLObjectType({
    name: "Car",
    description: "This is a car object",
    fields: () => ({
        id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
        brand: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
        ownerId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLInt) },
    }),
});
const AppQueryType = new graphql_1.GraphQLObjectType({
    name: "Queryies",
    description: "All queries",
    fields: () => {
        return {
            cars: {
                type: CarType,
                description: "List all cars",
                resolve: () => {
                    return cars;
                },
            },
        };
    },
});
const Schema = new graphql_1.GraphQLSchema({
    query: AppQueryType,
    //  mutation: ""
});
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({ schema: Schema, graphiql: true }));
