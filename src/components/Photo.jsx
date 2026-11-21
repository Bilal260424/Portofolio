import { useState } from "react";
import { asset } from "../lib/asset";

/**
 * Foto dengan placeholder otomatis.
 * Jika file gambar belum ada, tampil blok placeholder berwarna navy
 * dengan proporsi yang sama, sehingga layout tidak bergeser saat foto diganti.
 */
export default function Photo({
  src,
  alt,
  ratio = "4 / 5",
  label = "Foto belum ditambahkan",
  eager = false,
  className = "",
  imgClassName = "",
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-navy-700 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <img
          src={asset(src)}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-navy-600 to-navy-900 px-4 text-center text-white/70"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="9" cy="11" r="1.8" />
            <path d="m4 18 5-5 4 4 3-3 4 4" />
          </svg>
          <span className="text-xs font-medium leading-snug">{label}</span>
        </div>
      )}
    </div>
  );
}
