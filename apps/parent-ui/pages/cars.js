import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    cars {
      brand
    }
  }
`;

const Cars = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <div>Loading cars...</div>;
  return <div>Cars Page</div>;
};

export default Cars;
