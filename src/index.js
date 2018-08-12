import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { LocaleProvider } from "antd";
import en_US from "antd/lib/locale-provider/en_US";

import App from "./components/App";

const client = new ApolloClient({
  uri: "https://rainmaker-api.now.sh"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider locale={en_US}>
      <App />
    </LocaleProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
