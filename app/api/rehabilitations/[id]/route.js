import connectMongo from "@/lib/connectMongo";
import RehabilitationsModel from "@/models/RehabilitationsModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await connectMongo();

    const { id } = await params;
    const body = await request.json();

    console.log("Update ID:", id);
    console.log("Received body:", body);

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body must be an object",
        },
        { status: 400 },
      );
    }

    const rehabilitation = await RehabilitationsModel.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!rehabilitation) {
      return NextResponse.json(
        {
          success: false,
          message: "Rehabilitation not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: rehabilitation,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("PUT rehabilitation error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
