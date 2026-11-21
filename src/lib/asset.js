// Mengubah path relatif (mis. "images/profile.jpg") menjadi URL yang benar di semua hosting.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  // pindahkan fokus agar pengguna keyboard / pembaca layar ikut berpindah
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
