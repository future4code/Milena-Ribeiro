import React from 'react';
import axios from 'axios';

class CriandoPlaylist extends React.Component {

    state = {
        nomePlaylist: ''
    }

    handleNomePlaylist = (event) => {
        this.setState({ nomePlaylist: event.target.value })
    }

    criandoPlaylist = () => {
        const body = {
            name: this.state.nomePlaylist
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'milena-ribeiro-cruz'
            }
        }).then((res) => {
            // console.log(res)
            alert('Playlist criada com sucesso')
            this.setState({ nomePlaylist:'' })
        }).catch((err) => {
            // console.log(err)
            alert('Erro')
        })
    };
    

    render () {
        return (
            <div>
                {/* <button>VER PLAYLISTS</button> */}
                <h2>Criar Playlist</h2>
                <h3>Nome Playlist</h3>
                <input
                onChange={this.handleNomePlaylist}
                value={this.state.nomePlaylist}
                />
                <button onClick={this.criandoPlaylist}>ENVIAR</button>
            </div>
        )
    }

}

export default CriandoPlaylist

    // postCriandoPlaylist = async () => {
    //     try {
    //         const res = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
    //             headers: {
    //                 Authorization: 'milena-ribeiro-cruz'
    //             }
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }