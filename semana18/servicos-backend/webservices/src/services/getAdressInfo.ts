import { userAddress } from "../types"
import axios from 'axios'
import {Request, Response} from 'express'

export const getAdressInfo = async (req: Request, res: Response) => {
    try {
        const {cep} = req.body
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const address: userAddress = {
            city: response.data.localidade,
            neighborhood: response.data.bairro, 
            state: response.data.uf,
            street: response.data.logradouro
        }

        res.status(200).send({ address })
    } catch (error) {
        return null
    }
}