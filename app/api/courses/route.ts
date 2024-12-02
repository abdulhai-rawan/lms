import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    if (!isTeacher(userId))
      return new NextResponse("Unauthorized", { status: 401 });

    const { title } = await req.json();

    if (!title) return new NextResponse("Title is required", { status: 400 });

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course, { status: 200 });
  } catch (err) {
    console.log("[COURSES]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
