import express from "express"
import cors from "cors"
import productRouter from "./routes/productRouter.js"
import dotenv from "dotenv"
import { db } from "./config/db.config.js"
import courseRouter from "./routes/courseRouter.js"
import lulusRouter from "./routes/lulusRouter.js"

dotenv.config()
const {PORT} = process.env

const app = express()

db.on('error', err => {
    console.error(err);
})
db.once('open', ()=>{
    console.log('Database Connected');
})

app.use(cors())
app.use(express.json())
// app.use('/', (req, res)=>{
//     res.send({code:200, message:"App is Running"})
// })
app.use('/product', productRouter)
app.use('/course', courseRouter)
app.use('/lulus', lulusRouter)

app.listen(PORT, () => {
    console.log(`Server run on ${PORT}`);
})

export default app