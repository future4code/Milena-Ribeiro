import React from "react";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import EtapaFinal from "./Components/EtapaFinal";
import styled from 'styled-components';

class App extends React.Component {
  state = {
    etapa: 1,
  };

  irParaProximaEtapa = () => {
    const paginaEtapa1 = this.state.etapa + 1
    this.setState({ etapa: paginaEtapa1 })
  }

  // render () {
    renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <EtapaFinal />;
        default:
          return <Etapa1 />;
    }
  };
  render () {
    return (
      <div>
          {this.renderizaEtapa()}
          {this.state.etapa !== 4 && (
            <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
          )}
      </div>
    )
  }
}
   
  

export default App;