import React, { useState } from 'react';
import DataTable from './DataTable';
import DataChart from './DataChart';
import './App.css';

const App = () => {
  const [xComponents, setXComponents] = useState([]);
  const [pComponents, setPComponents] = useState([]);
  const [yComponents, setYComponents] = useState([]);
  const [tValues, setTValues] = useState([]);
  const [xLabels, setXLabels] = useState([]);
  const [pLabels, setPLabels] = useState([]);
  const [uLabels, setULabels] = useState([]);


  const handleDataSubmit = (xList,pList, yList, tList,xLabels,pLabels,uLabels) => {
    setXComponents(xList);
    setPComponents(xList);
    setYComponents(yList);
    setTValues(tList);
    setXLabels(xLabels);
    setULabels(uLabels);
    setPLabels(pLabels);
  };

  return (
    <div>
      <h1>Visualisation de Contrôle Optimal</h1>
      <DataTable onDataSubmit={handleDataSubmit} />
      <div className="chart-container">
        {xComponents.map((xComponent, index) => (
          <div key={index} className="chart-wrapper">
            <h2>{xLabels[index]} </h2>
            <DataChart data={xComponent} tValues={tValues} label={xLabels[index]} />
          </div>
        ))}
        {pComponents.map((pComponent, index) => (
          <div key={index} className="chart-wrapper">
            <h2>{pLabels[index]}</h2>
            <DataChart data={pComponent} tValues={tValues} label={pLabels[index]} />
          </div>
        ))}       
        {yComponents.map((yComponent, index) => (
          <div key={index} className="chart-wrapper">
            <h2>{uLabels[index]} </h2>
            <DataChart data={yComponent} tValues={tValues} label={uLabels[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
