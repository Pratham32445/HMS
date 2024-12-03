import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { client } from "@/app/client";
import { roomSchema } from "@/types";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authoptions);
    if (!session || !session.user) return;
    const { user } = session;
    const isAdmin = await client.guest.findFirst({
      where: { email: user.email! },
    });
    if (isAdmin?.accountRole != "ADMIN")
      return NextResponse.json({ messge: "forbidden" }, { status: 403 });
    const body = await req.json();
    const result = roomSchema.safeParse(body);
    if (!result.success)
      return NextResponse.json({ errors: result.error }, { status: 401 });
    const isRoomExist = await client.room.findFirst({
      where: { roomNumber: body.roomNumber },
    });
    if (isRoomExist)
      return NextResponse.json({ message: "Room already exist" });
    await client.room.create({ data: body });
    return NextResponse.json({ message: "Room Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal server error", { status: 401 });
  }
};
