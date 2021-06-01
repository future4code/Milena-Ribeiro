import express, { Request, Response } from "express"
import { user } from "./types/user"
import app from './app'
import { connection } from './connection'

type users = {
   id: number,
   name: string,
   email: string,
   type: string
}

let allUser: users[]=[]

app.get("/users/all", async function (req: Request, res: Response) : Promise<void> {
   try {
      const result = await connection.raw(`SELECT * FROM aula48_exercicio`)
      res.status(200).send(result)
   } catch (error) {
      res.send(error.message || error.sqlMessage)
   }
})

app.get("/users/search", async (req: Request, res: Response) => {
   try {
      const name = req.query.name as string
      console.log(name)
      const result = await connection.raw(`
         SELECT id, name, email, type FROM aula48_exercicio WHERE name LIKE "%${name}%";
      `)
      const user: users[] = result[0]

      res.status(200).send(user)
   } catch (error) {
      res.send(error.message || error.sqlMessage)
   }
})