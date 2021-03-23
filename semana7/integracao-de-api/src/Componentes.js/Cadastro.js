import React from "react";
import axios from "axios";

export default class Cadastro extends React.Component {
    state = {
          inputName: "",
          inputEmail: ""
        };

    handleOnChangeName = (event) => {
        this.setState({ inputName: event.target.value });
     };

    handleOnChangeEmail = (event) => {
        this.setState({ inputEmail: event.target.value });
     };

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
            {
                headers: {
                    Authorization: "milena-ribeiro-cruz"
                }
            }  
        )
        .then((res) => {
            this.setState({inputName: ""})
            this.setState({inputEmail: ""})
            alert("Cadastrado com sucesso.")
        })
        .catch((err) => {
            this.setState({inputName: ""})
            this.setState({inputEmail: ""})
            alert("Aconteceu um erro deconhecido. Por favor, tente novamente mais tarde")
        })
    };
    
    render() {
        return (
            <div>
                <label>Nome:</label>
                <input></input>
                <label>Email:</label>
                <input></input>
                <button onClick = {(this.createUser)}>Salvar</button>
                <button>Ir para página de lista</button>
            </div>
        )
    }
    
}