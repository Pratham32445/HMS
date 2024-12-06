import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { client } from "@/app/client";
import { roomSchema } from "@/types";

async function isUserAdmin() {
  const session = await getServerSession(authoptions);
  if (!session || !session.user)
    return NextResponse.json({ message: "user not exist" }, { status: 401 });
  const { user } = session;
  const isAdmin = await client.guest.findFirst({
    where: { email: user.email! },
  });
  return isAdmin?.accountRole;
}

export const POST = async (req: NextRequest) => {
  try {
    // if ((await isUserAdmin()) != "ADMIN")
    //   return NextResponse.json({ messge: "forbidden" }, { status: 403 });
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

export const GET = async () => {
  try {
    const rooms = await client.room.findMany({});
    return NextResponse.json({ rooms }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Interval server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { Id } = await req.json();
    await client.room.delete({ where: { Id } });
    return NextResponse.json({ message: "Deleted" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "some error occured" },
      { status: 501 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    await client.room.update({ where: { Id: body.Id }, data: body });
    return NextResponse.json({ message: "room Updated" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Interval server error" },
      { status: 501 }
    );
  }
};
