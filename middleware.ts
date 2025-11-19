import { NextRequest, NextResponse } from "next/server";
import { createOryMiddleware } from "@ory/nextjs/middleware";

import oryConfig from "@/ory.config";
import ory from "@/lib/ory";

const oryMiddleware = createOryMiddleware(oryConfig);

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const isAuthenticated = await ory
    .toSession({ cookie: request.headers.get("cookie") || "" })
    .then((session) => {
      return true;
    })
    .catch(() => false);

  // Redirect authenticated users away from login
  if (isAuthenticated && nextUrl.pathname.startsWith("/auth/login")) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl.origin));
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl.origin));
  }

  return oryMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
