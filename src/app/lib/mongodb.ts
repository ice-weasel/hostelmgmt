import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (mongoUri === undefined) {
      console.error("MONGODB_URI is not defined in the environment variables.");
      return;
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoUri);
      console.log("db connected");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
