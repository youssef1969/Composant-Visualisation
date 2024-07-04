import React, { useState } from 'react';

const DataTable = ({ setX1Values, setX2Values, setYValues, setTValues }) => {
  const [xInput, setXInput] = useState('');
  const [yInput, setYInput] = useState('');
  const [tInput, setTInput] = useState('');

  const handleSubmit = () => {
   
    const cleanXInput = xInput.replace(/\s/g, '');
    const cleanYInput = yInput.replace(/\s/g, '');
    const cleanTInput = tInput.replace(/\s/g, '');

    const xList = cleanXInput.split('),(').map(pair => {
      const cleanedPair = pair.replace(/[()]/g, '').split(',');
      return [Number(cleanedPair[0]), Number(cleanedPair[1])];
    });
    const yList = cleanYInput.split(',').map(Number);
    const tList = cleanTInput.split(',').map(Number);

    
    if (xList.length === yList.length && yList.length === tList.length) {
      const x1List = xList.map(pair => pair[0]);
      const x2List = xList.map(pair => pair[1]);

      setX1Values(x1List);
      setX2Values(x2List);
      setYValues(yList);
      setTValues(tList);
    } else {
      alert('Les listes x, y et t doivent avoir la même longueur.');
    }
  };

  return (
    <div>
      <div>
        <label>
          {'>'} X values  e.g. (1,2),(3,4):
          <input
            type="text"
            value={xInput}
            onChange={e => setXInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {'>'} Y values :
          <input
            type="text"
            value={yInput}
            onChange={e => setYInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          {'>'} T values :
          <input
            type="text"
            value={tInput}
            onChange={e => setTInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Mettre à jour les données</button>
    </div>
  );
};

export default DataTable;
