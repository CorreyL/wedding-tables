import { useState } from 'react';
import TextField from '@mui/material/TextField';

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
    <TextField
      label="Your Name"
      variant="outlined"
      color="success"
      inputRef={textInputRef}
      onChange={onChange}
      focused
    />
  );
}

export default NameInput;
