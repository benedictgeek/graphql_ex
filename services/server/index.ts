import express, { Request, Response, Express } from "express";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLFieldConfigMap,
} from "graphql";
import { graphqlHTTP } from "express-graphql";
import { carsQuery, carsMutation } from "./src/cars";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: "*",
  })
);

const AppQueryType = new GraphQLObjectType({
  name: "Queryies",
  description: "All queries",
  fields: (): GraphQLFieldConfigMap<any, any> => {
    return {
      ...carsQuery,
    };
  },
});

const AppMutationType = new GraphQLObjectType({
  name: "Mutations",
  description: "All mutations",
  fields: (): GraphQLFieldConfigMap<any, any> => {
    return {
      ...carsMutation,
    };
  },
});

const Schema = new GraphQLSchema({
  query: AppQueryType,
  mutation: AppMutationType,
});

app.use("/graphql", graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(4040, () => console.log("Server started"));
