import React from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage, goToHomePage } from '../routes/coordinator';

const LoginPage = () => {
    const history = useHistory()
    return (
        <div>
            <p>LoginPage</p>
            <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    )
}

export default LoginPage;