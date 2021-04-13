import React from 'react';
import {useHistory} from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToLoginPage } from '../routes/coordinator';

const AdminHomePage = () => {
    const history = useHistory()
    return (
        <div>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <button onClick={() => goToHomePage(history)}>Página inicial</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar viagem</button>
            <button onClick={() => goToLoginPage(history)}>Sair</button>
        </div>
    )
}

export default AdminHomePage;