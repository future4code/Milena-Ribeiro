import { getData } from '../services/authenticator'
import { Request, Response } from 'express'
import connection from '../connection'

export default async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const authorization = req.headers.authorization as string
        const authorizationData = getData(authorization)
        const id = req.params.id
        
        const getRecipes = await connection
        .select('cookenu_recipes.id', 'cookenu_recipes.title', 'cookenu_recipes.description')
        .from('cookenu_recipes')
        .where({id}) 

        res.status(200).send({ getRecipes });
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}