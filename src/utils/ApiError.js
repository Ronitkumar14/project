//apierror class extends/inherit kr rhi he basic class Error ko 
class ApiError extends Error{
    constructor(
        //jo constructor ko use krega wo mojhe ik statuscode dega,message
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        //inside curly bracket means k ap override kr rhe ho constrcutor ko! 
        //like yahan pr message ko override krna he
        super(message)
        //status code ko override kr rha ho mere status code se
        this.statusCode=statusCode
        this.data=null
        //message ko bhi override kr rhe!
        this.message=message
        //success code nhi jeega kyuki kyuki hum apierrors ko handle kr rhe nh ki api reponse ko
        this.success=false
        this.errors=errors


        if(stack){
            this.stack=stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export  {ApiError} 