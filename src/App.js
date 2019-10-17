import React from 'react';
import './App.css';

import Countdown from './countdown/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown ini={ 3 } />
    </div>
  );
}

export default App;
