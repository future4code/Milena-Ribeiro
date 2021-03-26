import React from 'react';
import axios from 'axios';

class PlaylistCriada extends React.Component {

    state = {
        visualizarPlaylist: []
    }

    componentDidMount() {
        this.playlistCriada();
    }

    playlistCriada = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists')
        .then((res) => {
            this.setState({ visualizarPlaylist: res.data.result.list })
        }).catch((err) => {
            alert('Erro ao carregar playlist')
        })
    }

    deletarPlaylist = (id) => {
        axios.del(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${id}`, {
            hearders: {
                Authorization: 'milena-ribeiro-cruz'
            }
        }).then((res) => {
            alert('Playlist deletada')
            this.playlistCriada()
        }).catch((err) => {
            alert('Erro ao apagar playlist')
        })
    }

    render () {
        const mapPlaylist = this.state.visualizarPlaylist.map((playlist) => {
            return (
                <div key={playlist.id}>
                <p>{playlist.name}</p>
                <button>VOLTAR PARA HOME</button>
                </div>
        )
    })
        return (
            <div>
                <h2>Playlists</h2>
                {mapPlaylist}
            </div>
        )
    }
}
export default PlaylistCriada