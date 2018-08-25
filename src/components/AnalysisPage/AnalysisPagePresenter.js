import React from "react";
import { Button } from "antd";

import AnalysisPageSteps from "./children/AnalysisPageSteps";
import LineChart from "@components/LineChart";
import stockPrices from "@mockData/stockPrices";

import Auth from "../../Auth/Auth.js";

const auth = new Auth();

const AnalysisPagePresenter = props => {
  console.log({ props });
  return (
    <div>
      <AnalysisPageSteps />
      {/* <Button onClick={props.increment}>Increment</Button> */}
      <Button onClick={() => auth.login()}>Increment</Button>
      <LineChart data={stockPrices} />
    </div>
  );
};

export default AnalysisPagePresenter;
