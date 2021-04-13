import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator';

const ListTripsPage = () => {
    const history = useHistory()
    const [listTrips, setListTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips")
        .then(res => {
            setListTrips(res.data.trips)
            console.log(res.data.trips)
        }).catch(err => {
            console.log(err)
        })
    }


    return(
        <div>
            <h1>Lista de viagens</h1>
            {listTrips.map((trip) => {
                return (
                    <div>
                        <h3>Nome: {trip.name}</h3>
                        <h3>Descrição: {trip.description}</h3>
                        <h3>Planeta: {trip.planet}</h3>
                        <h3>Duração: {trip.durationInDays}</h3>
                        <h3>Data: {trip.date}</h3>
                        <hr></hr>
                    </div>
                )
            })}
            <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>

    )
}
export default ListTripsPage;