import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth/auth';

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const response = NextResponse.next();

  const { pathname, searchParams } = request.nextUrl;

  if (searchParams.get('auth') === 'success') {
    response.cookies.set('post-auth-toast', 'sign-in-success', {
      path: '/',
      maxAge: 10,
      sameSite: 'lax',
    });
  }

  const isAuthPage = pathname === '/sign-in';

  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL('sign-in', request.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL('/poke', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/sign-in', '/poke/:path*'],
};
