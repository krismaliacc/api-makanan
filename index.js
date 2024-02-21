import  express, { urlencoded }  from "express";
import "dotenv/config"
import {Routes} from "./src/Routes.js"
const app = express()

app.use(express.json())
app.use(urlencoded({extended:true}))
Routes(app)

const port = process.env.PORT

app.listen(port,() => {
    console.log(`aplikasi berjalan di port : ${port}`)
})