import React from "react";
import './App.css';
import Router from './routes/Router'
import styled from 'styled-components'

// const DivTitulo = styled.h1`
// font-family: helvetica;
// `

const App = () => {
  return (
    <div className="App">
        {/* <h1>LabeX</h1> */}
          <Router />
    </div>
  );
}

export default App;