import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Matches from './Matches';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';


const DivTitulo = styled.h1`
    font-family: cursive;
    font-size: 15px;
`
const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      marginLeft: 500,
    // width:300,
    // height:530,
    },
    media: {
      height: 300,
    },
    botao: {
        marginLeft: 100,    
    },
    botaoPrincial: {
        marginTop: 10,
        marginBottom: 1,
    },
  });

export default function MediaCard() {
    const classes = useStyles();

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
            return <Button className={classes.botaoPrincial} variant="contained" color="primary" size="small" onClick={mudaTela}>Ir para Matches</Button>
        } else {
            return <Button className={classes.botaoPrincial} variant="contained" color="primary" size="small" onClick={mudaTela}>Visualizar perfis</Button>
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
                        <DivTitulo>
                            <h1>astromatch</h1>
                            
                        </DivTitulo>

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={perfil.photo}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <h4>{perfil.name}, {perfil.age}</h4>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {perfil.bio}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>   
                            <CardActions className={classes.botao}>
                                <Fab color="secondary" aria-label="like" onClick={pegaMatch}>
                                        <FavoriteIcon />
                                </Fab>
                                <Fab color="default" aria-label="close" onClick={pegaPerfil}>
                                    <CloseIcon />
                                </Fab>
                            </CardActions>
                        </Card>
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
}