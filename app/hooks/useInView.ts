import { useCallback, useRef, useState } from "react";

/**
 * Returns a [callbackRef, inView] tuple.
 * Using a callback ref avoids the RefObject<T | null> type mismatch
 * introduced in @types/react >= 18.3.
 *
 * Once the element enters the viewport, `inView` stays `true`.
 */
export function useInView(
  threshold = 0.15
): [(node: HTMLDivElement | null) => void, boolean] {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [inView, setInView] = useState(false);

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      // Disconnect any previous observer
      observerRef.current?.disconnect();

      if (!node) return;

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Once visible, no need to keep observing
            observerRef.current?.disconnect();
          }
        },
        { threshold }
      );

      observerRef.current.observe(node);
    },
    [threshold]
  );

  return [ref, inView];
}