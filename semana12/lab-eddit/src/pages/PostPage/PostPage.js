import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { ScreenContainer } from './styled'
import CommentPostForm from './CommentPostForm'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const postDetail = useRequestData({}, `${BASE_URL}/posts/${params.id}`)
    console.log(postDetail)

    return (
        <ScreenContainer>
            {postDetail && postDetail.post ? (
                <Typography variant="h5" component="h2">              
                    <h3>{postDetail.post.username}</h3>
                    <h5>Title: {postDetail.post.title}</h5>
                    <h5>Texto: {postDetail.post.text}</h5>
                    <Button size="small" color="primary"><ArrowUpwardIcon/></Button>
                    {postDetail.post.votesCount}
                    <Button size="small" color="primary"><ArrowDownwardIcon/></Button>
                    <Typography size="small" color="primary" align={'center'}>Comentários: {postDetail.post.commentsCount}</Typography>       
                </Typography>
                ) : (
                    <p>Carregando...</p>
            )}
            <CommentPostForm />
            {postDetail && postDetail.post && postDetail.post.comments.map((commentList) => {
                return (
                    <Typography align={'center'} variant="p" component="p">                
                    <h4>{commentList.username}</h4>
                    {commentList.text}
                    <Button size="small" color="primary"><ArrowUpwardIcon/></Button>
                    {commentList.votesCount}
                    <Button size="small" color="primary"><ArrowDownwardIcon/></Button>
                    </Typography>
                )
            })}
        </ScreenContainer>
    )
}

export default PostPage