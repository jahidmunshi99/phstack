"use server";

import connectMongo from "../../dbConnect/connectMongo.js";
import WorkProcesses from "../../models/WorkProcessModel.js";

export const getWorkProcess = async () => {
  try {
    await connectMongo();
    const workprocess = await WorkProcesses.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(workprocess));
    return res;
  } catch (error) {
    console.error("Error fetching workprocess:", error);
    throw new Error("Failed to fetch workprocess");
  }
};
