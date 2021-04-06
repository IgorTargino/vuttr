import './styles/global.scss';

import { useState } from 'react';
import { Header, Tool, Modal } from './components';

function App() {
  const [stateModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <Tool />
      {stateModal && <Modal />}
    </div>
  );
}

export default App;
