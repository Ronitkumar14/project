import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
        type:String, //cloudinary url
        required:true
        
    },
    thumbnail:{
         type:String, //cloudinary url
        required:true
    },
    title:{
         type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true
    },
    duration:{
        // cloudanary jese koi file upload krleta he tu apko file ki infor: bhejta he k yeh lo url and time
        type:Number, 
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        //video publicly available  he ya nhi tu uske liye boolean 
        type:Boolean, //video show krna he ya nhi
        default:true
    },
    // videouploader ya owner ho
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
