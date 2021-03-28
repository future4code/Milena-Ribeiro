import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivContainer = styled.div`
            height: 40vh;
            width: 40vw;
            margin: 0 auto;
            display: flex;
            border: solid 1px ;           
            justify-content: center;
            align-items: center;
            flex-direction: column;
        `

class PlaylistCriada extends React.Component {

    state = {
        visualizarPlaylist: []
    }

    componentDidMount() {
        this.playlistCriada();
    }

    playlistCriada = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'milena-ribeiro-cruz'
            }
        })
        .then((res) => {
            this.setState({ visualizarPlaylist: res.data.result.list })
        }).catch((err) => {
            alert('Erro ao carregar playlist')
        })
    }

    deletarPlaylist = (playlistId) => {
        axios.delete
        (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
            headers: {
                Authorization: 'milena-ribeiro-cruz'
            }
        }).then((res) => {
            alert('Playlist deletada')
            this.playlistCriada()
        }).catch((err) => {
            alert('Erro ao apagar playlist')
            console.log(err)
        })
    }

    render() {
        const mapPlaylist = this.state.visualizarPlaylist.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p>{playlist.name}</p>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
                </div>
            )
        })
        return (
            <DivContainer>
                <h2>Playlists</h2>
                {this.state.visualizarPlaylist.length > 0 ? (            
                    <ul>{mapPlaylist}</ul>
                ) : (
                <p>Carregando...</p>
                 )}
            </DivContainer>
        )
    }

}
export default PlaylistCriada