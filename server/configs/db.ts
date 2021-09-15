import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://phuc1492:phuc1492@cluster0.dielm.mongodb.net/GraphQL-Tutorial?retryWrites=true&w=majority`)
        console.log("🚀 MongoDB Connected!!!")
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
} 