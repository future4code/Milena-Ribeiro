import React from "react";

export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <h3>1. Qual o seu nome?</h3>
                <input></input>
                <h3>2. Qual sua idade?</h3>
                <input></input>
                <h3>3. Qual o seu email?</h3>
                <input></input>
                <h3>4. Qual a sua escolaridade?</h3>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        )
    }
}
