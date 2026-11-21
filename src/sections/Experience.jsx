import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/site";

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="pengalaman" aria-labelledby="judul-pengalaman" className="on-dark section-y bg-navy">
      <div className="container-page">
        <SectionHeading
          id="judul-pengalaman"
          dark
          title="Pengalaman"
          lead="Peran kepemimpinan, kepanitiaan, dan pekerjaan yang membentuk cara saya bekerja."
        />

        <ol className="relative mt-16 max-w-3xl">
          {/* garis timeline yang "tergambar" saat di-scroll */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-white/25"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 1.4, ease }}
          />

          {experiences.map((e, i) => (
            <motion.li
              key={e.org}
              className="relative pb-12 pl-10 last:pb-0"
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.55, delay: 0.05, ease }}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[0.55rem] h-[15px] w-[15px] rounded-full border-2 border-white ${
                  i === 0 ? "bg-white" : "bg-navy"
                }`}
              />
              {e.period && <p className="mb-1 text-sm text-white/55">{e.period}</p>}
              <h3 className="!text-white text-xl font-bold leading-snug sm:text-2xl">{e.org}</h3>
              <p className="mt-1.5 text-base text-white/75">{e.role}</p>
              {e.description && (
                <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/60">{e.description}</p>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
