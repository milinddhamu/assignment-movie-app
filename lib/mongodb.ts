import mongoose from "mongoose";

const connectMongoDb = async () => {
  const mongoUri = process.env.MONGO_URI || 'lol';
  try {
    await mongoose.connect(mongoUri);
    console.log("connected")
  } catch (error) {
    
    console.error(error)
  }
};

export default connectMongoDb;