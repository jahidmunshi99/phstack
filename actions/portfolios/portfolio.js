"use server";

import connectMongo from "../../dbConnect/connectMongo.js";
import Portfolios from "../../models/Portfolio.js";

export const getPortfolio = async () => {
  try {
    await connectMongo();
    const portfolios = await Portfolios.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(portfolios));
    return res;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    throw new Error("Failed to fetch portfolios");
  }
};
