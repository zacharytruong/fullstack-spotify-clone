/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const allCookies = req.cookies.getAll();
    const traxCookies = allCookies.find(
      (cookie) => cookie.name === 'TRAX_ACCESS_TOKEN'
    );
    if (!traxCookies) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  }
}
