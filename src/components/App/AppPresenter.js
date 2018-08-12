import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const myQuery = gql`
  {
    company(symbol: "tsla") {
      name
    }
  }
`;

const App = props => {
  const { company } = props.data;
  return (
    <div>
      <h1>Rainmaker</h1>
      <h3>
        {company ? company.name : null}
      </h3>
    </div>
  );
};

export default graphql(myQuery)(App);
