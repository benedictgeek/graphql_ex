import express, { Request, Response, Express } from "express";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import { graphqlHTTP } from "express-graphql";

const app: Express = express();

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

const CarType = new GraphQLObjectType({
  name: "Car",
  description: "This is a car object",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    brand: { type: GraphQLNonNull(GraphQLString) },
    ownerId: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

const AppQueryType = new GraphQLObjectType({
  name: "Queryies",
  description: "All queries",
  fields: (): GraphQLFieldConfigMap<any, any> => {
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

const Schema = new GraphQLSchema({
  query: AppQueryType,
  //  mutation: ""
});

app.use("/graphql", graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(4040, () => console.log("Server started"));
