import React, { useState } from 'react';
import "../src/App.css"

function TableGenerator() {
  const [numRows, setNumRows] = useState(2); // Default number of rows
  const [numCols, setNumCols] = useState(2); // Default number of columns

  const handleNumRowsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumRows(value);
    }
  };

  const handleNumColsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumCols(value);
    }
  };

  const generateTable = () => {
    const table = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        const cellStyle = i === j ? { backgroundColor: 'yellow' } : {}; // Change color conditionally
        row.push(
          <td key={j} style={cellStyle}>
            Cell
          </td>
        );
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <div>
      <label>
        Rows:
        <input
          type="number"
          value={numRows}
          onChange={handleNumRowsChange}
          min="1"
        />
      </label>
      <br />
      <label>
        Columns:
        <input
          type="number"
          value={numCols}
          onChange={handleNumColsChange}
          min="1"
        />
      </label>
      <br />
      <table className="custom-table">
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default TableGenerator;
