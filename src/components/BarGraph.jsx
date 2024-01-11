import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarGraph = ({ periodData }) => {
  const chartData = {
    labels: periodData.map((_, index) => `Month ${index + 1}`),
    datasets: [
      {
        label: "INSYCS Account",
        data: periodData,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
    title: {
      display: true,
      text: "Insurance Breakdown",
      color: "rgba(22, 22, 22, 0.8)", // Text color for the title
    },
  };

  return (
    <div
      className={`bg-[#bbcee2] rounded-2xl sm:px-2 px-3 sm:py-2 w-full h-full`}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarGraph;
