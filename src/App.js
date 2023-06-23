import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import PasswordChecker from './components/PasswordChecker';




function App() {

  return (
    <div className="App" >
      <Counter/>
      <PasswordChecker/>
    </div>
  );


}


export default App;
