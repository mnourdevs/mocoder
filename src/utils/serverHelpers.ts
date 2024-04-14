import { NextRequest, NextResponse } from "next/server";
import { HandlerProps } from "./types";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export const controllerWrapper = (fn: HandlerProps) => {
  return async (req: NextRequest) => {
    try {
      return await fn(req);
    } catch (error: any) {
      if (error.statusCode === 403) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      } else if (error.code === "EAUTH") {
        return NextResponse.json(
          { message: `invalid credentials for email stmp` },
          { status: 403 }
        );
      } else {
        console.log("unexpected error", error);
        return NextResponse.json(
          { message: "something went wrong." },
          { status: 500 }
        );
      }
    }
  };
};

export class CustomAPIError extends Error {
  public statusCode: number
  constructor(message:string, statusCode:number){
    super(message)
    this.statusCode = statusCode
  }
}

export const createCustomeError = (
  message:string = getReasonPhrase(StatusCodes.BAD_REQUEST),
  statusCode:number = StatusCodes.BAD_REQUEST
):CustomAPIError => {

  return new CustomAPIError(message, statusCode)
}
