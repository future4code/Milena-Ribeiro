import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//Exercício 1. A) Usaria o método GET porque ele é responsável por pegar as informações. b) Indicaria "/users/all"
app.get("/users/all", (req: Request, res: Response) => {
  res.send(users)
}) 

app.get("/type", (req: Request, res: Response) => {
  try {
    const type = req.body.type
    const result = users.filter((user) => {
      return user.type === type
    })
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})