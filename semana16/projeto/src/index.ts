import connection from './connection'
import app from './app'
import express, {Request, Response} from 'express'
import  { v4  as  uuidv4 }  from  'uuid' 

type User = {
    name: string,
    nickname: string,
    email: string,
    id: string | number
}

let users: User[] = []

app.get("/user/:id", ((req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (!id) {
            throw new Error ("Usuário não encontrado!") 
        }

        const result = users.filter((users) => users.id === id)
        res.status(200).send(result)
        if(!result.length) {throw new Error("O usuário não existe.")}

    } catch (error) {
        res.send({message: error.message})
    }
}),

app.put("/user", (req: Request, res: Response) => {
    try {
        const {name, nickname, email} = req.body
        const { v4: uuidv4 } = require('uuid')
        const id = uuidv4()

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Verifique se os campos foram preenchidos corretamente")
        }

        users.push(name, nickname, email, id)
        res.status(200).send("Usuário criado!")

        console.log(users)
    } catch (error) {
        res.status(400).send({message: error.message})
    }  
}))