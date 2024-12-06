import { client } from "@/app/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { Id } = await req.json();
    const room = await client.room.findFirst({ where: { Id } });
    console.log(room);
    return NextResponse.json({ room }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Interval server error" },
      { status: 500 }
    );
  }
};
