import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { ScreenContainer, PostContainer } from './styled'
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
                <>
                    <h3>{postDetail.post.username}</h3>
                    <h3>{postDetail.post.title}</h3>
                    <h3>{postDetail.post.text}</h3>
                    <h3>{postDetail.post.votesCount}</h3>
                    <h3>{postDetail.post.commentsCount}</h3>
                </>
                ) : (
                    <p>carregando</p>
            )}

            {/* <PostContainer>
                {postDetail && postDetail.post && postDetail.comments.map((comment) => {
                    return (
                        <>
                        {comment.text}
                        </>
                    )
                })}
            </PostContainer> */}

        </ScreenContainer>
    )
}

export default PostPage


{/* <h3>{postDetail && postDetail.post.username}</h3> */}

{/* <PostContainer
                    username={postDetail.post.username}
                    text={postDetail.post.text}
                    votesCount={postDetail.post.votesCount}
                    commentsCount={postDetail.post.commentsCount}
                />  */}

// const postDetail = post.post

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