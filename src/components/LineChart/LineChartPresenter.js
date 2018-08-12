import React from "react";
import { scaleLinear, scaleTime, line as d3Line, extent, timeParse } from "d3";

const LineChartPresenter = ({ data = [], config }) => {
  const defaultOptions = {
    dims: {
      chart: {
        width: 960,
        height: 500
      },
      margin: { top: 20, right: 20, bottom: 30, left: 50 }
    },
    data: {
      yDataKey: "price",
      xDataKey: "date",
      dateFormat: "%d-%b-%y"
    }
  };
  const options = Object.assign({}, defaultOptions, config);

  const width =
    options.dims.chart.width -
    options.dims.margin.left -
    options.dims.margin.right;
  const height =
    options.dims.chart.height -
    options.dims.margin.top -
    options.dims.margin.bottom;

  const parseTime = timeParse(options.data.dateFormat);
  var x = scaleTime().rangeRound([0, width]);
  var y = scaleLinear().rangeRound([height, 0]);
  var line = d3Line().x(d => x(d.date)).y(d => y(d.price));

  const parsedData = data.map(d => ({
    date: parseTime(d.date),
    price: d.price
  }));

  x.domain(extent(parsedData, d => d[options.data.xDataKey]));
  y.domain(extent(parsedData, d => d[options.data.yDataKey]));

  return (
    <svg width={options.dims.chart.width} height={options.dims.chart.height}>
      <g
        transform={`translate(${options.dims.margin.left},${options.dims.margin
          .right})`}
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
