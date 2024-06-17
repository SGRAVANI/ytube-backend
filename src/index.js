import express from "express"
let app=express()
import dotenv from "dotenv"
dotenv.config()
app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})
let PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server is listenning at port",PORT)
})