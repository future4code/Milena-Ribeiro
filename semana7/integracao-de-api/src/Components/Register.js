import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    state = {
        inputName: "",
        inputEmail: ""
      };

    handleInputName = (event) => {
        this.setState({ inputName: event.target.value });
    }

    handleinputEmail = (event) => {
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
            this.setState({ inputName: "", inputEmail: "" })
            alert("Cadastrado com sucesso")
        })
        .catch((err) => {
            alert("Aconteceu um erro deconhecido. Por favor, tente novamente mais tarde.")
            console.log(err)
        })
     }

    render() {
        return (
            <div>
                <h2>Cadastro</h2>
                <label>
                    Nome:
                    <input onChange={this.handleInputName} value={this.state.inputName} />
                </label>
                <label>
                    E-mail:
                    <input onChange={this.handleinputEmail} value={this.state.inputEmail} />
                </label>
                <button onClick={this.createUser}>Salvar</button>
            </div>
        )
    }
}