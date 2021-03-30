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
    line-height: 10px;
`

const Input = styled.input`
    margin-bottom: 10px;
`

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
            alert('Playlist criada com sucesso')
            this.setState({ nomePlaylist:'' })
        }).catch((err) => {
            alert('Erro')
        })
    };
    

    render () {
        return (
            <DivContainer>
                <h2>Criar Playlist</h2>
                <h3>Nome Playlist</h3>
                <Input
                onChange={this.handleNomePlaylist}
                value={this.state.nomePlaylist}
                />
                <button onClick={this.criandoPlaylist}>ENVIAR</button>
            </DivContainer>
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