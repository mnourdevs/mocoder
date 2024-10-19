import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";
import { CustomAPIError } from "./utils/serverHelpers";
import { CustomAPIErrorProps } from "./utils/types";

export const errorMiddleware = (err: Error, req: NextRequest, ) => {
  const errorObj: CustomAPIErrorProps = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  };

  if (err instanceof CustomAPIError) {
    errorObj.message = err.message;
    errorObj.statusCode = err.statusCode;
  }
  return NextResponse.json(
    { message: errorObj.message },
    { status: errorObj.statusCode }
  );
};
