import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Matches from './Matches';
import styled from 'styled-components';

const TelaInicial = () => {
    const [perfil, setPerfil] = useState({})
    const [id, setId] = useState("")
    const [match, setMatch] = useState(true)
    const [tela, setTela] = useState("TelaInicial")

    useEffect(() => {
        pegaPerfil()
    }, [])

    const pegaPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/person")
        .then(res => {
            setPerfil(res.data.profile)
            setId(res.data.profile.id)
            // console.log(res.data.profile.id)
        }).catch(err => {
            console.log("erro", err)
        });
    }

    const pegaMatch = () => {
        const body = {
            id: id,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/choose-person", body)
        .then(res => {
            setMatch (res.data.isMatch)
            pegaPerfil()
        })
        .catch((err) => console.log(err))
    }

    const botaoTela = () => {
        if (tela === "TelaInicial"){
            return <button onClick={mudaTela}>Ir para Matches</button>
        } else {
            return <button onClick={mudaTela}>Visualizar perfis</button>
        }
    }    
    
    const mudaTela = () => {
        if(tela === "TelaInicial"){
            setTela("Matches")
        } else {
            setTela("TelaInicial")
        }
    }
    const renderTela = () => {
        switch (tela) {
            case "TelaInicial":
                return (
                    <div>
                        <h1>Astromatch</h1>
                        
                        <img width='350' height='400' src={perfil.photo}/>
                        <p>{perfil.name}, {perfil.age}</p>
                        <p>{perfil.bio}</p>
                        <button onClick={pegaMatch}>s2</button>
                        <button onClick={pegaPerfil}>X</button>
                    </div>
                )
            case "Matches":
                return (
                    <Matches />
                )
            default:
            <div></div>
        }   
    }

    return (
        <div>
            <div>{botaoTela()}</div>
            {renderTela()}
        </div>
    )
    
// return (
//     <div>
//         <button>Matches</button>
//         <h1>Astromatch</h1>
//         <img src={perfil.photo}/>
//         <p>{perfil.name}, {perfil.age}</p>
//         <p>{perfil.bio}</p>
//         <button onClick={pegaMatch}>s2</button>
//         <button onClick={pegaPerfil}>X</button>
//     </div>
// )

}
export default TelaInicial