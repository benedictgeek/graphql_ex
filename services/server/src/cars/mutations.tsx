import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { cars, CarType } from "./models";

export const createCar: GraphQLFieldConfig<any, any> = {
  type: CarType,
  description: "Create a car",
  args: {
    // id: { type: GraphQLInt },
    brand: { type: GraphQLNonNull(GraphQLString) },
    // ownerId: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, args) => {
    let newCar = { id: 6, brand: args.brand, ownerId: 2 };
    cars.push(newCar);
    return newCar;
  },
};

export const carsMutation = { createCar };
