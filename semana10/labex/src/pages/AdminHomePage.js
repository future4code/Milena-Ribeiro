import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import { goToHomePage, goToCreateTripPage, goToLoginPage } from '../routes/coordinator';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function ContainedButtons() {
    const history = useHistory()
    const [listTrips, setListTrips] = useState([])
    const classes = useStyles();

    useEffect(() => {
        getTrips()
    }, [])
    
    const deleteTrip = (id) => {
        const token = window.localStorage.getItem("token")
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert("Viagem excluída")
            getTrips()
            console.log(res)
        }).catch((err) => {
            alert("Erro")
           console.log(err)  
        })
    }
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-ribeiro-cruz/trips")
        .then(res => {
            setListTrips(res.data.trips)
        }).catch(err => {
            console.log(err)
        })
    }
    const goToDetailPage = (id) => {
        history.push(`/admin/trips/${id}`);
    };
    return (
        <div className={classes.root}>
            <h1>Painel Administrativo</h1>
            <Button onClick={() => goToHomePage(history)} color="primary">Página inicial</Button>
            <Button onClick={() => goToCreateTripPage(history)}>Criar viagem</Button>
            <Button onClick={() => goToLoginPage(history)} color="secondary">Sair</Button>
            {listTrips.map((trip) => {
                return (
                    <div key={trip.name}>                       
                        <Button variant="contained" onClick={() => goToDetailPage(trip.name)}>{trip.name}</Button>    
                        <IconButton aria-label="delete" onClick={() => deleteTrip(trip.id)}>
                            <DeleteIcon />
                        </IconButton> 
                    </div>
                )
            })}
        </div>
    )
}