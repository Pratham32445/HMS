import { client } from "@/app/client";
import { authSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    const result = authSchema.safeParse({ email, password });
    if (!result.success)
      return NextResponse.json(
        { Errors: result.error, type: "show Error" },
        { status: 401 }
      );
    const isUser = await client.guest.findFirst({ where: { email } });
    if (isUser)
      return NextResponse.json(
        { message: "user alreday exist", type: "toast-error" },
        { status: 401 }
      );
    await client.guest.create({ data: { email, password } });
    return NextResponse.json({ message: "Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 401 }
    );
  }
};

