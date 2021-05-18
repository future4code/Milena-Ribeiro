import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import { goToApplicationFormPage, goToHomePage } from '../routes/coordinator';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 600,
      marginLeft: 400,
      marginBlockEnd: 15,
    },
    bullet: {
      display: 'inline-block',
      margin: '10 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    botao: {
        marginRight: 10,
    }
  });


// const ListTripsPage = () => 
export default function ContainedButtons() {
    const history = useHistory()
    const [listTrips, setListTrips] = useState([])

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips")
        .then(res => {
            setListTrips(res.data.trips)
            console.log(res.data.trips)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <h1>Viagens</h1>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" component="p">
                    {listTrips.map((trip) => {
                            return (
                                <div key={trip.name}>
                                    <h3>Nome: {trip.name}</h3>
                                    <h3>Descrição: {trip.description}</h3>
                                    <h3>Planeta: {trip.planet}</h3>
                                    <h3>Duração: {trip.durationInDays}</h3>
                                    <h3>Data: {trip.date}</h3>
                                    <hr></hr>
                                </div>
                            )
                        })}
                    </Typography>
                </CardContent>
            </Card>
            <Button className={classes.botao} onClick={() => goToApplicationFormPage(history)}>Inscreva-se</Button>
            <Button className={classes.botao} onClick={() => goToHomePage(history)} color="primary">Voltar</Button>
        </div>
    )
}