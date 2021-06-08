import cors from 'cors'
import express from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

export default app

// import express from 'express'
// import cors from 'cors'

// const app = express()

// app.use(express.json())
// app.use(cors())

// app.listen(3003, ()=>{
//     console.log('Servidor rodando na porta 3003')
// })

// export default app