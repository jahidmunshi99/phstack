import { NextResponse } from "next/server";
import connectMongo from "../../dbConnect/connectMongo.js";
import RehabilitationsModel from "../../models/rehabilitationsModel";

// export async function GET() {
//   try {
//     await connectMongo();

//     const rehabilitations = await RehabilitationsModel.find().sort({
//       createdAt: -1,
//     });

//     return NextResponse.json({
//       success: true,
//       data: rehabilitations,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   return NextResponse.json({
//     success: true,
//     message: "API is working",
//   });
// }

// export async function GET() {
//   try {
//     await connectMongo();
//     const rehabilitations = await RehabilitationsModel.find().sort({
//       createdOn: -1,
//     });
//     const res = JSON.parse(JSON.stringify(rehabilitations));
//     return res;
//   } catch (error) {
//     console.log("this error from get faq actions", error);
//   }
// }

export const dynamic = "force-static";

export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

// Post Data to MongoDB
export async function POST(request) {
  try {
    await connectMongo();

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
      { status: 500 }
    );
  }
}
