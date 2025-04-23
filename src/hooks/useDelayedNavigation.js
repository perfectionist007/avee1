// src/hooks/useDelayedNavigation.js
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'; // ✅ This is what was missing


export const useDelayedNavigation = (delay = 500) => {
  const router = useRouter();

  const navigate = (url) => {
    window.dispatchEvent(new CustomEvent('pageTransitionStart'));

    setTimeout(() => {
      router.push(url);
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('pageTransitionEnd'));
      }, 500); // simulate transition end
    }, delay);

  };

  useEffect(() => {
    const handleComplete = () => {
      window.dispatchEvent(new CustomEvent('pageTransitionEnd'));
    };

    router.events?.on?.('routeChangeComplete', handleComplete);
    return () => {
      router.events?.off?.('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return { navigate };
};
