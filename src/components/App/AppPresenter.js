import React from "react";
import { Button } from "antd";
import LineChart from "@components/LineChart";

import stockPrices from "@mockData/stockPrices";

const AppPresenter = props => {
  const { company } = props.data;
  return (
    <div>
      <h1>Rainmaker</h1>
      <h3>
        {company ? company.name : null}
      </h3>
      <Button type="primary">Button</Button>
      <LineChart data={stockPrices} />
    </div>
  );
};

export default AppPresenter;
