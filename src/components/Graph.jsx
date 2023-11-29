import React from "react";
import { styles } from "../styles";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Graph = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Lighter grid lines for the x-axis
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // Lighter text color for the x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Lighter grid lines for the y-axis
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // Lighter text color for the y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // Lighter text color for the legend
        },
      },
      title: {
        display: true,
        text: "Insurance Breakdown",
        color: "rgba(255, 255, 255, 0.8)", // Lighter text color for the title
      },
    },
  };


  return (
    <div
      className={`bg-[#bcc0d2] rounded-2xl sm:px-16 px-3 sm:py-16 min-h-[300px]`}
      style={{ width: "600px", height: "400px" }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
