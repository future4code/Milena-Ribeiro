import React from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';
import useProtectedPage from '../hook/useProtectedPage';

const TripDetailsPage = () => {
    useProtectedPage();
    const history = useHistory()
    return (
        <div>
            <p>TripDetailsPage</p>
            <button>Aprovar</button>
            <button>Reprovar</button>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;