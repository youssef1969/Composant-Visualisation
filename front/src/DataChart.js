import React from 'react';
import { Line } from 'react-chartjs-2';

const DataChart = ({ data }) => {
  const chartData = {
    labels: data.map(point => point.x),
    datasets: [
      {
        label: 'Control Optimal',
        data: data.map(point => point.y),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DataChart;
