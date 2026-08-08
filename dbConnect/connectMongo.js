import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const cached = {};

async function connectMongo() {
  if (!MONGO_URI) {
    throw new Error("Please define MONGO_URI inside .env.local");
  }

  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
    cached.promise = undefined;
    throw error;
  }

  return cached.connection;
}

export default connectMongo;
