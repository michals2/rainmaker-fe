import { graphql } from "react-apollo";
import gql from "graphql-tag";

import Step0Presenter from "./Step0Presenter";

const companiesQuery = gql`
  {
    iex {
      stock(symbol: "tsla") {
        chart(range: d1) {
          minute
          high
          low
          average
        }
      }
    }
  }
`;

const Step0Container = graphql(companiesQuery)(Step0Presenter);

export default Step0Container;
