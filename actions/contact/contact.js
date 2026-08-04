import connectMongo from "../../dbConnect/connectMongo.js";
import ContactMessage from "../../models/Contact";
export const getContact = async () => {
  try {
    await connectMongo();
    const reqCon = await ContactMessage.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(reqCon));
    return res;
  } catch (error) {
    console.log(error);
  }
};
