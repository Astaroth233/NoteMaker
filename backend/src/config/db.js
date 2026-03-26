import mongoose from 'mongoose';

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected Successfully");
    }
    catch(error){
        console.log("Error Connecting to Mongo DB", error);
        process.exit(1); //exit at failure
    }
}
