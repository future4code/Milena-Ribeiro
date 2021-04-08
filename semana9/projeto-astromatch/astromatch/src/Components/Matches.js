import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Matches = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        matchesDados()
    }, [])

    const matchesDados = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/matches")
        .then(res => {
            setMatches(res.data.matches)
            // console.log(res.data.matches)
        }).catch(err => {
            // console.log(err)
        })
    }

    const deletarTudo = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/clear")
        .then(res => {
            matchesDados()
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div >
            <button onClick={() => deletarTudo()}>Limpar Tudo</button>
            {matches.map((match) => {
                return (
                    <div key={match.id}>
                        
                        <img width='100' height='100' src={match.photo}/> <p>{match.name}</p>
                    </div>
                );
            })}
        </div>

    )
}

export default Matches