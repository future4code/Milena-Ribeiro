import app from "./app"
import createPost from "./endpoints/posts/createPost"
import getPosts from "./endpoints/posts/getPost"
import login from "./endpoints/users/login"
import signup from './endpoints/users/signup'

app.post('/users/signup', signup)
app.post('/users/login', login)
app.post('/posts', createPost)
app.get('/posts/:id', getPosts)