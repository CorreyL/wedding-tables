import { useState } from 'react';
import {
  Button,
  TextField,
} from '@mui/material';

const NameInput = ({
  textInputRef,
  guestList,
  nameSelected,
  setNameSelected,
}) => {
  // Flatten the array of arrays into an array of strings
  const searchableGuestList = [].concat.apply([], Object.values(guestList));

  const [searchMatches, setSearchMatches] = useState([]);

  const onChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearchMatches([]);
      return;
    }
    setSearchMatches(searchableGuestList.filter(name => (
      name.toLowerCase().includes(value.toLowerCase())
    )));
  };

  if (nameSelected) {
    return (
      <div>
        {`Hello ${nameSelected}, thanks for attending!`}
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
        {searchMatches.map((name, idx) => (
          <div key={`searchResult${idx}`}>
            <Button
              variant="outlined"
              onClick={() => {setNameSelected(name)}}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NameInput;
