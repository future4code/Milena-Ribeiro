import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const FeedPage = () => {
    useProtectedPage()
    const feed = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)
    
    const feedList = feed.map((post) => {
        return <p>{post.username}</p>
    })

    return (
        <div>
            <h1>Feed Page</h1>
            {feedList}
        </div>
    )
}

export default FeedPage