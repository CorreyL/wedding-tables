import * as React from 'react';
import './TableCanvas.css';

const TableCanvas = ({
  guestList,
  personSelected,
}) => {
  if (!personSelected) {
    return null;
  }

  const guestRowsRendering = () => {
    const tableNumbers = Object.keys(guestList);
    const elementsToRender = [];
    // Pop the head table from the array
    tableNumbers.shift();
    while(tableNumbers.length) {
      const leftTableNumber = tableNumbers[0];
      const rightTableNumber = tableNumbers[1];
      elementsToRender.push(
        <div className="guest-row" key={`guest-row-${rightTableNumber-1}`}>
          <div
            className={`vertical-rectangle ${personSelected.tableNumber === leftTableNumber ? 'person-table': ''}`}
          >
            {leftTableNumber}
          </div>
          <div
            className={`vertical-rectangle ${personSelected.tableNumber === rightTableNumber ? 'person-table' : ''}`}
          >
            {rightTableNumber}
          </div>
        </div>
      )
      tableNumbers.shift();
      tableNumbers.shift();
    }
    return elementsToRender;
  };

  return (
    <div className="parent">
      <div className="head-row">
        <div className="horizontal-rectangle">0</div>
      </div>
      {guestRowsRendering()}
    </div>
  );
}

export default TableCanvas;
