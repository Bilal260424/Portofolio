import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-navy-900 text-white/60">
      <div className="container-page flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-base font-extrabold tracking-tight text-white">BILAL.</p>
        <p>
          © {new Date().getFullYear()} {site.name}. {site.location}.
        </p>
      </div>
    </footer>
  );
}
