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
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: 'xy',
          speed: 0.1,
          onZoomComplete: ({ chart }) => {
            chart.update('none');
          },
        },
        pan: {
          enabled: true,
          mode: 'xy',
          speed: 20,
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

  return (
    <div className="chart-container">
      <Line ref={chartRef} data={chartData} options={options} />
      <div className="zoom-buttons">
        <button onClick={() => chartRef.current.resetZoom()} className="zoom-button">--</button>
      </div>
    </div>
  );
};

export default DataChart;
