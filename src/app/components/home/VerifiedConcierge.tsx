import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, QrCode, ShieldCheck } from "lucide-react";

export function VerifiedConcierge() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-4">No more guessing</p>
            <h2 className="heading-lg mb-4">
              Know exactly who is standing in for you.
            </h2>
            <p className="body-lg mb-6">
              Anyone can claim to be from a company. Astra makes it impossible
              to fake.
            </p>
            <p className="body mb-8">
              Every field representative carries a unique Concierge ID and a
              public verification profile. If someone shows up at a property, a
              bank, or a government office claiming to represent you — you (or
              anyone you trust) can confirm them in under a minute.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/verify" className="btn-primary rounded-xl">
                Verify a Concierge
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works#verification"
                className="btn-secondary rounded-xl"
              >
                How verification works
              </Link>
            </div>
          </div>

          {/* Digital ID Card */}
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            {/* Soft glow behind card */}
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-navy/5 via-gold/10 to-transparent blur-2xl pointer-events-none"
              aria-hidden
            />

            <div className="relative bg-white rounded-3xl border border-warm-200 shadow-elevated overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-3 bg-navy/[0.03] border-b border-warm-200">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-navy/50">
                  Astra Digital ID
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative w-[4.5rem] h-[4.5rem] rounded-2xl overflow-hidden shrink-0 bg-warm-100 ring-2 ring-white shadow-sm">
                    <Image
                      src="/images/verified_concierge.png"
                      alt="Maria Santos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-xl font-semibold text-navy leading-tight">
                      Maria Santos
                    </h3>
                    <p className="text-sm text-navy/65 mt-1">
                      Field Concierge · Davao
                    </p>
                    <p className="text-xs font-mono text-navy/45 mt-2 tracking-wide">
                      AC-DVO-001
                    </p>
                  </div>
                </div>

                {/* Status chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Identity Verified",
                    "Background Checked",
                    "Astra Trained",
                  ].map((status) => (
                    <span
                      key={status}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-navy/80 bg-navy/[0.04] px-2.5 py-1 rounded-full"
                    >
                      <Check
                        className="w-3 h-3 text-gold shrink-0"
                        strokeWidth={2.5}
                      />
                      {status}
                    </span>
                  ))}
                </div>

                {/* Meta grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-[11px] font-medium text-navy/45 mb-0.5">
                      Languages
                    </p>
                    <p className="text-navy">English · Filipino</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-navy/45 mb-0.5">
                      Based in
                    </p>
                    <p className="text-navy">Davao City</p>
                  </div>
                </div>

                {/* Verify action */}
                <Link
                  href="/verify?id=AC-DVO-001"
                  className="group flex items-center gap-4 p-3.5 -mx-1 rounded-2xl border border-warm-200 hover:border-navy/20 hover:bg-navy/[0.02] transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-warm-50 border border-warm-200 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                    <QrCode className="w-7 h-7 text-navy/50 group-hover:text-navy transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-navy flex items-center gap-1.5">
                      Confirm this representative
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </p>
                    <p className="text-xs text-navy/55 mt-0.5">
                      Scan the code or open the verification page
                    </p>
                  </div>
                </Link>
              </div>

              {/* Footer strip */}
              <div className="px-6 py-3 bg-navy/[0.02] border-t border-warm-200 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-navy/40" />
                <p className="text-[11px] text-navy/50">
                  Only profiles on astra.ph are official
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
