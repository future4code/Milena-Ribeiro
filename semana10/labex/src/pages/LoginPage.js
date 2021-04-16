import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from '../routes/coordinator';
import axios from 'axios';

const LoginPage = () => {
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
                // console.log(res.data)
                history.push("/admin/trips/list")
        }).catch((err) => {
            alert("Insira um login válido.")
        })
    }

    return (
        <div>
            <h2>LoginPage</h2>
            <input value={email} onChange={handleEmail} placeholder="E-mail"></input>
            <input value={password} onChange={handlePassword} type="password" placeholder="Senha"></input>
            <button onClick={login}>Entrar</button>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    )
}

export default LoginPage

// onClick={() => goToAdminHomePage(history)}
// goToAdminHomePage,