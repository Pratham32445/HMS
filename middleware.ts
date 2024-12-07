import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const isAuthenticated = (request: string) => {
  const protectedPaths = ["/login", "/signup"];
  return protectedPaths.includes(request);
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token) {
    if (request.nextUrl.pathname == "/login") return NextResponse.next();
      return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isAuthenticated(request.nextUrl.pathname))
    return NextResponse.redirect(new URL("/", request.url));
  return token.isAdmin
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/explore/rooms", request.url));
}

export const config = {
  matcher: ["/login", "/signup", "/admin/:path*"],
};
