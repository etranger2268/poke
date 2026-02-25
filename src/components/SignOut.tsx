'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { authClient } from '@/lib/auth/auth-client';

const SignOut = memo(() => {
  const router = useRouter();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const handleSingOut = async () => {
    setInProgress(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            Cookies.set('post-auth-toast', 'sign-out-success', {
              expires: 1 / 8640,
              path: '/',
            });
            router.push('/');
            router.refresh();
          },
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error('サインアウトに失敗しました');
    } finally {
      setInProgress(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSingOut}
      disabled={inProgress}
      className={`bg-red-500 py-2 px-5 text-white text-base font-medium rounded-full shadow-sm transition-opacity duration-300 ${inProgress ? 'disabled:opacity-50 disabled:cursor-not-allowed' : 'hover:opacity-75'}`}
    >
      Sign Out
    </button>
  );
});

export default SignOut;
