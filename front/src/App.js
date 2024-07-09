import React, { useState } from 'react';
import DataTable from './DataTable';
import DataChart from './DataChart';
import './App.css';

const App = () => {
  const [xComponents, setXComponents] = useState([]);
  const [yComponents, setYComponents] = useState([]);
  const [tValues, setTValues] = useState([]);

  const handleDataSubmit = (xList, yList, tList) => {
    setXComponents(xList);
    setYComponents(yList);
    setTValues(tList);
  };

  return (
    <div>
      <h1>Visualisation de Contrôle Optimal</h1>
      <DataTable onDataSubmit={handleDataSubmit} />
      <div className="chart-container">
        {xComponents.map((xComponent, index) => (
          <div key={index} className="chart-wrapper">
            <h2>X{index + 1} vs T</h2>
            <DataChart data={xComponent} tValues={tValues} label={`X${index + 1}`} />
          </div>
        ))}
        {yComponents.map((yComponent, index) => (
          <div key={index} className="chart-wrapper">
            <h2>Y{index + 1} vs T</h2>
            <DataChart data={yComponent} tValues={tValues} label={`Y${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
