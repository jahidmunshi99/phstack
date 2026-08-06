import { NextResponse } from "next/server";
import connectMongo from "../../dbConnect/connectMongo";
import mongoDB from "../../lib/mongodb";

export async function GET() {
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
}

// Post Data to MongoDB

export async function POST(request) {
  try {
    await mongoDB();

    const body = await request.json();

    const rehabilitation = await RehabilitationsModel.create(body);

    return NextResponse.json({
      success: true,
      rehabilitation,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
