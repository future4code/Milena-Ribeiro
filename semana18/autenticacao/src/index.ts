import app from "./app"
import criarUsuario from './endpoints/criarUsuario'

app.post('/user/signup', criarUsuario)