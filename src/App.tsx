import './styles/global.scss';

import { Header, Tool, Modal } from './components';
import { useState } from 'react';

function App() {
  const [stateModal, setStateModal] = useState(true);
  return (
    <div className="App">
      <Header/>
      <Tool/>
      {stateModal && <Modal/>}
    </div>
  );
}

export default App;
