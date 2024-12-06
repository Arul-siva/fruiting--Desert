import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

// Material chart options
const options = {
  chart: {
    title: "Fruit Sales Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

function BarChat() {
  return (
    <Chart
    height="300px"
    width="100%"
     className=""
      chartType="Bar"
      data={data}
      options={options}
    />
  );
}

export default BarChat;