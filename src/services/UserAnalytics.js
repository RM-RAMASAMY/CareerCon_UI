import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const UserAnalytics = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard"
      style={{  
        height: `500px` 
      }}
      >
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#0D3F82",
                borderColor: "#0D3F82",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
      <div className="chartsContainer" style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div className="dataCard categoryCard"
    style={{  
      height: `500px`, 
      width: `500px`,
      position: 'relative',
      marginRight: '20px' // Optional: Add some space between the charts
    }}
  >
    <Bar
      data={{
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Revenue Source",
          },
        },
      }}
    />
  </div>

  <div className="dataCard categoryCard"
    style={{  
      height: `500px`, 
      width: `500px`,
      position: 'relative'
    }}
  >
    <Doughnut
      data={{
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
          },
        ],
      }}
    />
  </div>
</div>
    </div>
  );
};