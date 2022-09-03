import {
  useEffect,
  useRef,
} from 'react';

import './App.css';
import NameInput from './components/NameInput';
import guestList from './guest-list.json';

function App() {
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
      />
    </div>
  );
}

export default App;
