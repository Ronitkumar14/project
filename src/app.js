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


export {app}