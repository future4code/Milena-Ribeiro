import React from 'react'
import Users from './Components/Users'
import Register from './Components/Register'


export default class App extends React.Component {
  state = {
    page: 'register'
  }

    changePageRegister = () => {
      if (this.state.page === "register") {
        this.setState({ page: "users" })
      } 
    };

    changePageUsers = () => {
      if (this.state.page === "users") {
        this.setState({ page: "register" })
      }
    }
  
    renderPage = () => {
      switch (this.state.page) {
        case 'register': 
          return <Register />;
        case "users":
          return <Users />;
        default:
          return <div></div>
      }
    }

    render() {
        return (
            <div>
                <button onClick={this.changePageRegister}>Ir para página de lista</button>
                <button onClick={this.changePageUsers}>Ir para página de registro</button>
                {this.renderPage()}
            </div>
        );
    }
}