import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { userRoutes } from './routes/userRoutes'
import { bandRoutes } from './routes/bandRoutes'

export const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/band", bandRoutes)


const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
});