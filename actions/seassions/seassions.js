import connectMongo from "../../dbConnect/connectMongo.js";
import Seassions from "../../models/seassionsModel.js";

// Fetch Data from DB
export const getSeassions = async () => {
  try {
    await connectMongo();
    const data = await Seassions.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(data));
    return res;
  } catch (error) {
    console.log(error);
  }
};
