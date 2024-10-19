import { NextRequest, NextResponse } from "next/server";
import { ReducerInitialType } from "@/utils/types";
import { controllerWrapper } from "@/utils/serverHelpers";
import { sender } from "@/lib/email";

export const POST = controllerWrapper(async (req: NextRequest) => {
   const { name, email, message }: ReducerInitialType = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "bad request! please provide all fields" },
        { status: 400 }
      );
    }
    const data = await sender({name, email, message});

    return NextResponse.json(data);
});

export const GET = async (req: NextRequest) => {
  return Response.json({ status: "success" });
};
