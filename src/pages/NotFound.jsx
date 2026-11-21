import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="container-page section-y min-h-[60svh]">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Halaman tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-navy/70">Alamat yang Anda buka tidak tersedia. Kembali ke beranda untuk melanjutkan.</p>
      <div className="mt-8">
        <Button to="/">Kembali ke beranda</Button>
      </div>
    </section>
  );
}
