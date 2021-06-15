import { app } from "./controller/app"
// import { signup } from './controller/user/signup'
// import { login } from './controller/user/login'
// import { createTask } from './controller/task/createTask'
// import { getTaskById } from './controller/task/getTaskById'

import { taskRouter } from './routes/taskRouter'
import { userRouter } from './routes/userRouter'

// app.post('/user/signup', signup)
// app.post('/user/login', login)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

app.use('/task', taskRouter)
app.use('/user', userRouter)