import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    if (process.env.MONGO_URI) {
      const connectInfo = await mongoose.connect(process.env.MONGO_URI);

      console.log(`MongoDB Connected: ${connectInfo.connection.host}`);
    }
  } catch (err: any) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};
