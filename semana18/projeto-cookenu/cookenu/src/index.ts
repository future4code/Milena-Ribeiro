import app from './app'
import login from './endpoints/login'
import getRecipe from './endpoints/getRecipe'
import createUser from './endpoints/createUser'
import profileUser from './endpoints/profileUser'
import createRecipe from './endpoints/createRecipe'
import profileAnotherUser from './endpoints/profileAnotherUser'

app.get('/user/profile', profileUser)
app.get('/user/:id', profileAnotherUser)
app.get('/recipe/:id', getRecipe)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.post('/recipe', createRecipe)