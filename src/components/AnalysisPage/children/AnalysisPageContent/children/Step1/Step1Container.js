import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Step1Presenter from "./Step1Presenter";

const companiesQuery = gql`
  {
    companies {
      name
      symbol
    }
  }
`;

const Step1Container = graphql(companiesQuery)(Step1Presenter);

export default Step1Container;
