import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container panel" style={{ textAlign: "center" }}>
        <h1>Halaman Tidak Ditemukan</h1>
        <p className="text-muted" style={{ marginBottom: 14 }}>
          Cek kembali URL atau kembali ke halaman utama.
        </p>
        <Link className="btn btn-primary" href="/">
          Kembali ke Home
        </Link>
      </div>
    </section>
  );
}
