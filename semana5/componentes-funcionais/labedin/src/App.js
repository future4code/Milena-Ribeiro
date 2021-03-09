import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Milena from './components/CardGrande/eu.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Milena}
          nome="Milena" 
          descricao="Oi, eu sou Milena. Sou estudante da Labenu e faço o curso de Web Full Stack. Também sou estudante de Administração na Faculdade Ages e estou no 7º semestre."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://lezebre.lu/images/detailed/17/30634-Chevrolet.png" 
          nome="Topvel" 
          descricao="Garantista." 
        />
        
        <CardGrande 
          imagem="https://logospng.org/download/xp-investimentos/logo-xp-investimentos-icon-2048.png" 
          nome="UC Dual" 
          descricao="Conhecendo o mercado financeiro com a equipe XP Inc." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />     
 
       </div>
     </div>
  
   );
 }

export default App;