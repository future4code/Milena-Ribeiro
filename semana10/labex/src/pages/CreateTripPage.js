import React from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';

const CreateTripPage = () => {
    const history = useHistory()
    return (
        <div>
            <p>para o administrador criar uma nova viagem</p>
            <button>Criar</button>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;