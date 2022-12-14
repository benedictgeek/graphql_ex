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

export const cars = [
  { id: 1, brand: "Audi", ownerId: 1 },
  { id: 2, brand: "Totota", ownerId: 1 },
  { id: 3, brand: "Lambo", ownerId: 1 },
  { id: 4, brand: "Ferarri", ownerId: 2 },
  { id: 5, brand: "BMW", ownerId: 2 },
  { id: 6, brand: "Susuki", ownerId: 2 },
  { id: 7, brand: "Volkswagen", ownerId: 3 },
  { id: 8, brand: "Honda", ownerId: 3 },
];

export const CarType = new GraphQLObjectType({
  name: "Car",
  description: "This is a car object",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    brand: { type: new GraphQLNonNull(GraphQLString) },
    ownerId: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});


