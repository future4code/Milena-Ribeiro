import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

import { FeedContainer } from './styled'
import FeedCard from "../../components/FeedCard/FeedCard"

const FeedPage = () => {
    useProtectedPage()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)
    
    const feedList = feed && feed.posts && feed.posts.map((post) => {
        return (
            // <div>
            //     <p>{post.username}</p>
            //     <p>{post.text}</p>                
            //     <p>{post.votesCount}</p>
            //     <p>{post.commentsCount}</p>
            // </div>
            <FeedCard
                username={post.username}
                text={post.text}
                votesCount={post.votesCount}
                commentsCount={post.commentsCount}
            />
        )
    })

    return (
        // <div>
        //     <h1>Feed Page</h1>
        //     {feedList}
        // </div>

        <FeedContainer>
            {feedList}
        </FeedContainer>
    )
}

export default FeedPage