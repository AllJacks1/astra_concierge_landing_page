import Link from "next/link";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Astra Concierge Philippines. Email, phone, and WhatsApp channels.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-4">Talk to Astra.</h1>
          <p className="body-lg max-w-lg mx-auto">
            Prefer to speak with someone first? Reach us through any of the
            channels below—or simply tell us what you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:hello@astragroupph.com"
            className="card text-center hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-navy" />
            </div>
            <h2 className="text-sm font-semibold text-navy mb-1">Email</h2>
            <p className="text-sm text-foreground/70">hello@astragroupph.com</p>
          </a>

          <a
            href="tel:+630000000000"
            className="card text-center hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-navy" />
            </div>
            <h2 className="text-sm font-semibold text-navy mb-1">Phone</h2>
            <p className="text-sm text-foreground/70">+63 (0) 000 000 0000</p>
          </a>

          <a
            href="https://wa.me/630000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center hover:shadow-card transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-5 h-5 text-navy" />
            </div>
            <h2 className="text-sm font-semibold text-navy mb-1">WhatsApp</h2>
            <p className="text-sm text-foreground/70">Message us</p>
          </a>
        </div>

        <div className="bg-warm-100/80 rounded-3xl p-8 sm:p-10 text-center">
          <h2 className="heading-md mb-3">Prefer to start with a request?</h2>
          <p className="body max-w-md mx-auto mb-6">
            You don&apos;t need to know which service category applies. Just
            explain what you need.
          </p>
          <Link href="/request" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-200 text-center">
          <p className="text-sm font-medium text-navy mb-1">
            Astra Group of Companies, Inc.
          </p>
          <p className="text-sm text-foreground/60">
            Astra Concierge Philippines is a service of Astra Group of
            Companies, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
