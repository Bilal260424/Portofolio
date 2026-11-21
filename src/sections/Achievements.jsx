import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { achievements, experiences } from "../data/site";
import { projects } from "../data/projects";

export default function Achievements() {
  const stats = [
    { value: experiences.length, label: "peran organisasi dan pekerjaan" },
    { value: projects.length, label: "proyek pilihan" },
    { value: achievements.length, label: "pencapaian" },
  ];

  return (
    <section id="pencapaian" aria-labelledby="judul-pencapaian" className="section-y bg-mist">
      <div className="container-page">
        <SectionHeading id="judul-pencapaian" title="Pencapaian" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <dl className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1 lg:gap-8">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter to={s.value} className="block font-heading text-5xl font-extrabold leading-none tracking-tight sm:text-6xl" />
                  <span className="mt-2 block text-sm leading-snug text-navy/65" aria-hidden="true">
                    {s.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>

          <ul className="divide-y divide-navy/15 border-y border-navy/15">
            {achievements.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.06} className="py-6 sm:py-7">
                <p className="font-heading text-lg font-bold leading-snug sm:text-xl">{a.title}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
