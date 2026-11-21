import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { about } from "../data/site";

export default function About() {
  return (
    <section id="tentang" aria-labelledby="judul-tentang" className="section-y bg-mist">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading id="judul-tentang" title="Tentang saya" lead={about.lead} />
        </div>

        <dl className="divide-y divide-navy/15 border-y border-navy/15">
          {about.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05} className="grid gap-2 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <dt className="font-heading text-base font-bold text-navy">{b.title}</dt>
              <dd className="max-w-prose text-[0.95rem] leading-relaxed text-navy/75">{b.text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
