import express from "express"
import mongoose from "mongoose"
// import { DB_NAME } from "./constants" 
let app=express()
import dotenv from "dotenv"
import { connectDB } from "./dbs/index.js"
dotenv.config({path:"./env"})
app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})
let PORT=process.env.PORT
// ;(async()=>{
// try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// //when express is unable to talk to db
// app.on("error",(error)=>{
//     console.log("error is =>",error)
//     throw error
// })
// app.listen(PORT,()=>{
//     console.log("server is listenning at port",PORT)
// })
// }
// catch(e)
// {
//     console.log("error",e)
//     throw e;
// }
// })();


;(async()=>{
await connectDB()
app.listen(PORT,()=>{
    console.log("listeming at port ",PORT)
})
})();


