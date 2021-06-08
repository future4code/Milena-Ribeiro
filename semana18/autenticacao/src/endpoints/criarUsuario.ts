import connection from '../connection'
import { usuarios } from '../types'
import { Request, Response } from 'express'
import { gerarToken } from '../services/gerarToken'
import { generateId } from '../services/gerarId'

export default async function criarUsuario(req: Request, res: Response): Promise<void> {
   try {

      const { email, password } = req.body

      if (req.body.password.length < 6) {
         throw new Error("A senha deve ter no mínimo 6 caracteres");
      }

      if (req.body.email.indexOf("@") === -1) {
         throw new Error("Email inválido");
      }

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      const [usuarios] = await connection('Usuários')
         .where({ email })

      if (usuarios) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()

      const novoUsuario: usuarios = { id, email, password }

      await connection('Usuários').insert(novoUsuario)

      const token: string = gerarToken({ id: novoUsuario.id });

      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message })
   }
}