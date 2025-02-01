import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { title, description, type, content } = await req.json();
    if (!title) return new NextResponse("Title is required", { status: 400 });
    if (!type) return new NextResponse("Type is required", { status: 400 });
    if (!content)
      return new NextResponse("Content is required", { status: 400 });

    const pin = await db.pin.create({
      data: {
        title,
        description,
        type,
        content,
      },
    });
    return NextResponse.json(pin, { status: 201 });
  } catch (error) {
    console.error("POST PIN ERROR ::", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
