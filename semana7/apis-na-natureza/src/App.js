import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    atividade: {},
  }

  getAtividade = async () => {
    try {
      const res = await axios.get('https://www.boredapi.com/api/activity/')
      this.setState({ atividade: res.data })
    } catch (erro) {
      alert('Tente novamente.')
    }
  }

render() {
    const { activity, type, participants } = this.state.atividade;
    return (
      <div className="App">
        <h2>Atividades</h2>
          <p>Nome: {activity}</p>
          <p>Número de participantes: {participants}</p>
          <p>Tipo: {type}</p>
        <button onClick={this.getAtividade}>Sortear atividade</button>
      </div>
    );
  }
}