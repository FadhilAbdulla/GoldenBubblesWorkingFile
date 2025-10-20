import { NextResponse } from 'next/server'
export function middleware() {
  const response = NextResponse.next()
  // if (request.nextUrl.pathname == '/') {
  //   return NextResponse.redirect(new URL('/demos/classic-default', request.url));
  // }
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}
export { default } from 'next-auth/middleware'
