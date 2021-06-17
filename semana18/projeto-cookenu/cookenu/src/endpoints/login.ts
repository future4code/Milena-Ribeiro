import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import { compareHash } from "../services/hashManager"

export default async function login(req: Request, res: Response) {
   try {
      const { email, password } = req.body;

      if (!email) {
         throw new Error("Insira um email.")
      }

      if (!password) {
         throw new Error("Preencha o campo 'senha'.")
      }

      const queryResult = await connection.raw(`  
         SELECT * FROM cookenu_users WHERE email = "${email}";
      `)

      const user = queryResult[0][0];

      if (!user) {
         throw new Error("Usuário não encontrado.")
      }

      const passwordIsCorrect: boolean = compareHash(password, user.password)

      if (!passwordIsCorrect) {
         throw new Error("Senha inválida.")
      }

      const token: string = generateToken({
         id: user.id,
      });

      res.status(200).send({ token });
   } catch (error) {
      res.status(400).send({ error: error.message });
   }
}