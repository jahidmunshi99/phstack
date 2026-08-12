import { NextResponse } from "next/server";
// import mongoDB from "../../../lib/mongodb";
import connectMongo from "../../../dbConnect/connectMongo.js";
import RehabupazilawiseModel from "../../../models/rehabupazilawiseModel.js";

export async function GET() {
  try {
    await connectMongo();
    const Rehabupazilawise = await RehabupazilawiseModel.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(Rehabupazilawise));
    return NextResponse.json({
      success: true,
      data: res,
    });
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
}
