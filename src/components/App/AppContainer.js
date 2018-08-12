import { graphql } from "react-apollo";
import gql from "graphql-tag";

const myQuery = gql`
  {
    hello
  }
`;

const AppContainer = graphql(myQuery);

export default AppContainer;
