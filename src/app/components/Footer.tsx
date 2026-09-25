import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Astra" },
    { href: "/locations", label: "Locations" },
    { href: "/contact", label: "Contact" },
    { href: "/verify", label: "Verify a Concierge" },
  ],
  legal: [
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/refund", label: "Refund & Cancellation Policy" },
    { href: "/legal/service-limitations", label: "Service Limitations" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-xl font-semibold tracking-tight">
                ASTRA
              </span>
              <span className="block text-xs font-medium tracking-[0.15em] uppercase text-white/60 mt-0.5">
                Concierge Philippines
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              A service of Astra Group of Companies, Inc.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Your team on the ground in the Philippines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@astragroupph.com"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  hello@astragroupph.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+630000000000"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +63 (0) 000 000 0000
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/630000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50 leading-relaxed">
                Astra Group of Companies, Inc.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © 2026 Astra Group of Companies, Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Professional local capability across the Philippines.
          </p>
        </div>
      </div>
    </footer>
  );
}
