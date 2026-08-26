import { motion as Motion } from "motion/react";

/**
 * Reveal: fade + slide-up on scroll into view.
 * Wraps any content with a subtle entrance animation.
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  ...props
}) => {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px 0px -60px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

export default Reveal;