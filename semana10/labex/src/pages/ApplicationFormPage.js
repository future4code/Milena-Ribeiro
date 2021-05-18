import React, { useState, useEffect, useMemo } from 'react';
import {useHistory} from "react-router-dom";
import { goToListTripsPage } from '../routes/coordinator';
import axios from 'axios';
import {useForm} from '../hook/useForm';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);  
    const onChangeValue = (event) => {
      setValue(event.target.value);
    }; 
    return [value, onChangeValue];
};
  
const makePostRequest = (body) => {
    console.log("BODY: ", body);
};
const ApplicationFomPage = () => {
    const history = useHistory()
    // const [trip, onChangeTrip] = useInput("");
    const [name, onChangeName] = useInput("");
    const [age, onChangeAge] = useInput("");
    const [applicationText, onChangeApplicationText] = useInput("");
    const [profession, onChangeProfession] = useInput("");
    const [country, onChangeCountry] = useInput("");
    const [tripList, setTripList] = useState([]);
    const [form, onChange, resetForm] = useForm({trip: ""})

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips")
        .then(res => {
            setTripList(res.data.trips)
        }).catch(err => {
        })
    } 
    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
          trip: form.trip,
          name: name,
          age: age,
          applicationText: applicationText,
          profession: profession,
          country: country
        };
        makePostRequest(body);
        resetForm()
      };
    return (
        <div>
            <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
            <form onSubmit={onSubmitForm}>
            <select name="trip" value={form.trip} onChange={onChange}>
                <option>Escolha uma viagem</option>
                {tripList.map((viagens) => {
                    return (
                        <option value={viagens.id}>{viagens.name}</option>
                    )
                })}
            </select>
            <input placeholder="Nome" value={name} onChange={onChangeName} type={"text"}></input>
            <input placeholder="Idade" value={age} onChange={onChangeAge} type={"number"}></input>
            <input placeholder="Texto de candidatura" value={applicationText} onChange={onChangeApplicationText} type={"text"}></input>
            <input placeholder="Profissão" value={profession} onChange={onChangeProfession} type={"text"}></input>
            <select value={country} onChange={onChangeCountry} type={"text"}>
                <option>Escolha um país</option>
                <option>Brasil</option>
                <option>EUA</option>
            </select>
            <button>Enviar</button>
            <button onClick={() => goToListTripsPage(history)}>Lista de viagens</button>
            </form>
        </div>
    )
}
export default ApplicationFomPage;