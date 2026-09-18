import Link from "next/link";
import { Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="site-header sticky-top">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" aria-label="Lowfare click home">
          <BrandLogo compact />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions d-flex align-items-center gap-3">
          <Link href="tel:+18556877163" className="header-phone-cta">
            <span className="header-phone-icon">
              <Phone size={18} />
            </span>
            <span className="header-phone-text">+1 855 687 7163</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
