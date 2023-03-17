import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { userRoutes } from './routes/userRoutes'
import { bandRoutes } from './routes/bandRoutes'
import { showRoutes } from './routes/showRoutes'

export const app = express()
app.use(express.json())
app.use(cors())

app.use("/band", bandRoutes)
app.use("/show", showRoutes)
app.use("/user", userRoutes)


const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server.`)
    }
});