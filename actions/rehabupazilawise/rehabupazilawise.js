// import connectMongo from "../../dbConnect/connectMongo.js";

export const getRehabupazilawise = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/rehabupazilawise");
    const response = await req.json();
    return response.data;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
