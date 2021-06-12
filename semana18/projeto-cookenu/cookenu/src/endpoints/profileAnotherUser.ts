import { getData } from '../services/authenticator'
import { Request, Response } from 'express'
import connection from '../connection'

export default async function profileAnotherUser(req: Request, res: Response) {
    try {
        const authorization = req.headers.authorization as string
        const authorizationData = getData(authorization)
        const id = req.params.id
        
        const profileAnotherUser = await connection
        .select('cookenu_users.id', 'cookenu_users.name', 'cookenu_users.email')
        .from('cookenu_users')
        .where({id}) 

        res.status(200).send({ profileAnotherUser });
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}