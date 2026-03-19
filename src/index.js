//----------------------1st approcach(PROfessional)-----------------------
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectdb from "./db/index.js";

connectdb()
//config is a method that takes object where we have to write the path
dotenv.config({
    path:'/env'
})













/*    --------2nd approach for connection of database with backend code----------

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectdb from "./db";

//express se jo app.js (ko initialize krlete he) jo express se bnte he 
import express from "express";
const app=express()
// (async()=>{}) -->callback function 

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        //after succesffuly connected with db -->add a event listener by using onkeywords


        //-------error event that shows k db tu connect hogya he but kya pta express app baat nhi kr pa rhi---
        app.on("errorrr:",(error)=>{
            console.log("Error: application not able to talk to express app",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`APP is listening on the port: ${process.env.PORT}`)
        })
    }catch(error){
        console.error("Error: ",error)
        throw error
    }
})
*/


//--------1st approcach(PROfessional-------
