"use server";
import connectMongo from "../../dbConnect/connectMongo.js";
import PostModel from "../../models/Post.js";

export const getPost = async () => {
  try {
    await connectMongo();
    const posts = await PostModel.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(posts));
    return res;
  } catch (error) {
    console.log("this error from get Post actions", error);
  }
};
