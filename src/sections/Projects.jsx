import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { staggerContainer, staggerItem } from "../components/Reveal";
import Photo from "../components/Photo";
import { projects } from "../data/projects";

function ProjectCard({ project }) {
  return (
    <motion.li variants={staggerItem} className="h-full">
      <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 24 }} className="h-full">
        <Link
          to={`/proyek/${project.slug}`}
          className="group flex h-full flex-col border border-mist-400 bg-white transition-colors hover:border-navy"
        >
          <div className="overflow-hidden">
            <Photo
              src={`images/projects/${project.slug}/cover.jpg`}
              alt={`Sampul proyek ${project.title}`}
              ratio="16 / 10"
              label={project.title}
              imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <p className="text-sm text-navy/55">{project.category}</p>
            <h3 className="mt-2 text-xl font-bold leading-snug sm:text-[1.4rem]">{project.title}</h3>
            <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy/70">{project.summary}</p>
            <p className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy">
              Lihat detail proyek
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </p>
          </div>
        </Link>
      </motion.div>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section id="proyek" aria-labelledby="judul-proyek" className="section-y">
      <div className="container-page">
        <SectionHeading
          id="judul-proyek"
          title="Proyek pilihan"
          lead="Empat proyek yang paling mewakili pengalaman saya. Buka setiap kartu untuk melihat detailnya."
        />

        <motion.ul
          className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
