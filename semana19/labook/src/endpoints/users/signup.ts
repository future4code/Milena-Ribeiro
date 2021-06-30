import { Request, Response } from "express"
import connection from '../../data/connection'
import { generateToken } from "../../services/authenticator"
import { generateHash } from "../../services/hashManager"
import generateId from "../../services/idGenerator"

export default async function signup (req: Request, res: Response): Promise<void> {
    try {
        let message = "Success!"
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 406
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }

        if (password > 6) {
            throw new Error("Password must contain at least 6 characters.")
        }

        const id: string = generateId()

        const cypherPassword = await generateHash(password);

        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password: cypherPassword
            })

        const token: string = generateToken({ id })

        res.status(201).send({ message, token })

    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}