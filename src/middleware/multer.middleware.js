import multer from "multer";
//destination-->the folder to which the file  has been saved!-->(like ap disk storage dete ho!!)
//buffer------->A buffer of the entire file (Memory-storage)



//storage method jo hum as a middleware use krenge!!

//req(jo user se aa rhi he),file(file access jiske andr saare files he),cb(is callback function)
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        //cb(error handle nhi krna(1st p), konsa folder dena he jahan ap apni sarri files rkhoge(2nd p ))
        cb(null,'/public/temp')
    },
    filename:function(req,file,cb){
        // const uniqueSuffix=Date.now() + '-' + Math.round(Math.random() * 1E9)


        //jo bhi user ne upload krra tho wo he original name dedu-->(original name)
        cb(null,file.originalname)
    }
})

export const upload=multer({
    storage,
})
