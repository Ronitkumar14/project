//----------------------1st approcach(PROfessional)-----------------------
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectdb from "./db/index.js";
import { app } from "./app.js";
//config is a method that takes object where we have to write the path(so first step is config the env varaible)
dotenv.config({
    path:'/env'
})



connectdb()
.then(()=>{
    //ab db successfully connect hogya he tu ap listen tu krna pdega n!(tabhi tu server start hoga)

    app.on("error",(error)=>{
        console.log("Err: ",error)
        throw error
    })

    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on the port: ${process.env.PORT}`)
    })
})

.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED!!! ",err)
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
