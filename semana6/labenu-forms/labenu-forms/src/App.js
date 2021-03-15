import React from "react";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import EtapaFinal from "./Components/EtapaFinal";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };
  render () {
    const renderizaEtapa = () => {
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
          return <div>Página não encontrada</div>;
    }
  };
  return (
    <div>
        {this.renderizaEtapa()}
        <button>Próxima etapa</button>
      </div>
  )
  }
}
  
  
  

// export default App;