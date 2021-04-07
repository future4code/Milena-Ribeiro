import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TelaInicial = () => {
    const [perfil, setPerfil] = useState({})
    const [match, setMatch] = useState(true)

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/person")
        .then(res => {
            setPerfil(res.data.profile)
        }).catch(err => {
            console.log("erro", err)
        });
    }, [])
 
    const pegaMatch = (id, choice) => {
        const body = {
            id,
            choice
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/choose-person"), body
        .then((res) => setMatch (res))
        .catch((err) => console.log(err))
    }
    useEffect(()=> {
        pegaMatch(match)
    }, [setMatch])

return (
    <div>
        
        <h1>Astromatch</h1>
        <img src={perfil.photo}/>
        <p>{perfil.name}, {perfil.age}</p>
        <p>{perfil.bio}</p>
        <button >s2</button>
        <button>X</button>
        {pegaMatch}
    </div>
)

}

export default TelaInicial