import express, { Request, Response, Express } from "express";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLFieldConfigMap,
} from "graphql";
import { graphqlHTTP } from "express-graphql";
import { carsQuery } from "./src/cars";

const app: Express = express();

const AppQueryType = new GraphQLObjectType({
  name: "Queryies",
  description: "All queries",
  fields: (): GraphQLFieldConfigMap<any, any> => {
    return {
      ...carsQuery,
    };
  },
});

const Schema = new GraphQLSchema({
  query: AppQueryType,
  //  mutation: ""
});

app.use("/graphql", graphqlHTTP({ schema: Schema, graphiql: true }));

app.listen(4040, () => console.log("Server started"));
