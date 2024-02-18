import  express  from "express";
import "dotenv/config"
import { Routes } from "./src/Routes.el.classList.add('class')";

const app = express()

Routes(app)

const port = process.env.PORT

app.listen(port,() => {
    console.log(`aplikasi berjalan di port : ${port}`)
})