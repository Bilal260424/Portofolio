import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, site } from "../data/site";
import { asset, scrollToId } from "../lib/asset";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");
  const [scrolled, setScrolled] = useState(false);

  // Bayangan tipis setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menandai menu aktif sesuai section yang sedang dilihat
  useEffect(() => {
    if (!isHome) return;
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNav = (e, id) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      scrollToId(id);
    }
  };

  const linkBase = "rounded-md px-2.5 py-2 text-sm font-medium transition-colors";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_0_#E9EDF2]" : ""
      }`}
    >
      <a
        href="#konten-utama"
        onClick={(e) => {
          e.preventDefault();
          scrollToId(isHome ? "beranda" : "konten-utama");
        }}
        className="absolute left-4 top-2 -translate-y-20 rounded bg-navy px-4 py-2 text-sm text-white focus:translate-y-0"
      >
        Lompat ke konten
      </a>

      <nav aria-label="Navigasi utama" className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          state={{ scrollTo: "beranda" }}
          onClick={(e) => handleNav(e, "beranda")}
          className="font-heading text-xl font-extrabold tracking-tight text-navy"
          aria-label="BILAL. – ke beranda"
        >
          BILAL.
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.slice(1).map((n) => {
            const current = isHome && active === n.id;
            return (
              <li key={n.id}>
                <Link
                  to="/"
                  state={{ scrollTo: n.id }}
                  onClick={(e) => handleNav(e, n.id)}
                  aria-current={current ? "location" : undefined}
                  className={`${linkBase} ${
                    current ? "text-navy underline decoration-2 underline-offset-8" : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <a
              href={asset(site.cv)}
              download
              className="rounded-full border border-navy/25 px-4 py-2 font-heading text-sm font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              Unduh CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md xl:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-mist xl:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <Link
                    to="/"
                    state={{ scrollTo: n.id }}
                    onClick={(e) => handleNav(e, n.id)}
                    className="block border-b border-mist/70 py-3.5 font-heading text-base font-semibold text-navy"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <a
                  href={asset(site.cv)}
                  download
                  className="inline-flex rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-white"
                >
                  Unduh CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
