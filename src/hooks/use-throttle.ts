
'use client';

import { useRef, useEffect, useCallback } from 'react';

// A custom hook to throttle a function call.
// It ensures that the function is not called more than once in a given time interval.
export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  const lastCall = useRef(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  // When the component unmounts, we need to clear any pending timeout.
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = new Date().getTime();
      const remainingTime = delay - (now - lastCall.current);

      // If the time since the last call is greater than the delay,
      // we can execute the callback immediately.
      if (remainingTime <= 0) {
        lastCall.current = now;
        callback(...args);
      } else if (!timeout.current) {
        // Otherwise, we set a timeout to execute the callback after the remaining time.
        // This ensures that even the last scroll event gets registered after the user stops.
        timeout.current = setTimeout(() => {
          lastCall.current = new Date().getTime();
          timeout.current = null;
          callback(...args);
        }, remainingTime);
      }
    },
    [callback, delay]
  );

  return throttledCallback as T;
}
