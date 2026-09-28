import { NextResponse } from "next/server";
import usersList from "../../../../data/authData";

export async function GET() {
  const data = await usersList;

  if (!data) {
    return NextResponse.json({
      status: 404,
      message: "No users found",
    });
  }

  return NextResponse.json({
    status: 200,
    message: "auth data fetched sucessfully",
    data,
  });
}

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    //fetch data from db
    const usersData = await usersList;

    // find user
    const user = usersData.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        message: "Login successful",
        data: {
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      },
    );
  }
}
