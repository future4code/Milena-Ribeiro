import express, {Request, Response} from 'express'
import cors from 'cors'
import {countries} from './countries'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/countries/all", (req: Request, res: Response) => {
    res
    .status(200)
    .send(countries)
})


app.listen(3003, () => {
    console.log("Server is running at http://localhost:3003")
})