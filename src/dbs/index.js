import mongoose, { mongo } from "mongoose"
import { DB_NAME } from "../constants.js"
import dotenv from "dotenv"
import express from "express"
let app=express()
dotenv.config()
export const connectDB=async()=>{
    try{
  const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  console.log("Connected",connectionInstance.connection.host)
   app.on("error",(error)=>{
    console.log("error",error)
    throw error
   })
    }
    catch(e)
    {
   console.log("Mongo db connection error",e)
   process.exit(1)
    }
}
