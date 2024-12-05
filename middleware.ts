import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token) return NextResponse.redirect(new URL("/login", request.url));
  console.log(token);
  return token.isAdmin
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/explore/rooms", request.url));
}

export const config = {
    matcher : ["/admin/:path*"]
}