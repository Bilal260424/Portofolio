import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button";
import Photo from "../components/Photo";
import { scrollToId } from "../lib/asset";
import { site } from "../data/site";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (i) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease },
        };

  return (
    <section id="beranda" aria-labelledby="judul-beranda" className="relative overflow-hidden">
      <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div>
          <motion.h1
            id="judul-beranda"
            {...item(0)}
            className="text-[2.75rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Halo, saya Bilal.
          </motion.h1>

          <motion.p
            {...item(1)}
            className="mt-7 max-w-xl font-heading text-lg font-semibold leading-snug text-navy sm:text-xl"
          >
            Mahasiswa Manajemen Agribisnis yang tertarik pada kepemimpinan, pengembangan organisasi, dan manajemen proyek.
          </motion.p>

          <motion.p {...item(2)} className="mt-5 max-w-lg text-base leading-relaxed text-navy/70">
            Saya belajar di IPB University, Bogor, dan aktif memimpin organisasi serta kepanitiaan kegiatan kampus.
            Situs ini merangkum pengalaman, proyek, dan pencapaian saya.
          </motion.p>

          <motion.div {...item(3)} className="mt-9 flex flex-wrap gap-3">
            <Button onClick={() => scrollToId("proyek")}>Lihat proyek</Button>
            <Button variant="secondary" onClick={() => scrollToId("kontak")}>
              Hubungi saya
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* blok navy di belakang foto: satu-satunya "momen" visual utama */}
          <div className="absolute -bottom-5 -right-5 h-full w-full bg-navy sm:-bottom-6 sm:-right-6" aria-hidden="true" />
          <div className="relative">
            <Photo
              src={site.profilePhoto}
              alt={`Foto profil ${site.name}`}
              ratio="4 / 5"
              label="Foto profil: tambahkan di public/images/profile.jpg"
              eager
            />
            <div className="absolute -left-0 bottom-0 bg-white px-5 py-3.5">
              <p className="font-heading text-sm font-bold leading-tight text-navy">{site.name}</p>
              <p className="mt-0.5 text-xs text-navy/60">{site.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
