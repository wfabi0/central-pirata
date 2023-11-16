import AuthServices from "@/modules/auth/services/auth-services";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const isAutenticated = await AuthServices.isSessionValid();
  return NextResponse.json(
    {
      message: isAutenticated ? "Authenticated" : "Not authenticated",
    },
    { status: isAutenticated ? 200 : 401 }
  );
}
