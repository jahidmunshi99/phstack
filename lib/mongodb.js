import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(MONGODB_URI);
};

export const GetRehabilitationData = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error("Error fetching rehabilitation data:", error);
    throw error;
  }

  const data = await mongoose.connection.db
    .collection("rehabilitations") // your collection name
    .find({})
    .toArray();

  return data;
};
