import * as React from 'react';
import TextField from '@mui/material/TextField';

const NameInput = ({ textInputRef }) => {
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
