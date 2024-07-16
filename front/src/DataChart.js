import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import './App.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

const DataChart = ({ data, tValues, label, axisLabel }) => {
  const chartRef = useRef(null);

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
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
      },
      title: {
        display: true,
        text: ``,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: axisLabel,
        },
      },
      y: {
        title: {
          display: true,
          text: label,
        },
      },
    },
  };

  const handleResetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <div>
      <Line ref={chartRef} data={chartData} options={options} />
      <button onClick={handleResetZoom}>Réinitialiser zoom</button>
    </div>
  );
};

export default DataChart;
