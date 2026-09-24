import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, QrCode } from "lucide-react";

export function VerifiedConcierge() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="heading-lg mb-4">Know who is representing you.</h2>
            <p className="body-lg mb-6">
              Astra field representatives can have unique digital identities
              that clients can independently verify.
            </p>
            <p className="body mb-8">
              Every verified Astra concierge has a unique identification number
              that clients can use to confirm their identity through
              Astra&apos;s official verification system.
            </p>
            <Link href="/verify" className="btn-primary rounded-xl">
              Verify This Concierge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-3xl border border-warm-200 shadow-elevated p-8 max-w-md mx-auto lg:mx-0 w-full">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-navy/50 mb-6">
              Your Davao Concierge
            </p>

            <div className="flex items-start gap-5 mb-6">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-warm-100">
                <Image
                  src="/images/verified_concierge.png"
                  alt="Maria Santos"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy">
                  Maria Santos
                </h3>
                <p className="text-sm text-navy/70 mt-0.5">
                  Astra Concierge — Davao
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs font-medium text-navy/50 mb-1">
                  Languages
                </p>
                <p className="text-sm text-navy">English · Filipino</p>
              </div>

              <div>
                <p className="text-xs font-medium text-navy/50 mb-2">Status</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Identity Verified",
                    "Astra Trained",
                    "Background Checked",
                  ].map((status) => (
                    <span
                      key={status}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-navy bg-navy/5 px-2.5 py-1 rounded-full"
                    >
                      <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                      {status}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-navy/50 mb-1">
                  Concierge ID
                </p>
                <p className="text-sm font-mono font-medium text-navy tracking-wide">
                  AC-DVO-001
                </p>
              </div>
            </div>

            {/* QR Placeholder */}
            <div className="flex items-center gap-4 pt-5 border-t border-warm-200">
              <div className="w-16 h-16 rounded-lg bg-warm-100 border border-warm-200 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-navy/40" />
              </div>
              <p className="text-xs text-navy/60 leading-relaxed">
                Scan or visit the verification page to confirm this
                representative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
