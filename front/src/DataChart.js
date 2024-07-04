import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataChart = ({ data, tValues, label }) => {
  const chartData = {
    labels: tValues,
    datasets: [
      {
        label: label,
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'T' 
        }
      },
      y: {
        title: {
          display: true,
          text: label 
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default DataChart;
