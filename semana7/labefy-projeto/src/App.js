import logo from './logo.svg';
import './App.css';
import CriandoPlaylist from './Telas/CriandoPlaylist';
import PlaylistCriada from './Telas/PlaylistCriada';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 25px;
  margin-left: 25px;
`

class App extends React.Component {
  state = {
    tela: "criandoPlaylist",
    nomeBotao: ""
  }

  mudaTela = () => {
    if (this.state.tela === "criandoPlaylist") {
      this.setState({ tela: "playlistCriada", nomeBotao: "VOLTAR PARA HOME" })
    } else if (this.state.tela === "playlistCriada"){
      this.setState({ tela: "criandoPlaylist", nomeBotao: "VER PLAYLISTS" })
    }
  }

  renderizaTela = () => {
    switch (this.state.tela) {
      case "criandoPlaylist":
        return < CriandoPlaylist />;
      case "playlistCriada":
        return < PlaylistCriada />;
      default:
        return <div></div>
    }
  }

  render () {
    return (
      <div>
        <Button onClick={this.mudaTela}>{this.state.nomeBotao}</Button>
        {this.renderizaTela()}
      </div>
    )
  }
}

export default App