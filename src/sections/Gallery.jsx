import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Photo from "../components/Photo";
import { gallery, galleryCategories } from "../data/gallery";

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        autoFocus
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy"
        aria-label="Tutup pratinjau foto"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Photo src={item.src} alt={item.alt} ratio={item.ratio} label={item.label} eager className="max-h-[80svh] w-full" />
        <p className="mt-3 text-center text-sm text-white/75">{item.category}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("Semua");
  const [selected, setSelected] = useState(null);
  const reduce = useReducedMotion();

  const items = filter === "Semua" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section id="dokumentasi" aria-labelledby="judul-dokumentasi" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="judul-dokumentasi"
          title="Dokumentasi"
          lead="Potret kegiatan dan perjalanan organisasi. Pilih kategori untuk menyaring foto."
        />

        <div role="group" aria-label="Filter kategori foto" className="mt-10 flex flex-wrap gap-2">
          {galleryCategories.map((c) => {
            const on = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 font-heading text-sm font-semibold transition-colors ${
                  on ? "border-navy bg-navy text-white" : "border-navy/20 text-navy/70 hover:border-navy hover:text-navy"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Menampilkan {items.length} foto
        </p>

        <motion.ul
          key={filter}
          className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          {items.map((g) => (
            <li key={g.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setSelected(g)}
                className="group relative block w-full overflow-hidden text-left"
                aria-label={`Perbesar foto: ${g.alt}`}
              >
                <Photo
                  src={g.src}
                  alt={g.alt}
                  ratio={g.ratio}
                  label={g.label}
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/80 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {g.category}
                </span>
              </button>
            </li>
          ))}
        </motion.ul>
      </div>

      <AnimatePresence>{selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
