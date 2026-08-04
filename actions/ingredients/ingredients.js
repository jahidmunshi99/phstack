"use server";
import connectMongo from "../../dbConnect/connectMongo.js";
import IngredientsModel from "../../models/ingredientsModel.js";

export const getIngredients = async () => {
  try {
    await connectMongo();
    const ingredients = await IngredientsModel.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(ingredients));
    return res;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
