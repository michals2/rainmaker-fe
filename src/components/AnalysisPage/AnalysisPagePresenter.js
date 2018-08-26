import * as React from 'react';
import { Button } from "antd";

import AnalysisPageSteps from "./children/AnalysisPageSteps";
// import LineChart from "components/LineChart";
// import stockPrices from "@mockData/stockPrices";
import AnalysisPageContent from "./children/AnalysisPageContent";

const AnalysisPagePresenter = props => {
  return (
    <div>
      <AnalysisPageSteps step={props.step} />
      <Button onClick={props.decrement}>Prev Step</Button>
      <Button onClick={props.increment}>Next Step</Button>
      <AnalysisPageContent step={props.step} />
    </div>
  );
};

export default AnalysisPagePresenter;
