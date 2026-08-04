"use server";
import connectMongo from "../../dbConnect/connectMongo.js";
import RehabilitationsModel from "../../models/rehabilitationsModel.js";

export const getRehabilitations = async () => {
  try {
    await connectMongo();
    const rehabilitations = await RehabilitationsModel.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(rehabilitations));
    return res;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
