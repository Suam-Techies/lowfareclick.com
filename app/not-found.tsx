import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <p className="eyebrow text-primary mb-3">404</p>
            <h1 className="display-4 fw-bold mb-3">Page not found</h1>
            <p className="text-muted mb-4">
              The page you requested is unavailable or may have moved.
            </p>
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
