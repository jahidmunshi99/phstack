import { NextResponse } from "next/server";
// import mongoDB from "../../../lib/mongodb";
import connectMongo from "../../../dbConnect/connectMongo.js";
import RehabilitationsModel from "../../../models/rehabilitationsModel.js";

export async function GET() {
  try {
    await connectMongo();
    // await mongoDB();
    const rehabilitations = await RehabilitationsModel.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(rehabilitations));
    return NextResponse.json({
      success: true,
      data: rehabilitations,
    });
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
}

// export async function GET() {
//   return Response.json({
//     projectName: "Next.js",
//   });
// }

// Post Data to MongoDB

export async function POST(request) {
  try {
    await connectMongo();

    const body = await request.json();

    console.log("Received body:", body);
    console.log("Body type:", typeof body);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body must be an object",
        },
        { status: 400 }
      );
    }

    const rehabilitation = await RehabilitationsModel.create(body);

    return NextResponse.json(
      {
        success: true,
        data: rehabilitation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST rehabilitation error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
