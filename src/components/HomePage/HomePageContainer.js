import { graphql } from "react-apollo";
import gql from "graphql-tag";

import HomePagePresenter from "./HomePagePresenter";

const companyNameQuery = gql`
  {
    company(symbol: "tsla") {
      name
    }
  }
`;

const HomePageContainer = graphql(companyNameQuery)(HomePagePresenter);

export default HomePageContainer;
