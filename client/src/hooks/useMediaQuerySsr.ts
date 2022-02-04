/**
 * TODO: Add tests
 *
 * This custom hook solves SSR hydration problem,
 * if you are using Chakra, Material, Emotion, Styled and
 * your styles are hydrated improperly, you get a warning
 * Warning: Did not expect server HTML to contain a <div> in <div>.
 * or any other element, you are probably running
 * some code that's meant to be client side only, t.e useMediaQuery
 * is one of them, cause it needs a window obj.
 *
 * Accepts query string in format lime Window.matchMedia()
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 *	EXP: '(max-width: 600px)' '(min-width: 600px)'
 */
import { useLayoutEffect, useEffect, useState, useCallback } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const useMediaQuerySSR = (queryStr: string) => {
  const [targetW, setTargetW] = useState<boolean>(false);

  const updateTarget = useCallback((e): void => {
    if (e.matches) {
      setTargetW(true);
    } else {
      setTargetW(false);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const media = window.matchMedia(queryStr);

    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetW(true);
    }
    // clean up
    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return [targetW];
};

export { useMediaQuerySSR, useIsomorphicLayoutEffect };
