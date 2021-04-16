import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';
import useProtectedPage from '../hook/useProtectedPage';
import axios from 'axios';
import { useForm } from '../hook/useForm';

const initialForm = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
    // select: ""
  };

const CreateTripPage = () => {
    const [form, onChange, resetForm] = useForm(initialForm);
    useProtectedPage();

    const handleClick = (event) => {
        event.preventDefault();
        createTrip();
        console.log(form);
        resetForm();
    };

    const createTrip = () => {
        const token = window.localStorage.getItem("token")
        console.log(initialForm)
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips", form, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
            alert("Viagem criada!")
        }).catch((err) =>{
            console.log(err.response)
        })
    }

    const history = useHistory()
    return (
        <div>
            <form onSubmit={handleClick}>
            <p>para o administrador criar uma nova viagem</p>
            <input 
            placeholder="Nome"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            />
            <select value={form.planet} onChange={onChange} name="planet" type="text">
                <option value="">Escolha um planeta</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Terra">Terra</option>
                <option value="Netuno">Netuno</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Urano">Urano</option>
                <option value="Saturno">Saturno</option>
                <option value="Vênus">Vênus</option>
                <option value="Marte">Marte</option>
                <option value="Plutão">Plutão</option>
            </select>
            <input 
            type="date" 
            placeholder="Data"
            name="date"
            value={form.date}
            onChange={onChange}
            />
            <input 
            type="text"
            placeholder="Descrição"
            name="description"
            value={form.description}
            onChange={onChange}
            />
            <input 
            type="number" 
            placeholder="Duração em dias"
            name="durationInDays"
            value={form.durationInDays}
            onChange={onChange}
            />
            <button>Criar</button>
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            </form>
        </div>
    )
}
export default CreateTripPage;

// const body = {
//     name: name,
//     planet: planet,
//     date: date,
//     description: description,
//     durationInDays: durationInDays
// }
// onClick={createTrip}

// const [name, setName] = useState("")
    // const [planet, setPlanet] = useState("")
    // const [date, setDate] = useState("")
    // const [description, setDescription] = useState("")
    // const [durationInDays, setDurationInDays] = useState("")

    // handleName = (event) => {
    //     setName({ Name: event.target.value })
    // }
    // handlePlanet = (event) => {
    //     setPlanet({ planet: event.target.value })
    // }
    // handleDate = (event) => {
    //     setDate({ date: event.target.value })
    // }
    // handleDescription = (event) => {
    //     setDescription({ description: event.target.value })
    // }
    // handleDurationInDays = (event) => {
    //     setDurationInDays({ durationInDays: event.target.value })
    // }