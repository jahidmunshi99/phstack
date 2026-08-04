"use server";

import connectMongo from "../../dbConnect/connectMongo";
import HomepageSection from "../../models/HomePageSection";

export const getHomePageSections = async () => {
  try {
    await connectMongo();
    const homepage_sec = await HomepageSection.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(homepage_sec));
    return res;
  } catch (error) {
    console.log(error);
  }
};
