"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_1 = require("graphql");
const express_graphql_1 = require("express-graphql");
const cars_1 = require("./src/cars");
const app = (0, express_1.default)();
const AppQueryType = new graphql_1.GraphQLObjectType({
    name: "Queryies",
    description: "All queries",
    fields: () => {
        return Object.assign({}, cars_1.carsQuery);
    },
});
const Schema = new graphql_1.GraphQLSchema({
    query: AppQueryType,
    //  mutation: ""
});
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({ schema: Schema, graphiql: true }));
app.listen(4040, () => console.log("Server started"));
