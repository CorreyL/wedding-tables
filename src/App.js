import {
  useEffect,
  useRef,
  useState,
} from 'react';

import './App.css';
import NameInput from './components/NameInput';
import TableCanvas from './components/TableCanvas';
import TableList from './components/TableList';
import guestList from './guest-list.json';

function App() {
  const [personSelected, setPersonSelected] = useState(null);
  const textInputRef = useRef(null);

  useEffect(() => {
    if (!textInputRef && !textInputRef.current) {
      return;
    }
    // Focus the Text Input when the app is fully instantiated
    textInputRef.current.focus();
  }, [textInputRef]);

  return (
    <div className="App">
      <NameInput
        textInputRef={textInputRef}
        guestList={guestList}
        personSelected={personSelected}
        setPersonSelected={setPersonSelected}
      />
      <TableCanvas
        personSelected={personSelected}
        guestList={guestList}
      />
      <TableList/>
    </div>
  );
}

export default App;
