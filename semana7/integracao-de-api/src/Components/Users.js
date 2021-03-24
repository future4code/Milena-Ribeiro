import React from 'react'
import axios from 'axios';

export default class Users extends React.Component {
    state = {
        usersList: []
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
            this.setState({usersList: res.data})
        })
        .catch((err) => {
            alert("Houve um erro desconhecido. Por favor, tente novamente mais tarde")
        })
    }
    
    deleteUser = (id) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
                headers: {
                    Authorization: "milena-ribeiro-cruz"
                }
            }
        )
        .then((res) => {
            this.getAllUsers();
        })
        .catch((err) => {
            alert("Erro")
        })
    }

    // changePageUsers = () => {
    //     if (this.state.page === "users") {
    //       this.setState({ page: "register" })
    //     }
    //   }

    render() {
        return (
            <div>
                <h2>Lista usuários</h2>
                {this.state.usersList.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <button onClick={() => this.deleteUser(user.id)}>X</button>
                            {/* <button onClick={this.changePageUsers}>Ir para página de registro</button> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}