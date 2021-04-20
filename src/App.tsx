import './styles/global.scss';
import Modal from 'react-modal';
import { useState } from 'react';
import { Header, ToolList } from './components';

import { ToolsProvider } from './context/toolsContext';

Modal.setAppElement('#root');

function App() {
  const [inputValue, setInputValue] = useState('');
  const [checkbox, setCheckbox] = useState(true);

  return (
    <ToolsProvider>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      <ToolList inputValue={inputValue} checkbox={checkbox} />
    </ToolsProvider>
  );
}

export default App;
