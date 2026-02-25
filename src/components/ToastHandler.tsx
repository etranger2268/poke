'use client';

import Cookies from 'js-cookie';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

const ToastHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams.toString();

  useEffect(() => {
    const message = Cookies.get('post-auth-toast');
    if (message === 'sign-out-success') {
      toast.success('Sign Out successful');
    } else if (message === 'sign-in-success') {
      toast.success('Sign In successful');
    }

    Cookies.remove('post-auth-toast', { path: '/' });

    if (searchParams.get('auth') === 'success') {
      const params = new URLSearchParams(searchString);
      params.delete('auth');
      const query = params.toString() ? `${params.toString()}` : '';
      window.history.replaceState(null, '', `${pathname}${query}`);
    }
  }, [pathname, searchParams.get, searchString]);

  return null;
};

export default ToastHandler;
