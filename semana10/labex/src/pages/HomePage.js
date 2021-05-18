import React from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';
import Button from '@material-ui/core/Button';    

const HomePage = () => {
    const history = useHistory()
    return (
        <div>
            <h1>LabeX</h1>
            <Button variant="outlined" onClick={() => goToListTripsPage(history)}>Ver viagens</Button>
            <Button variant="outlined" onClick={() => goToLoginPage(history)}>Área de admin</Button>
        </div>
    )
}

export default HomePage