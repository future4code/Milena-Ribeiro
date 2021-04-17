import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        marginTop: 20,
      },
    },
    avatar: {
        marginLeft: 600,
        marginTop: 10,
        border: 10,
    },
    botaoLimpar: {
        marginBottom: 10,
        marginTop: 10,
    }
}));

export default function ImageAvatars() {
    const classes = useStyles();

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
        <div>
            <Button className={classes.botaoLimpar} variant="contained" color="disabled" size="small" onClick={() => deletarTudo()}>Limpar Tudo</Button>
            {matches.map((match) => {
                return (
                    <div className={classes.root} key={match.id}>
                        {/* <img width='100' height='100' src={match.photo}/> <p>{match.name}</p> */}
                        <Avatar className={classes.avatar} alt="Match" src={match.photo} />
                        <h4>{match.name}</h4>
                    </div>       
                );
            })}
        </div>

    )
}