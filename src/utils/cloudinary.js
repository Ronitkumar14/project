import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
//fs ik file system he that help in read,write,update and delete(file ko open ya close krna he)
//unlink ka mtlab he k jab koi aap file delte krte ho tu wo filesystem se unlink hojaeti he


//configuration that allows files for uploading

cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//through cloudinary maine file upload krde!!!!
const uploadOnCloudinary=async (localFilePath)=>{
    try {
        //check tu krna pdega n k local path he ya nhi he! tu uske liye if condition
        if(!localFilePath) return null
        //upload the file on cloudinary
        //1st arguement as filepath
        //2nd arguement as upload option {}
        //await --> because it may takes a time for uploading
        const response=await cloudinary.uploader.upload(localFilePath, {
            //auto ka mtlab he k khud detect krlo k kya aa rha parameter ma!!
            resource_type:"auto"
        })
        // file has been uploaded successfully!
        //upload hone ke baad jp url he wo hume miljaye--------->response.url
        console.log("File is uploaded on cloudinary",response.url)
        return response //whole reponse humne user ko return krdeya
    } catch (error) {
        //localpath ke andr koi mistake hoi he ya file upload nhi hoi he tu error aaega(but but file server pr tu  he kyuki localpath tu aa chuka he!! tu uske baad file ko remove krdena choiye apne server se)
          fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation failed!
          return null
    }
}

// cloudinary.v2.uploader
// .upload("dog.mp4", {
//   resource_type: "video", 
//   public_id: "my_dog",
//   overwrite: true, 
//   notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));


export {uploadOnCloudinary}