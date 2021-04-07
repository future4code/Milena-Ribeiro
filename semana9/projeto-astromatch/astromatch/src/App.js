// import logo from './logo.svg';
import './App.css';
import TelaInicial from './Components/TelaInicial';
import React from 'react';
import Matches from './Components/Matches'

const App = () => {

  return (
    <div className="App">
      <TelaInicial />
      <Matches />
    </div>
  );
}

export default App;