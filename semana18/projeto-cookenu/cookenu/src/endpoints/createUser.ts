import { Request, Response } from "express"
import connection from "../connection"
import { user } from "../types"
import { generateId } from "../services/idGenerator"
import { generateToken } from "../services/authenticator"
import { createHash } from "../services/hashManager"

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {
      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'nome', 'email' e 'senha.'")
      }

      if (req.body.password.length < 6) {
         throw new Error ("A senha deve ter no mínimo 6 caracteres.")
      }

      const [user] = await connection('cookenu_users').where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado.')
      }

      const id: string = generateId();

      const newUser: user = {
         id,
         name,
         email,
         password: createHash(password),
      }

      await connection('cookenu_users').insert(newUser);

      const token: string = generateToken({ id: newUser.id });

      res.status(201).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}