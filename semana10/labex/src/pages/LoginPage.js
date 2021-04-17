import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from '../routes/coordinator';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 550,
        marginTop: 10,
      },
    botao: {
        marginLeft: 550,
        marginTop: 10,
    }
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value);
      }   
      const handlePassword = (event) => {
        setPassword(event.target.value);
      }  
    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/login", body )
            .then((res) => {
                window.localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list")
        }).catch((err) => {
            alert("Insira um login válido.")
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form className={classes.root} noValidate autoComplete="off">           
            <TextField id="outlined-basic" label="E-mail" variant="outlined" value={email} onChange={handleEmail}/>
            <TextField id="outlined-basic" label="Senha" variant="outlined" value={password} onChange={handlePassword} type="password"/>
            </form>
            <div className={classes.botao}>
            <Button onClick={login}>Entrar</Button>
            <Button onClick={() => goToHomePage(history)} color="primary">Voltar</Button>    
            </div>
        </div>
    )
}