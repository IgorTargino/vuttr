import './styles/global.scss';

import { useState } from 'react';
import Modal from 'react-modal';
import { Header, ToolList } from './components';

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
    <>
      <Header openModal={openModal} />
      <AddToolForm isOpen={stateModal} onRequestClose={closeModal} />
      <ToolList />
    </>
  );
}

export default App;
