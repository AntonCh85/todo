import React from 'react';
import './App.css';
import './Ccomponent';
import Ccomponent from './Ccomponent';
import Fcomponent from './Fcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent/>
        <Ccomponent/>
      </header>
    </div>
  );
}

export default App;
