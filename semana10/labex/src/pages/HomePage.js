import React from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';

const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            <p>HomePage</p>
            <button onClick={() => goToListTripsPage(history)}>Ver viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área de admin</button>
        </div>
    )
}

export default HomePage