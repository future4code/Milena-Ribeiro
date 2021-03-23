// import logo from './logo.svg';
// import './App.css';
import Cadastro from "./Componentes.js/Cadastro";
import React from "react";
import axios from "axios";
import Usuarios from "./Componentes.js/Usuarios";

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Cadastro/>
        <Usuarios/>
      </div>
    )
  }
}
