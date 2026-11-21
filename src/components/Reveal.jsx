import { motion, useReducedMotion } from "framer-motion";

/** Fade-in + slide-up halus saat elemen masuk viewport (sekali saja). */
export default function Reveal({ children, delay = 0, y = 16, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Container + item untuk animasi bertahap (stagger). */
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
