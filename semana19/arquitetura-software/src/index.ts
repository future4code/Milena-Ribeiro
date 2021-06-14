import app from "./app"
import { signup } from '../src/controller/signup'

app.post('/user/signup', signup)