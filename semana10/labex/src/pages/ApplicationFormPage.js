import React from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage } from '../routes/coordinator';

const ApplicationFomPage = () => {
    const history = useHistory()
    return (
        <div>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <select>
                <option>Escolha uma viagem</option>
            </select>
            <input placeholder="Nome"></input>
            <input placeholder="Idade"></input>
            <input placeholder="Texto de candidatura"></input>
            <input placeholder="Profissão"></input>
            <select>
                <option>Escolha um país</option>
            </select>
            <button>Enviar</button>
            <button onClick={() => goToListTripsPage(history)}>Lista de viagens</button>
        </div>
    )
}

export default ApplicationFomPage;