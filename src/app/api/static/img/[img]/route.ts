import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { img: string } }
) {
  const img = params.img;
  const filePath = path.join(process.cwd(), "public/statics", img);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: "Image not found." }, { status: 404 });
  }
  const fileContent = fs.readFileSync(filePath);
  return new NextResponse(fileContent, {
    headers: {},
    status: 200,
  });
}
