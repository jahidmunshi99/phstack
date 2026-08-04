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
