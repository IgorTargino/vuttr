import './styles/global.scss';

import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components';
import ToolProvider from './context/ToolContext';

import AddToolForm from './components/AddToolForm';

Modal.setAppElement('#root');

function App() {
  const [stateModal, setStateModal] = useState(false);

  function openModal() {
    setStateModal(true);
  }

  function closeModal() {
    setStateModal(false);
  }

  return (
    <ToolProvider>
      <Header openModal={openModal} />
      <AddToolForm isOpen={stateModal} onRequestClose={closeModal} />
    </ToolProvider>
  );
}

export default App;
