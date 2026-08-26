import { useEffect, useRef, useState } from "react";

/**
 * useCountUp: animates a number from 0 to `target` when scrolled into view.
 * Returns [ref, value]; attach `ref` to the element to observe.
 */
export const useCountUp = (target, { duration = 1800, decimals = 0 } = {}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(
                decimals
                  ? Math.round(target * eased * 10) / 10
                  : Math.round(target * eased)
              );
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return [ref, value];
};