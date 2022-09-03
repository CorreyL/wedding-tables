import { useState } from 'react';
import {
  Button,
  TextField,
} from '@mui/material';

const NameInput = ({
  textInputRef,
  guestList,
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

  return (
    <div>
      <TextField
        label="Your Name"
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
