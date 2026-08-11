// import connectMongo from "../../dbConnect/connectMongo.js";

export const getRehabilitations = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/rehabilitations");
    const response = await req.json();
    return response.data;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
