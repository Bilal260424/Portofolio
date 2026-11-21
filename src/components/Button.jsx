import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold transition-colors duration-200";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-700",
  secondary: "border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
  light: "bg-white text-navy hover:bg-mist",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
};

const MotionLink = motion.create(Link);

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 24 },
};

/**
 * Tombol serbaguna:
 *  - `to`    -> tautan internal (react-router)
 *  - `href`  -> tautan eksternal / unduhan / mailto
 *  - lainnya -> <button>
 */
export default function Button({ variant = "primary", to, state, href, download, external, onClick, children, className = "", ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <MotionLink to={to} state={state} onClick={onClick} className={cls} {...motionProps} {...rest}>
        {children}
      </MotionLink>
    );
  }
  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        onClick={onClick}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type="button" onClick={onClick} className={cls} {...motionProps} {...rest}>
      {children}
    </motion.button>
  );
}
