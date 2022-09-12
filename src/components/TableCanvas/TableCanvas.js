import * as React from 'react';
import './TableCanvas.css';

const TableCanvas = ({
  personSelected
}) => {
  if (!personSelected) {
    return null;
  }

  return (
    <div className="parent">
      <div className="head-row">
        <div className="horizontal-rectangle">1</div>
      </div>
      <div className="guest-row">
        <div className="vertical-rectangle">2</div>
        <div className="vertical-rectangle">3</div>
      </div>
      <div className="guest-row">
        <div className="vertical-rectangle">4</div>
        <div className="vertical-rectangle">5</div>
      </div>
      <div className="guest-row">
        <div className="vertical-rectangle">6</div>
        <div className="vertical-rectangle">7</div>
      </div>
      <div className="guest-row">
        <div className="vertical-rectangle">8</div>
        <div className="vertical-rectangle">9</div>
      </div>
    </div>
  );
}

export default TableCanvas;
