import React, { useState } from 'react';
import DataTable from './DataTable';
import DataChart from './DataChart';
import './App.css';

const App = () => {
  const [xComponents, setXComponents] = useState([]);
  const [pComponents, setPComponents] = useState([]);
  const [uComponents, setUComponents] = useState([]);
  const [tValues, setTValues] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const [pLabels, setPLabels] = useState([]);
  const [uLabels, setULabels] = useState([]);
  const [axisLabel, setAxisLabel] = useState('');

  const handleDataSubmit = (xList, pList, uList, tList, xLabels, pLabels, uLabels, axisLabel) => {
    setXComponents(xList);
    setPComponents(pList);
    setUComponents(uList);
    setTValues(tList);
    setXLabels(xLabels);
    setULabels(uLabels);
    setPLabels(pLabels);
    setAxisLabel(axisLabel);
  };

  return (
    <div className="app-container">
      <div className="input-section">
        <h1>Visualisation de Contrôle Optimal</h1>
        <DataTable onDataSubmit={handleDataSubmit} />
      </div>
      <div className="chart-container">
        <div className="chart-columns">
          <div className="chart-column">
            {xComponents.map((xComponent, index) => (
              <div key={index} className="chart-wrapper">
                <h3>{xLabels[index]}</h3>
                <DataChart data={xComponent} tValues={tValues} label={xLabels[index]} axisLabel={axisLabel} />
              </div>
            ))}
          </div>
          <div className="chart-column">
            {pComponents.map((pComponent, index) => (
              <div key={index} className="chart-wrapper">
                <h3>{pLabels[index]}</h3>
                <DataChart data={pComponent} tValues={tValues} label={pLabels[index]} axisLabel={axisLabel} />
              </div>
            ))}
          </div>
        </div>
        <div className="chart-row">
          {uComponents.map((uComponent, index) => (
            <div key={index} className="chart-wrapper">
              <h3>{uLabels[index]}</h3>
              <DataChart data={uComponent} tValues={tValues} label={uLabels[index]} axisLabel={axisLabel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
