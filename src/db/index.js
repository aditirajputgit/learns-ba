import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connetDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongoose conncet !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error " , error);
        process.exit(1);
    }
}

export default connetDB