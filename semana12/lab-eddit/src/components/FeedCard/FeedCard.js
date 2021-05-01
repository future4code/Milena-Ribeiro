import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { FeedCardContainer, FeedCardContent, } from './styled'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const FeedCard = (props) => {
    const params = useParams()

    const positiveVote = async (id) => {
        const body = {
            direction: 1
        }
        try {
            const response = await axios.put(`${BASE_URL}/posts/${params.id}/vote`, body, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    const onClickVote = (id) => {
        positiveVote(id)
    }

  return (
    <FeedCardContainer >
        <CardActionArea>
            <FeedCardContent onClick={props.onClick}>
                <Typography gutterBottom variant="h5" component="h2">
                    <p>{props.username}</p>
                </Typography>
                <Typography align={'center'} variant="body2" component="p">
                    {props.text.toUpperCase()}
                </Typography>
            </FeedCardContent>
                <hr />
            <CardActions>
                <Button size="small" color="primary" onClick={() => onClickVote()}>    
                    <ArrowUpwardIcon />
                </Button>
                    {props.votesCount}
                <Button size="small" color="primary">
                    <ArrowDownwardIcon/>
                </Button>
                <Button size="small" color="primary">
                    comentários: {props.commentsCount}
                </Button>
            </CardActions>
        </CardActionArea>
    </FeedCardContainer>
  )
}

export default FeedCard 