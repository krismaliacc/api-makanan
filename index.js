import  express  from "express";
import "dotenv/config"
const app = express()
app.get("/",(request,response) =>{
    response.send("hello Yolanda")
})
const port = process.env.PORT
app.listen(port,() => {
    console.log(`aplikasi berjalan di port : ${port}`)
})