import mongoose from "mongoose";
//database ka name---->DB_NAME
import { DB_NAME} from "../constants.js";

const connectdb=async()=>{
     try {
       const connectioninstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)


       //connectioninstance.connection.host-->pta chle ke mongodb konse host pr connect ho rha he
       console.log(`\n Mongodb connected !! DB HOST: ${connectioninstance.connection.host}`)

     } catch (error) {
        console.log("MONGODB connection FAILED: ",error)
        //process-->current application jo chal rhi he wo ik n ik process pr chal rhi he tu uska refernce humne deya  he in form of process!
        process.exit(1) //method
     }
}
export default connectdb