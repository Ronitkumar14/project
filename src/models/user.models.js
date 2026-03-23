import mongoose, { Schema } from "mongoose";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new Schema({
  username: {
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    //kisi bhi field ko searchable bnaana he tu usko index:true krdu!-->like username database ki searching ma aajae!(searching field enable krni he tu uska index true krdu!)
    index:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  fullName:{
    type:String,
    required:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String, //cloundary url
    required:true, 

  },
  coverImage:{
    type:String, //cloundary url
  },
  watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
  ],
  password:{
    type:String,
    required:[true,'Password is required']
  },
  refreshToken:{
    type:String,

  }
},{timestamps:true}
);

//-------------------------PRE_Middleware---------------------------- 
//jab data save hone se phle mojhe kuch kaam krwana he( like password encrypt krwana he) tu uske liye hum pre-middleware use krte he!!!!
// 2nd argument ma callback function nhi pass kr skte because this keyword kbhi bhi hum use nhi krskte callback ma!!
// for encryption it may takes a lot of time thats why we use async keyword with it!
userSchema.pre("save",async function(next){
  //jab bhi mera pora field save ho rha ho tu us maine se password field ko lo or encrypt krke save krdu

    if(!this.isModified("password")) return next() //agr pass modified nhi hoa tu pre-middlware use nh kro
  
    //bcrypt--> 1st arguement k kya hash krna he!
    //bcrypt--> 2nd arguement k  kitne rounds lagao!!


    //agr password modified hoa he tu password change krdu
    this.password=bcrypt.hash(this.password,10) 
    //after upper line means encrypt hogya!! tu next krdu
    next()
})


//custom method ap khud bna skte ho or apne schema ma daal skte ho!!
userSchema.methods.isPasswordCorrect= async function(password){
  //compare(data: string | Buffer, encrypted: string)
  //this.password-->encrypted wala
  //return value true(password compare hoghe same milegya) hogi ya false
  return await bcrypt.compare(password,this.password)
}

//custom method to access generate token and refresh token-->both are the jwt tokens
userSchema.methods.generateAccessToken=function(){
  //sign method that used to generate token-->(syntax-->payload means k ap kon kon si information jo he wo rkho)----payload: string | Buffer | object,
    return jwt.sign({
      //payload method hamara already database ma store he or access he db ma this ke through 
      //peyload ki key he: database se aa rhi he
      _id: this._id,
      email:this.email,
      username:this.username,
      fullName:this.fullName 
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken=function(){
  return jwt.sign({
      
      _id: this._id,
      //information kaam hoti he kyuki sirf wo refresh he krega! tu uske liye sirf id he chaiye
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      <expiresIn:process className="env REFRESH_TOKEN_EXPIRY"></expiresIn:process>
    }
  )
}

export const User = mongoose.model("User", userSchema);
