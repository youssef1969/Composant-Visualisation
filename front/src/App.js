import React, { useState } from 'react';
import DataTable from './DataTable';
import DataChart from './DataChart';
import './App.css';


const App = () => {
  const [x1Values, setX1Values] = useState([]);
  const [x2Values, setX2Values] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [tValues, setTValues] = useState([]);

  return (
    <div>
      <h1>Visualisation de Contrôle Optimal</h1>
      <DataTable setX1Values={setX1Values} setX2Values={setX2Values} setYValues={setYValues} setTValues={setTValues} />
      <div className="chart-container">
        <div className="chart-wrapper">
          <h2>X1 </h2>
          <DataChart data={x1Values} tValues={tValues} label="X1" />
        </div>
        <div className="chart-wrapper">
          <h2>X2 </h2>
          <DataChart data={x2Values} tValues={tValues} label="X2" />
        </div>
        <div className="chart-wrapper">
          <h2>Y </h2>
          <DataChart data={yValues} tValues={tValues} label="Y" />
        </div>
      </div>
    </div>
  );
  
};

export default App;
