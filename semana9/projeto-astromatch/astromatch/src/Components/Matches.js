import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Matches = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        macthesDados()
    }, [])

    const macthesDados = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-cruz/matches")
        .then(res => {
            setMatches(res.data.matches)
            console.log(res.data.profile)
        }).catch(err => {
            console.log(err)
        })
    }

    // render() 
    // {
    //     const mapMatches = setMatches.map ((match) => {
    //         return (
    //             <div>
    //                 <p>{match.name}</p>
    //             </div>
    //         );
    //     });
    // }

    return (
        <div key={matches.id}>
        {matches.map((match) => {
            return (
                <div>
                    <img width='150' height='200' src={match.photo}/>, <p>{match.name}</p>
                </div>
            );
        })}
        </div>
        // <div>
        //     <h3>Tela de Matches</h3>
        //     {mapMatches}
        // </div>
    )
}

export default Matches