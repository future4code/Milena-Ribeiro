import React from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage } from '../routes/coordinator';

const ApplicationFomPage = () => {
    const history = useHistory()
    return (
        <div>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <button>Enviar</button>
            <button onClick={() => goToListTripsPage(history)}>Lista de viagens</button>
        </div>
    )
}

export default ApplicationFomPage;