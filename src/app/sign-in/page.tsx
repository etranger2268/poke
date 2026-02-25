'use client';

import Loading from '@/components/Loading';
import { authClient } from '@/lib/auth/auth-client';

export default function SignInPage() {
  const { isPending } = authClient.useSession();

  const handleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/poke?auth=success',
      });
    } catch (err) {
      console.error(err);
      throw new Error('サインインに失敗しました');
    }
  };

  if (isPending) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full px-4 py-12">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow">
        <div className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl text-gray-900 font-extrabold">Sign In</h2>
            <p className="font-medium">Sign in with Google</p>
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleLogin}
              className="inline-flex items-center justify-center p-4 border border-gray-200 rounded-full bg-white hover:bg-gray-50 hover:border-gray-300 hover:cursor-pointer hover:shadow-md transition-all duration-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 262"
              >
                <title>Google Login</title>
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center w-full border-t border-gray-300 py-4">
            <p className="text-center text-xs text-neutral-500">
              built with{' '}
              <a
                href="https://better-auth.com"
                className="underline transition-colors duration-300 hover:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                better-auth.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
