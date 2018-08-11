import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

console.log(gql, graphql);

const myQuery = gql`
  {
    hello
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Rainmaker</h1>
        <h3>
          {this.props.data.hello}
        </h3>
      </div>
    );
  }
}

export default graphql(myQuery)(App);
