import * as React from 'react';
import TextField from '@mui/material/TextField';

const NameInput = ({
  textInputRef,
  guestList,
}) => {
  // Flatten the array of arrays into an array of strings
  const searchableGuestList = [].concat.apply([], Object.values(guestList));

  return (
    <TextField
      label="Your Name"
      variant="outlined"
      color="success"
      inputRef={textInputRef}
      focused
    />
  );
}

export default NameInput;
