import React, { useEffect } from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';
import useProtectedPage from '../hook/useProtectedPage';
import axios from 'axios';

const TripDetailsPage = () => {
    useProtectedPage();
    const history = useHistory();

    useEffect(() => {
        ApplyToTrip(params.id)
    }, [params.id])

    const ApplyToTrip = (id) => {
        const token = window.localStorage.getItem("token")
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country 
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips/${id}/apply`, body, {
            headers: {
                auth: token
            }
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


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