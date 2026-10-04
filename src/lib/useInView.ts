import { useEffect, useRef, useState } from "react";

/**
 * Öğe görünür alanda mı? Başlangıç değeri true: ilk ölçüm gelene kadar
 * "görünür" varsayılır, böylece ona bağlı öğeler açılışta yanıp sönmez.
 */
export function useInView<T extends Element>(rootMargin = "0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
