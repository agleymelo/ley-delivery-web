import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("@ley-delivery-web:token")?.value

  const signIn = new URL("/auth/sign-in", request.url)

  if (!token) {
    if (request.nextUrl.pathname === "/auth/sign-in") {
      return NextResponse.next()
    }

    return NextResponse.redirect(signIn)
  }

  try {
    await fetch(`${request.nextUrl.origin}/api/get-profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      cache: "no-cache"
    })
  } catch (err) {
    return NextResponse.redirect(signIn)
  }
} 

export const config = {
  matcher: ["/profile", "/orders/:path*"]
}