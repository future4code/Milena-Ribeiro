import {getData} from '../services/authenticator'
import {Request, Response} from 'express'
import connection from '../connection'

export default async function profileUser(req: Request, res: Response): Promise<void> {
    try {

        const authorization = req.headers.authorization as string
        const authorizationData = getData(authorization)
        
        const profile = await connection
        .select('cookenu_users.id', 'cookenu_users.name', 'cookenu_users.email')
        .from('cookenu_users')
        .where({id: authorizationData.id})

        res.status(200).send({ profile });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}