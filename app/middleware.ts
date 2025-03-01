import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('calling middleware')
  return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = {
  matcher: '/home'
}
