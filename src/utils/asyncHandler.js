//middlware 

//iske andr hum method bnaye ge or export krenge jahan pr need hogi!
//two types of asynHandler that we can use-->1-trycatch   2-promises  


//-----------2-promises  ------------
const asynHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}
export {asynHandler}














//const asyncHandler=()=>{}
//const asyncHandler = (func) => () => {}   higher-order function 
//const asyncHandler = (func) => async() => {}   higher-order function with async function
//-----------1-trycatch -----------------


// const asynHandler = (fn) => async (req,res,next)=>{
//     try {
//         //jo function humne liya he --(fn) usko execute krna he by req,res,next called as wrapper function
//         await fn(req,res,next)
//     } catch (error) {
//         //agr aapke pass user pass kr rha he error code wo--> err.code wrna random 500 pass krdeya he!   uske baad json format ma
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }