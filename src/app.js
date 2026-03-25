import express from "express"
const app=express()
import cors from "cors"
//user ki cookies ko access krpao or set kr pao or basically uski cookies pr main crud operation bhi perform kr paokyuki kuch tareeke hote jis se secur cookies browser pr rkh skte he server can read !!
import cookieParser from "cookie-parser" 

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true 
})
)
//json ki format ma jo data aha uski maine limit rkh de he like 16kb!
app.use(express.json({limit:"16kb"}))

//i search ronit kumar--->in url ronit%20 kumar (so yeh sabh bhi tu url ko btna pdta he! so i must have to config it through using the keyword that is (urlencoded)
app.use(express.urlencoded({
    //extended ka mtlab he k ap object ke andr bhi object de skte ho!
    extended:true,limit:"16kb"
}))

//agr mojhe kisi image ya favicon hogya tu wo main kis folder ma rkho uske liye static word
app.use(express.static("public"))

app.use(cookieParser())



//routes import
//----------------------note point--------------------
//userRouter ka name maine apni mrzi se deya he or wo possible hota he jab aap user.routes.js ka default tareeke se export kro!!!! (export default router) 

//agr same name pass kr rhe ho function ka different files ke andr tu usko default export  nhi krna hoga ----> user routes.js -->import { registerUser } from "../controllers/user.controller.js";

//usercontroller.js--->export (not use of default here) {registerUser}

//----------------------note point end--------------------
import userRouter from './routes/user.routes.js'

//routes declaration
// '/users' is kindoff prefix url-->http://localhost:8000/users/register
// /user se control jaega userroutes.js wo dekhega k apne /register likha he ya nhi?


// app.use("/users",userRouter)
//----OR(standard practice)------

app.use("/api/v1/users",userRouter)
//http://localhost:8000api/v1/users/register

export {app}