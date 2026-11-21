import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { site } from "../data/site";
import { asset } from "../lib/asset";

export default function Contact() {
  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "LinkedIn", value: site.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: site.linkedin, external: true },
    { label: "Lokasi", value: site.location },
  ];

  return (
    <section id="kontak" aria-labelledby="judul-kontak" className="on-dark section-y bg-navy">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="judul-kontak"
            dark
            title="Mari terhubung"
            lead="Saya terbuka untuk kesempatan magang dan diskusi seputar kepemimpinan, pengembangan organisasi, dan manajemen proyek."
          />
          <Reveal delay={0.1} className="mt-9 flex flex-wrap gap-3">
            <Button variant="light" href={`mailto:${site.email}`}>
              Kirim email
            </Button>
            <Button variant="outlineLight" href={asset(site.cv)} download>
              Unduh CV
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-white/15 border-y border-white/15">
            {rows.map((r) => (
              <div key={r.label} className="grid gap-1 py-6 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-white/55">{r.label}</dt>
                <dd className="break-words font-heading text-lg font-semibold text-white">
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                    >
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
