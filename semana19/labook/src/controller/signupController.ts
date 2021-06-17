import express, { Express, Request, Response } from "express"
import { generateId } from '../services/idGenerator'
import { signupBusiness } from "../business/signupBusiness"

export const signupController = async (
    req: Request,
    res: Response
) => {
    try {
        let message = "Success!"
        const { name, email, password } = req.body

        // const id: string = generateId()

        const token: string = await signupBusiness({ 
            /*id,*/ name, email, password 
        })
        res.status(201).send({ message, token })

    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}

// app.post('/users/signup', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"
//       const { name, email, password } = req.body

//       if (!name || !email || !password) {
//          res.statusCode = 406
//          message = '"name", "email" and "password" must be provided'
//          throw new Error(message)
//       }

//       const id: string = generateId()

//       const cypherPassword = await hash(password);

//       await connection('labook_users')
//          .insert({
//             id,
//             name,
//             email,
//             password: cypherPassword
//          })

//       const token: string = generateToken({ id })

//       res.status(201).send({ message, token })

//    } catch (error) {
//       res.statusCode = 400
//       let message = error.sqlMessage || error.message

//       res.send({ message })
//    }
// })