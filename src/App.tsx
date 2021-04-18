import './styles/global.scss';

import { useState } from 'react';
import Modal from 'react-modal';
import { Header, ToolList } from './components';

import AddToolForm from './components/AddToolForm';

Modal.setAppElement('#root');

function App() {
  const [stateForm, setStateForm] = useState(false);

  function openForm() {
    setStateForm(true);
  }

  function closeForm() {
    setStateForm(false);
  }

  return (
    <>
      <Header openModal={openForm} />
      <AddToolForm isOpen={stateForm} onRequestClose={closeForm} />
      <ToolList />
    </>
  );
}

export default App;
