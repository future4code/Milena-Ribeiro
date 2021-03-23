import React from 'react';
import axios from 'axios'

export default class Usuarios extends React.Component {
    state = {
        listUsers: []
    };

componentDidMount() {
    this.getAllUsers();
}

getAllUsers = () => {
    axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "milena-ribeiro-cruz"
            }
        }
    )
    .then((res) => {
        this.setState({listUsers: res.data})
    })
    .catch((err) => {
        alert("Houve um erro desconhecido. Por favor, tente novamente mais tarde.")
    })
}

render() {
    const listRender = this.state.listUsers.map((user) => {
        <li key={user.id}>{user.name}</li>
    });
return (
    <div>
        <h2>Lista de usuários</h2>
        
    </div>
)
}

}