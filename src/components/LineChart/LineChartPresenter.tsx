import * as React from "react";
import { scaleLinear, scaleTime, line as d3Line, extent, timeParse } from "d3";

// import stockPrices from "mockData/stockPrices";

// import * as deepmerge from "deepmerge";

interface lineChartDataPointParsed {
  date: number;
  price: number;
}
interface lineChartDataPoint {
  date: string;
  price: number;
}
interface lineChartConfig {
  dims: {
    chart: {
      height: number;
      width: number;
    };
    margin: { top: number; right: number; bottom: number; left: number };
  };
  data: {
    yDataKey: string;
    xDataKey: string;
    dateFormat: string;
  };
}

interface lineChartPresenterProps {
  data: lineChartDataPoint[];
  config: lineChartConfig;
}

const LineChartPresenter = ({
  data = [],
  config = {
    dims: {
      chart: {
        height: 150,
        width: 200,
      },
      margin: { top: 10, right: 10, bottom: 10, left: 10 },
    },
    data: {
      yDataKey: "price",
      xDataKey: "date",
      dateFormat: "%d-%b-%y",
    },
  },
}: lineChartPresenterProps) => {
  const width =
    config.dims.chart.width -
    config.dims.margin.left -
    config.dims.margin.right;
  const height =
    config.dims.chart.height -
    config.dims.margin.top -
    config.dims.margin.bottom;

  const parseTime = timeParse(config.data.dateFormat);
  const x = scaleTime().rangeRound([0, width]);
  const y = scaleLinear().rangeRound([height, 0]);
  const line = d3Line<lineChartDataPointParsed>()
    .x((d: lineChartDataPointParsed) => x(d.date))
    .y(d => y(d.price));

  const parsedData: lineChartDataPointParsed[] = data.map(d => ({
    date: parseTime(d.date),
    price: d.price,
  }));

  x.domain(extent(parsedData, => d[config.data.xDataKey]));
  y.domain(extent(parsedData, d => d[config.data.yDataKey]));

  return (
    <svg
      width={config.dims.chart.width}
      height={config.dims.chart.height}
      style={{ border: "1px solid" }}
    >
      <g
        transform={`translate(${config.dims.margin.left},${
          config.dims.margin.right
        })`}
      >
        <path
          fill="none"
          stroke="steelblue"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d={line(parsedData)}
        />
      </g>
    </svg>
  );
};

export default LineChartPresenter;
