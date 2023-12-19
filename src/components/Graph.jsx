import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Graph = ({ data }) => {
  // Round the data to the nearest whole number
  const roundedData = {
    companyExpenses: Math.round(data.companyExpenses),
    claimPayout: Math.round(data.claimPayout),
    companyProfit: Math.round(data.companyProfit),
  };

  const chartData = {
    labels: ["Company Expenses", "Claim Payout", "Company Profit"],
    datasets: [
      {
        data: [roundedData.companyExpenses, roundedData.claimPayout, roundedData.companyProfit],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "rgba(22, 22, 22, 0.8)", // Text color for the legend
        },
      },
      title: {
        display: true,
        text: "Insurance Breakdown",
        color: "rgba(22, 22, 22, 0.8)", // Text color for the title
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += '$' + context.parsed;
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div
      className={`bg-[#bbcee2] rounded-2xl sm:px-16 px-3 sm:py-16 min-h-[300px]`}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default Graph;
