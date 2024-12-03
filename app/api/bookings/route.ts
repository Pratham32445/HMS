import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../auth/[...nextauth]/options";
import { client } from "@/app/client";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authoptions);
    if (!session || !session.user)
      return NextResponse.json({ message: "forbiddend" }, { status: 403 });
    const User = await client.guest.findFirst({
      where: { email: session.user.email! },
    });
    const body = await req.json();
    await client.bookings.create({ data: { ...body, guestId: User?.Id } });
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = () => as