import React from "react";
import LineChart from "@components/LineChart";
import stockPrices from "@mockData/stockPrices";

const AnalysisPagePresenter = () =>
  <div>
    <LineChart data={stockPrices} />
  </div>;

export default AnalysisPagePresenter;
