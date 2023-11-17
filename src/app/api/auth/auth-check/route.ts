import AuthServices from "@/modules/auth/services/auth-services";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const isAuthenticated = await AuthServices.isSessionValid();
  return NextResponse.json(
    {
      message: isAuthenticated ? "Authenticated" : "Not authenticated",
    },
    { status: isAuthenticated ? 200 : 401 }
  );
}
