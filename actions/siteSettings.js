import connectMongo from "../dbConnect/connectMongo.js";
import SiteSettings from "../models/SiteSettings.js";
export const GetSiteSettings = async () => {
  try {
    await connectMongo();

    const data = await SiteSettings.findOne().lean();
    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (error) {
    console.log(error);
  }
};
