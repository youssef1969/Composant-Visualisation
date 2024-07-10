import React, { useState } from 'react';

const DataTable = ({ onDataSubmit }) => {
  const [xInput, setXInput] = useState('');
  const [yInput, setYInput] = useState('');
  const [tInput, setTInput] = useState('');

  const handleSubmit = () => {
    const xList = parseInput(xInput);
    const yList = parseInput(yInput);
    const tList = parseSimpleInput(tInput);

    // Vérifiez que toutes les listes ont la même longueur
    if (xList[0].length === yList[0].length && yList[0].length === tList.length) {
      onDataSubmit(xList, yList, tList);
    } else {
      alert('Les listes x, y et t doivent avoir la même longueur.');
    }
  };

  // Fonction utilitaire pour parser les entrées X et Y
  const parseInput = (input) => {
    const pairs = input.split('],');
    const parsed = pairs.map(pair => {
      const trimmedPair = pair.trim().replace('[', '').replace(']', '');
      return trimmedPair.split(',').map(Number);
    });

    // Transpose the matrix
    return parsed[0].map((_, colIndex) => parsed.map(row => row[colIndex]));
  };

  // Fonction utilitaire pour parser les entrées simples (T)
  const parseSimpleInput = (input) => {
    return input.split(',').map(Number);
  };

  return (
    <div>
      <div>
        <label>
          X values :
          <input
            type="text"
            value={xInput}
            onChange={e => setXInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Y values :
          <input
            type="text"
            value={yInput}
            onChange={e => setYInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          T values :
          <input
            type="text"
            value={tInput}
            onChange={e => setTInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>show</button>
    </div>
  );
};

export default DataTable;
