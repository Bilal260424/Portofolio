import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import Photo from "../components/Photo";
import { getProject, projectSections, projects } from "../data/projects";

function BackLink() {
  return (
    <Link
      to="/"
      state={{ scrollTo: "proyek" }}
      className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy/70 transition-colors hover:text-navy"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 12H5M11 6l-6 6 6 6" />
      </svg>
      Semua project
    </Link>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.title} | BILAL. – Syayid Bilal Notro Negoro`
      : "Proyek tidak ditemukan | BILAL.";
    return () => {
      document.title = "BILAL. | Syayid Bilal Notro Negoro – Mahasiswa Manajemen Agribisnis IPB University";
    };
  }, [project]);

  if (!project) {
    return (
      <section className="container-page section-y">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Project tidak ditemukan</h1>
        <p className="mt-4 text-navy/70">Alamat project yang Anda buka tidak tersedia.</p>
        <div className="mt-8">
          <BackLink />
        </div>
      </section>
    );
  }

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="bg-mist">
        <div className="container-page py-14 sm:py-20">
          <BackLink />
          <p className="mt-10 text-sm text-navy/60">{project.category}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/75">{project.summary}</p>
          <p className="mt-8 inline-block border-l-2 border-navy pl-4 font-heading text-sm font-semibold">
            Peran: {project.role}
          </p>
        </div>
      </header>

      <div className="container-page grid gap-x-16 gap-y-2 py-16 sm:py-20 lg:grid-cols-[1fr_2fr]">
        {projectSections.map((s) => {
          const content = project[s.key];
          return (
            <Reveal
              as="section"
              key={s.key}
              className="grid gap-3 border-t border-mist-400 py-8 lg:col-span-2 lg:grid-cols-subgrid lg:gap-x-16"
            >
              <h2 className="text-xl font-bold">{s.title}</h2>
              <div className="max-w-prose space-y-4 text-[0.98rem] leading-relaxed text-navy/80">
                {content ? (
                  content.map((p) => <p key={p}>{p}</p>)
                ) : (
                  <p className="text-navy/45">Bagian ini sedang disiapkan.</p>
                )}
              </div>
            </Reveal>
          );
        })}

        <Reveal as="section" className="border-t border-mist-400 pt-8 lg:col-span-2" >
          <h2 className="text-xl font-bold">Dokumentasi</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <li key={n}>
                <Photo
                  src={`images/projects/${project.slug}/${n}.jpg`}
                  alt={`Dokumentasi ${project.title} ${n}`}
                  ratio="4 / 3"
                  label={`Dokumentasi ${n}`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <nav aria-label="Project berikutnya" className="on-dark bg-navy">
        <div className="container-page flex flex-col gap-4 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-white/60">Project berikutnya</p>
            <p className="mt-2 max-w-xl font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
              {next.title}
            </p>
          </div>
          <Link
            to={`/proyek/${next.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-navy transition-colors hover:bg-mist"
          >
            Buka Project
          </Link>
        </div>
      </nav>
    </article>
  );
}
