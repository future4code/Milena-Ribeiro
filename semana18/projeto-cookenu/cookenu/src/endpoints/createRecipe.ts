import { Request, Response } from "express"
import connection from "../connection"
import { recipe } from "../types"
import {getData} from '../services/authenticator'
import { generateId } from "../services/idGenerator"

export default async function createRecipe(req: Request, res: Response): Promise<void> {
    try {
        const { title, description } = req.body
        const authorization = req.headers.authorization as string
        const authorizationData = getData(authorization)
        
        const [recipe] = await connection('cookenu_recipes').where({ title })
        const id: string = generateId();

        const newRecipe: recipe = {
            id,
            title,
            description
         }
         
        await connection('cookenu_recipes').insert(newRecipe)

        res.status(201).send({ newRecipe });
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}