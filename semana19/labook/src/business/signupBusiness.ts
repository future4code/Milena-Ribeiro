import { hash } from "../services/hashManager"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { user } from "../model/user"

export const signupBusiness = async (
    user: user
): Promise<string> => {
    if (!user.name || !user.email || !user.password) {
        res.statusCode = 406
        message = '"name", "email" and "password" must be provided'
        throw new Error(message)
    }

    const id: string = generateId()
    const cypherPassword = await hash(user.password)

    await connection('labook_users')
        .insert({
            id,
            name,
            email,
            password: cypherPassword
        })

    const token: string = generateToken({ id })

    return token
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