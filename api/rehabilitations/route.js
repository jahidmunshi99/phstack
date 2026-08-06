import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db("drms");

    const rehabilitations = await db
      .collection("rehabilitations")
      .find({})
      .toArray();

    return NextResponse.json(rehabilitations);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
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
