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
    console.log('✅ Auth success param detected!');
    response.cookies.set('post-auth-toast', 'sign-in-success', {
      path: '/',
      maxAge: 10,
      sameSite: 'lax',
    });
  }

  const isAuthPage = pathname === '/sign-in';

  if (isAuthPage) {
    if (session) {
      // リダイレクト用のレスポンスを作成
      const redirectResponse = NextResponse.redirect(new URL('/poke', request.url));

      // 重要：?auth=success がある場合は、リダイレクト先にも Cookie を引き継がせる
      if (searchParams.get('auth') === 'success') {
        redirectResponse.headers.append(
          'Set-Cookie',
          'post-auth-toast=sign-in-success; Path=/; Max-Age=10; SameSite=Lax',
        );
      }
      return redirectResponse;
    }
    return response;
  }

  if (!session) {
    return NextResponse.redirect(new URL('sign-in', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/sign-in', '/poke', '/poke/:path*'],
};
