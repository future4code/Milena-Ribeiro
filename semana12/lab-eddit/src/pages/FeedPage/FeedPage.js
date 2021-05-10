import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { FeedContainer } from './styled'
import FeedCard from '../../components/FeedCard/FeedCard'
import { goToPost } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import CreatePostForm from './CreatePostForm'

const FeedPage = () => {
    useProtectedPage()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)
    const history = useHistory()

    const onClickCard = (id) => {
        goToPost(history, id)
    }
    
    const feedList = feed && feed.posts && feed.posts.map((post) => {
        return (
            <FeedCard
                key={post.id}
                username={post.username}
                title={post.title}
                text={post.text}
                votesCount={post.votesCount}
                commentsCount={post.commentsCount}
                onClick={() => onClickCard(post.id)}
            />
        )
    })
    return (
        <FeedContainer>
            <CreatePostForm/>
            {feedList}
        </FeedContainer>
    )
}

export default FeedPage