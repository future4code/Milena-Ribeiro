import logo from './logo.svg';
import './App.css';
import CriandoPlaylist from './Telas/CriandoPlaylist'
import PlaylistCriada from './Telas/PlaylistCriada'
import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        <CriandoPlaylist />
        <PlaylistCriada />
      </div>
    )
  }
}

export default App