import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    atividade: {},
    pokemons: [],
    especiePokemon: "",
  }

  getAtividade = async () => {
    try {
      const res = await axios.get('https://www.boredapi.com/api/activity/')
      this.setState({ atividade: res.data })
    } catch (erro) {
      alert('Tente novamente.')
    }
  }



componentDidMount() {
  this.getPokemon();
}

getPokemon = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10/')
    this.setState({pokemons: response.data.results})
  } catch (err) {
    console.log(err.data.results)
    alert('Tente novamente.')
  }
}

especiePokemon = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?${name}`)
    this.setState({ especiePokemon: response.data.species.name })
  } catch (err) {
    alert('Tente novamente.')
  }
}

mudaSelect = (event) => {
  const nomePokemon = event.target.value;
  this.especiePokemon(nomePokemon)
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
        
        <h2>Pokemon</h2>
        <select onChange={this.mudaSelect}>
          <option value={""}></option>
          {this.state.pokemons.map((poke) => {
            return <option key={poke.name} value ={poke.name}>
            {poke.name}
            </option>
          })}
        </select>
        {this.state.especiePokemon}
      </div>


    );
  }
}