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

export const CarQuery: GraphQLFieldConfig<any, any> = {
  type: CarType,
  description: "Fetch a single car",
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (_, args) => {
    return cars.find((car) => car.id == args.id);
  },
};

export const CarsQuery: GraphQLFieldConfig<any, any> = {
  type: GraphQLList(CarType),
  description: "List all cars",
  resolve: () => {
    return cars;
  },
};

export const carsQuery = {
  car: CarQuery,
  cars: CarsQuery,
};
