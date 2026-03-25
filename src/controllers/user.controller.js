import { asynHandler } from "../utils/asyncHandler.js";
const registerUser=asynHandler(async(req,res)=>{
    //use return keyword (maybe error solve hojae but not )
     res.status(200).json({
        message:"OK"
    })
})
export  {registerUser}