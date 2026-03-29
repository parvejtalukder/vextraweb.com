import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const LenisWrapper = ({ children }) => {
  useEffect(() => {

    const lenis = new Lenis({
      duration: 0.3,
      easing: (t) => t,
      smooth: true,
      lerp: 0.1,
      anchors: true,
      wrapper: window,
      content: document.body,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return children;
};