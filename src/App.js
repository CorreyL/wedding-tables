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
  const [tableSelected, setTableSelected] = useState(null);
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
        setTableSelected={setTableSelected}
      />
      <TableCanvas
        personSelected={personSelected}
        guestList={guestList}
        tableSelected={tableSelected}
        setTableSelected={setTableSelected}
      />
      <TableList
        personSelected={personSelected}
        guestList={guestList}
        tableSelected={tableSelected}
      />
    </div>
  );
}

export default App;
