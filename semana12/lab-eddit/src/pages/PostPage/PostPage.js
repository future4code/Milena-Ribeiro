import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { ScreenContainer } from './styled'
import CommentPostForm from './CommentPostForm'
import Typography from '@material-ui/core/Typography'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const postDetail = useRequestData({}, `${BASE_URL}/posts/${params.id}`)
    console.log(postDetail)
    // console.log("id", params)

    return (
        <ScreenContainer>
            {postDetail && postDetail.post ? (
                <Typography gutterBottom variant="h5" component="h2">
               
                    <h3>{postDetail.post.username}</h3>
                    <h5>{postDetail.post.title}</h5>
                    <h5>{postDetail.post.text}</h5>
                    <h5>{postDetail.post.votesCount}</h5>
                    <h5>{postDetail.post.commentsCount}</h5>
        
                </Typography>
                ) : (
                    <p>carregando</p>
            )}

            <CommentPostForm />

            {postDetail && postDetail.post && postDetail.post.comments.map((commentList) => {
                return (
                    <>                
                    <h4>{commentList.username}</h4>
                    {commentList.text}
                    <p>{commentList.votesCount}</p>
                    </>
                )
            })}

        </ScreenContainer>
    )
}

export default PostPage


{/* <Typography gutterBottom variant="h5" component="h2">
                    <p>{props.username}</p>
                </Typography> */}

{/* <h3>{postDetail && postDetail.post.username}</h3> */}

{/* <PostContainer
                    username={postDetail.post.username}
                    text={postDetail.post.text}
                    votesCount={postDetail.post.votesCount}
                    commentsCount={postDetail.post.commentsCount}
                />  */}

// <ScreenContainer>
        //     {postDetail && postDetail.post ? ( 
        //         <PostContainer
        //             username={postDetail.post.username}
        //             text={postDetail.post.text}
        //             votesCount={postDetail.post.votesCount}
        //             commentsCount={postDetail.post.commentsCount}
        //         />
        //     ) : (
        //      <p>carregando</p> 
        //     )}
        // </ScreenContainer>

 {/* <PostContainer>
    {postDetail && postDetail.post && postDetail.comments.map((comment) => {
        return (
          <>
           {comment.text}
             </>
            )
                })}
            </PostContainer> */}