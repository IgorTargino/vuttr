import './styles/global.scss';

import { useState } from 'react';
import { Header, Tool, DeleteModal } from './components';

function App() {
  const [stateModal] = useState(false);
  return (
    <>
      <Header />
      <Tool />
      <Tool />
      {stateModal && <DeleteModal />}
    </>
  );
}

export default App;
