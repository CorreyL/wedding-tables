import * as React from 'react';
import './TableList.css'

const TableList = ({
  guestList,
  personSelected,
  tableSelected,
}) => {
  if (!personSelected || !personSelected.tableNumber) {
    return null;
  }

  return (
    <div>
      <div>Table {personSelected.tableNumber}</div>
      <div
        className="grid-container"
      >
        {
          guestList[personSelected.tableNumber].map((guest, idx) => (
            <div className="grid-child" key={`tableList-guest-${idx}`}>{guest}</div>
          ))
        }
      </div>
      <hr/>
      <div>Curious about other tables?</div>
      <div>Tap the other tables to see!</div>
      {
        (tableSelected || tableSelected === 0)
        && tableSelected !== personSelected.tableNumber
        && (
          <div>
            <div>Table {tableSelected}</div>
            <div className="grid-container">
              {
                guestList[tableSelected].map((guest, idx) => (
                  <div
                    className="grid-child"
                    key={`tableList-guest-${idx}`}
                  >
                    {guest}
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default TableList;
