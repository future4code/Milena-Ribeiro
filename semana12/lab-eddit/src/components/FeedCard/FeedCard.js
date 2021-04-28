import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { FeedCardContainer, FeedCardContent } from './styled'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const FeedCard = (props) => {

  return (
    <FeedCardContainer onClick={props.onClick}>
        <CardActionArea>
            {/* <CardMedia
            component={'img'}
            alt={props.title}
            height={'150px'}
            image={props.image}
            title={props.title}
            /> */}
            <FeedCardContent>

                <Typography gutterBottom variant="h5" component="h2">
                    <p>{props.username}</p>
                </Typography>

                <Typography align={'center'} variant="body2" component="p">
                    {props.text.toUpperCase()}
                </Typography>

                <CardActions>
                    <Button
                        size="small" 
                        color="primary"
                        // {props.votesCount}
                    >
                        <ArrowUpwardIcon />
                    </Button>

                    {props.votesCount}

                    <Button
                        size="small" 
                        color="primary"
                    >
                        <ArrowDownwardIcon/>
                    </Button>

                    <Button size="small" color="primary">
                        comentários: {props.commentsCount}
                    </Button>
                </CardActions>

            </FeedCardContent>
        </CardActionArea>
    </FeedCardContainer>
  )
}

export default FeedCard