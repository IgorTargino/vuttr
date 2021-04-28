import { useState } from 'react';
import Modal from 'react-modal';
import { AddToolModal, Header, ToolList } from './components';

import { ToolsProvider } from './context/ToolsContext';

import styles from './styles/app.module.scss';
import './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  const [stateForm, setStateForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkbox, setCheckbox] = useState(true);

  function openForm() {
    setStateForm(true);
  }

  function closeForm() {
    setStateForm(false);
  }

  return (
    <ToolsProvider>
      <div className={styles.app}>
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          checkbox={checkbox}
          setCheckbox={setCheckbox}
          openForm={openForm}
        />
        <AddToolModal isOpen={stateForm} onRequestClose={closeForm} />
        <ToolList inputValue={inputValue} checkbox={checkbox} />
      </div>
    </ToolsProvider>
  );
}

export default App;
