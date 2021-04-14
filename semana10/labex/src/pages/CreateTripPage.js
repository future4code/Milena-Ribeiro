import React from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';
import useProtectedPage from '../hook/useProtectedPage';

const CreateTripPage = () => {
    useProtectedPage();
    const history = useHistory()
    return (
        <div>
            <p>para o administrador criar uma nova viagem</p>
            <input placeholder="Nome"></input>
            <select>
                <option>Escolha um planeta</option>
            </select>
            <input type="date" placeholder="Data"></input>
            <input placeholder="Descrição"></input>
            <input type="number" placeholder="Duração em dias"></input>
            <button>Criar</button>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;