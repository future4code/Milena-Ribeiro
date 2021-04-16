import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToLoginPage } from '../routes/coordinator';
import axios from 'axios';

const AdminHomePage = () => {
    const history = useHistory()
    const [listTrips, setListTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const deleteTrip = (id) => {
        const token = window.localStorage.getItem("token")
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert("Viagem excluída")
            getTrips()
            console.log(res)
        }).catch((err) => {
            alert("Erro")
           console.log(err)  
        })
    }

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips")
        .then(res => {
            setListTrips(res.data.trips)
        }).catch(err => {
            console.log(err)
        })
    }

    const goToDetailPage = (id) => {
        history.push(`/admin/trips/${id}`);
    };
    // const logout = () => {
    //     window.localStorage.removeItem("token");
    //     history.push("/login");
    //   }

    return (
        <div>
            <h1>Painel Administrativo</h1>
            <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
            <button onClick={() => goToHomePage(history)}>Página inicial</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar viagem</button>
            <button onClick={() => goToLoginPage(history)}>Sair</button>
            {listTrips.map((trip) => {
                return (
                    <div key={trip.name}>
                        <button onClick={() => goToDetailPage(trip.name)}>{trip.name}</button>
                        <button onClick={() => deleteTrip(trip.id)}>Excluir</button>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminHomePage;