import app from "./app"
import { signupController } from '../src/controller/signupController'

app.post('/user/signup', signupController)