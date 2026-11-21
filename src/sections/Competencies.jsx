import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { competencies } from "../data/site";

export default function Competencies() {
  return (
    <section id="kompetensi" aria-labelledby="judul-kompetensi" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="judul-kompetensi"
          title="Kompetensi"
          lead="Kemampuan yang saya bangun lewat organisasi, kepanitiaan, dan pengalaman kerja."
        />

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {competencies.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <h3 className="border-t-2 border-navy pt-5 text-xl font-bold leading-snug">{c.title}</h3>
              <ul className="mt-5 divide-y divide-mist-400/70">
                {c.items.map((item) => (
                  <li key={item} className="py-3 text-[0.95rem] leading-snug text-navy/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
