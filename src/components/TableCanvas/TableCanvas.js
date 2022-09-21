import * as React from 'react';
import './TableCanvas.css';

const TableCanvas = ({
  guestList,
  personSelected,
  tableSelected,
  setTableSelected,
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
            className={`vertical-rectangle ${personSelected.tableNumber === leftTableNumber ? 'person-table': ''} ${tableSelected === leftTableNumber && personSelected.tableNumber !== tableSelected ? 'table-selected' : ''}`}
            onClick={() => {setTableSelected(leftTableNumber)}}
          >
            {leftTableNumber}
          </div>
          <div
            className={`vertical-rectangle ${personSelected.tableNumber === rightTableNumber ? 'person-table' : ''} ${tableSelected === rightTableNumber && personSelected.tableNumber !== tableSelected ? 'table-selected' : ''}`}
            onClick={() => {setTableSelected(rightTableNumber)}}
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
        <div
          className={`horizontal-rectangle ${personSelected.tableNumber === '0' ? 'person-table' : ''} ${tableSelected === 0 ? 'table-selected' : ''}`}
          onClick={() => {setTableSelected(0)}}
        >
          0
        </div>
      </div>
      {guestRowsRendering()}
    </div>
  );
}

export default TableCanvas;
