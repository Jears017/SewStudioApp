import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import BasicLayout from "../../common/BasicLayout"

import "./styles.css";
import { Typography } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        displayColors: false,
        // callbacks: {
        //   footer: setFooterTooltip,
        //   label: setLabelTooltip,
        // },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            if (value) return String(value);
          },
        },
      },
    },
  };

  const data = {
    labels: ["Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [
      {
        data: [100, 25, 30, 45, 34, 55, 35],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 7,
        pointHoverRadius: 10,
      },
    ],
  };
  return (
    <BasicLayout>
      <div className="analyticsWrapper">
        <div>
          <Typography variant="h4">График оформленных заказов</Typography>
        </div>
        <Line datasetIdKey="id" options={options} data={data} />
      </div>
    </BasicLayout>
  );
};

export default Analytics;
