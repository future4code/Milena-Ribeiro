import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import { goToAdminHomePage } from '../routes/coordinator';
import useProtectedPage from '../hook/useProtectedPage';
import axios from 'axios';
import { useForm } from '../hook/useForm';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
        maxWidth: 320,
     },
    select: {
        marginTop: 50,
    }
    },
}));

const initialForm = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  };

export default function BasicTextFields() {
    const [form, onChange, resetForm] = useForm(initialForm);
    useProtectedPage();
    const classes = useStyles();
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
                <h1>Criar Viagem</h1>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Planeta</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Planeta"
                        value={form.planet} onChange={onChange} name="planet" type="text"
                        >
                        <MenuItem value="Planeta">
                            <em>Escolha um planeta</em>
                        </MenuItem>
                        <MenuItem value="Mercúrio">Mercúrio</MenuItem>
                        <MenuItem value="Terra">Terra</MenuItem>
                        <MenuItem value="Netuno">Netuno</MenuItem>
                        <MenuItem value="Júpiter">Júpiter</MenuItem>
                        <MenuItem value="Urano">Urano</MenuItem>
                        <MenuItem value="Saturno">Saturno</MenuItem>
                        <MenuItem value="Vênus">Vênus</MenuItem>
                        <MenuItem value="Marte">Marte</MenuItem>
                        <MenuItem value="Plutão">Plutão</MenuItem>
                    </Select>  

                    <TextField
                    id="outlined-basic" 
                    label="Nome" 
                    variant="outlined" 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    /> 
                    <TextField 
                    id="outlined-basic" 
                    variant="outlined" 
                    type="date" 
                    name="date"
                    value={form.date}
                    onChange={onChange}/>               
                    <TextField 
                    id="outlined-basic" 
                    label="Descrição"
                    variant="outlined" 
                    type="text" 
                    name="description"
                    value={form.description}
                    onChange={onChange}/>
                    <TextField 
                    id="outlined-basic" 
                    label="Duração em dias"
                    variant="outlined" 
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}/>

                    <Button>Criar</Button>
                    <Button onClick={() => goToAdminHomePage(history)} color="primary">Voltar</Button>
                </FormControl> 
                </form>
            </div>
        )
}