import { client } from "@/app/client";
import { authSchema } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    console.log(email, password);
    const result = authSchema.safeParse({ email, password });
    if (!result.success) {
      const resultErrors = result.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message; // Use the field name as the key
        return acc;
      }, {} as Record<string, string>);
      return NextResponse.json(
        { Errors: resultErrors, type: "show-errors" },
        { status: 401 }
      );
    }
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
