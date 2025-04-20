// src/hooks/useDelayedNavigation.js
'use client';
import { useRouter } from 'next/navigation';

export const useDelayedNavigation = (delay = 500) => {
  const router = useRouter();

  const navigate = (url) => {
    const event = new CustomEvent('pageTransitionStart');
    window.dispatchEvent(event);

    setTimeout(() => {
      router.push(url);
    }, delay);
  };

  return { navigate };
};
