import * as React from 'react';

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
      {
        guestList[personSelected.tableNumber].map((guest, idx) => (
          <div key={`tableList-guest-${idx}`}>{guest}</div>
        ))
      }
      <hr/>
      <div>Curious about other tables? Tap the other tables to see!</div>
      {
        (tableSelected || tableSelected === 0)
        && tableSelected !== personSelected.tableNumber
        && (
          <div>
            <div>Table {tableSelected}</div>
            {
              guestList[tableSelected].map((guest, idx) => (
                <div key={`tableList-guest-${idx}`}>{guest}</div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default TableList;
