import React, { useState } from 'react';
import DataTable from './DataTable';
import DataChart from './DataChart';

const App = () => {
  const [data, setData] = useState([{ x: 0, y: 0 }, { x: 1, y: 1 }]);

  return (
    <div>
      <h1>Visualisation de Contrôle Optimal</h1>
      <DataTable data={data} setData={setData} />
      <DataChart data={data} />
    </div>
  );
};

export default App;
