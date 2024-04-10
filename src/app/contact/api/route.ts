import { NextRequest, NextResponse } from "next/server";
import { ReducerInitialType } from "@/utils/types";
import { sendEmail } from "@/utils/funcs";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, message }: ReducerInitialType = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "bad request! please provide all fields" },
        { status: 400 }
      );
    }
    const data = await sendEmail({ name, email, message });

    return NextResponse.json(data);
  } catch (error: any) {
    if (error.statusCode === 403) {
      return NextResponse.json(
        { message: error.message },
        {
          status: error.statusCode,
        }
      );
    }
    return NextResponse.json(error);
  }
};

export const GET = async (req: NextRequest) => {
  return Response.json({ status: "success" });
};
