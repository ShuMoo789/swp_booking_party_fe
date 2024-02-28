import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart depicting revenue and customer statistics by month.",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
      borderColor: "rgb(52, 168, 83)",
      backgroundColor: " rgb(173, 216, 230)",
    },
    {
      label: " Customers",
      data: labels.map(() => Math.floor(Math.random() * 100) + 1),
      borderColor: "rgb(255, 159, 64)",
      backgroundColor: "rgb(255, 218, 185)",
    },
  ],
};

export const Statistic = () => {
  return <Line data={data} options={options} />;
};
