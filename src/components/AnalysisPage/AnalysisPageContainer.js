import { graphql } from "react-apollo";
import gql from "graphql-tag";

import AnalysisPagePresenter from "./AnalysisPagePresenter";

const companyNameQuery = gql`
  {
    company(symbol: "tsla") {
      name
    }
  }
`;

const AnalysisPageContainer = graphql(companyNameQuery)(AnalysisPagePresenter);

export default AnalysisPageContainer;
