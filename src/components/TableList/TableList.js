import * as React from 'react';

const TableList = ({
  guestList,
  personSelected,
}) => {
  if (!personSelected && !personSelected.tableNumber) {
    return null;
  }

  return (
    <div>
      Table {personSelected.tableNumber}
      {
        guestList[personSelected.tableNumber].map((guest, idx) => (
          <div key={`tableList-guest-${idx}`}>{guest}</div>
        ))
      }
    </div>
  );
};

export default TableList;
