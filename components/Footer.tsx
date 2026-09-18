"use client";

import Link from "next/link";
import { ArrowRight, Globe, MessageSquare, Phone, Plane, Send } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="row g-4 gy-5 footer-grid">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand-box">
              <BrandLogo compact />
            </div>

            <p className="footer-copy mt-4">
              An independent travel information platform for destination research and trip-planning guidance.
            </p>

            <div className="footer-phone-callout mt-4">
              <div className="phone-icon">
                <Phone size={18} />
              </div>
              <a href="tel:+18556877163">+1 855 687 7163</a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h3>Legal</h3>
            <ul>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/refund-cancellation-policy">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h3>Contact</h3>
            <div className="contact-list">
              <div>
                <span className="label">Address</span>
                <p>100 E Wisconsin Ave Suite 3300,<br />Milwaukee, WI 53202</p>
              </div>
              <div>
                <span className="label">Phone</span>
                <p><a href="tel:+18556877163">+1 855 687 7163</a></p>
              </div>
              <div>
                <span className="label">Email</span>
                <p><a href="mailto:support@lowfareclick.com">support@lowfareclick.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="footer-disclaimer">
            <strong>Disclaimer:</strong> LowFareClick provides independent travel information, fare research guidance,
            destination information, and general trip-planning resources. We do not operate flights, issue tickets,
            manage airline bookings, or provide official customer support on behalf of any airline.
            <Link href="/disclaimer" className="text-link-primary ms-2">Read more <ArrowRight size={14} /></Link>
          </div>
        </div>

        <div className="footer-meta-row d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mt-3">
          <div className="footer-meta">© 2026 LowFareClick. All rights reserved.</div>

          <div className="footer-controls d-flex align-items-center gap-3">
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook"><Globe size={15} /></a>
              <a href="https://x.com" aria-label="X"><Send size={15} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><MessageSquare size={15} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Plane size={15} /></a>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="scroll-to-top-button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowRight size={18} className="scroll-top-icon" />
      </button>
    </footer>
  );
}
