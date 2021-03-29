import React from "react";
import styled from 'styled-components';

export default class Etapa3 extends React.Component {
    render() {
        return (
            <divContainer>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <h3>5. Por que você não terminou um curso de gradação?</h3>
                <input></input>
                <h3>6. Você fez algum curso complementar?</h3>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </divContainer>
        )
    }
}