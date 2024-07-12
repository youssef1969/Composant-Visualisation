import React, { useState } from 'react';

const DataTable = ({ onDataSubmit }) => {
  const [xInput, setXInput] = useState('');
  const [pInput, setPInput] = useState('');
  const [uInput, setUInput] = useState('');
  const [tInput, setTInput] = useState('');
  const [xLabelsInput, setXLabelsInput] = useState('');
  const [pLabelsInput, setPLabelsInput] = useState('');
  const [uLabelsInput, setULabelsInput] = useState('');
  const [axisLabelInput, setAxisLabelInput] = useState('');
  const [xDim, setXDim] = useState(0);
  const [uDim, setUDim] = useState(0);

  const handleSubmit = () => {
    const xList = parseInput(xInput);
    const pList = parseInput(pInput);
    const uList = parseInput(uInput);
    const tList = parseSimpleInput(tInput);
    const xLabels = xLabelsInput.split(',').map(label => label.trim());
    const pLabels = pLabelsInput.split(',').map(label => label.trim());
    const uLabels = uLabelsInput.split(',').map(label => label.trim());
    const axisLabel = axisLabelInput.trim();

    // Vérifiez que toutes les listes ont la même longueur
    if (xList[0].length === uList[0].length && uList[0].length === tList.length && pList[0].length === uList[0].length) {
      onDataSubmit(xList,pList,uList, tList, xLabels,pLabels, uLabels,axisLabel);
    } else {
      alert('Les listes x,p,u et t doivent avoir la même longueur.');
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
          n:
          <input
            type="number"
            value={xDim}
            onChange={e => setXDim(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          m:
          <input
            type="number"
            value={uDim}
            onChange={e => setUDim(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          T  :
          <input
            type="text"
            value={tInput}
            onChange={e => setTInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          X  :
          <input
            type="text"
            value={xInput}
            onChange={e => setXInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          P  :
          <input
            type="text"
            value={pInput}
            onChange={e => setPInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          U  :
          <input
            type="text"
            value={uInput}
            onChange={e => setUInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          T_names:
          <input
            type="text"
            value={axisLabelInput}
            onChange={e => setAxisLabelInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          X_names :
          <input
            type="text"
            value={xLabelsInput}
            onChange={e => setXLabelsInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          P_names :
          <input
            type="text"
            value={pLabelsInput}
            onChange={e => setPLabelsInput(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          U_names :
          <input
            type="text"
            value={uLabelsInput}
            onChange={e => setULabelsInput(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>show</button>
    </div>
  );
};

export default DataTable;
