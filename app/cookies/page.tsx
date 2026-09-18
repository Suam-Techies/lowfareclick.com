export const metadata = {
  title: "Cookies Policy",
  description: "Learn how lowfareclick.com uses cookies and similar tools to improve your travel booking experience.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="page-shell">
      <div className="container page-header">
        <h1>Cookies Policy</h1>
        <p className="page-subtitle">
          Cookies help us provide a smoother experience across our website, from remembering your search preferences to understanding how visitors use the site.
        </p>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="booking-card">
              <div className="summary-list">
                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">What are cookies?</h2>
                  <p className="text-muted">
                    Cookies are small text files stored on your device when you visit a website. They help websites remember your activity and improve functionality.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">Why we use them</h2>
                  <p className="text-muted">
                    We use cookies to keep search filters and booking preferences available, monitor website performance, understand traffic patterns, and improve our support and conversion experience.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">Types of cookies</h2>
                  <p className="text-muted">
                    Essential cookies help the site function correctly. Preference cookies remember selected settings. Analytics cookies help us measure website performance and visitor behavior. Marketing cookies may be used to personalize advertising where applicable.
                  </p>
                </div>

                <div className="summary-item" style={{ display: "block" }}>
                  <h2 className="h4 mb-3">Managing cookies</h2>
                  <p className="text-muted">
                    Most browsers allow you to review, block, or delete cookies. If you disable certain cookies, some website features may not work as expected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
