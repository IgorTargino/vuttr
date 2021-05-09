import { useState } from 'react';
import Modal from 'react-modal';
import { AddToolModal, Header, RemoveToolModal, ToolList } from './components';

import styles from './styles/app.module.scss';
import './styles/global.scss';

Modal.setAppElement('#root');

function App() {
  const [inputValue, setInputValue] = useState('');
  const [checkbox, setCheckbox] = useState(true);

  return (
    <div className={styles.app}>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      <AddToolModal />
      <ToolList inputValue={inputValue} checkbox={checkbox} />
      <RemoveToolModal />
    </div>
  );
}

export default App;
