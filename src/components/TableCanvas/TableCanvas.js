import * as React from 'react';

const TableCanvas = ({
  nameSelected
}) => {
  if (!nameSelected) {
    return null;
  }
  return (
    <div>
      {nameSelected}
    </div>
  );
}

export default TableCanvas;
