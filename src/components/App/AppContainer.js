import { graphql } from "react-apollo";
import gql from "graphql-tag";

import AppPresenter from "./AppPresenter";

const companyNameQuery = gql`
  {
    company(symbol: "tsla") {
      name
    }
  }
`;

const AppContainer = graphql(companyNameQuery)(AppPresenter);

export default AppContainer;
