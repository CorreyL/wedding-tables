import { useState } from 'react';
import {
  Button,
  TextField,
} from '@mui/material';
import './NameInput.css';

const NameInput = ({
  textInputRef,
  guestList,
  personSelected,
  setPersonSelected,
  setTableSelected,
}) => {
  // Flatten the array of arrays into an array of strings
  const searchableGuestList = [].concat.apply(
    [],
    Object.keys(guestList).map(tableNumber => (
      guestList[tableNumber].map(name => ({
        tableNumber,
        name,
      }))
    )),
  );

  const [searchMatches, setSearchMatches] = useState([]);

  const onChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearchMatches([]);
      return;
    }
    setSearchMatches(searchableGuestList.filter(personObj => (
      personObj.name.toLowerCase().includes(value.toLowerCase())
    )));
  };

  if (personSelected) {
    return (
      <div
        className="name-input"
      >
        <div>{`Hello ${personSelected.name}, thanks for attending!`}</div>
        <div>{`Not ${personSelected.name}?`}</div>
        <div>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              setPersonSelected(null);
              setTableSelected(null);
            }}
          >
            {`Click here to reset your name`}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <TextField
        label="Your First Name"
        variant="outlined"
        color="success"
        inputRef={textInputRef}
        onChange={onChange}
        focused
      />
      <div>
        {searchMatches.map((personObj, idx) => (
          <div className='options-parent' key={`searchResult${idx}`}>
            <Button
              variant="outlined"
              onClick={() => {
                setPersonSelected(personObj);
                setSearchMatches([]);
              }}
            >
              {personObj.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NameInput;
