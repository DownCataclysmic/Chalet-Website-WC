import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useScrollMemory = (): void => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollPosition(window.scrollY);
    };

    const handleRouteChange = (): void => {
      window.removeEventListener('scroll', handleScroll);
    };

    const handleRouteComplete = (): void => {
      window.scrollTo(0, scrollPosition);
      window.addEventListener('scroll', handleScroll);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);
    router.events.on('routeChangeError', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
      router.events.off('routeChangeError', handleRouteComplete);
    };
  }, [router, scrollPosition]);
};

export default useScrollMemory;