"use server";

import connectMongo from "../../dbConnect/connectMongo";
import User from "../../models/User";

export const addUser = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const userData = {
    email,
    password,
  };

  try {
    await connectMongo();
    //insert users database
    await new User(userData).save();
  } catch (error) {
    console.log(error);
  }
};
