import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Users,
  BadgeCheck,
  FileText,
  Check,
  QrCode,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "A real company, not a middleman",
    content: (
      <>
        <p className="font-medium text-navy mb-1.5">
          Astra Concierge Philippines
        </p>
        <p className="text-sm text-foreground/70 mb-2">
          A service of Astra Group of Companies, Inc.
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed">
          Registered entity. Real address. Direct lines. No shell companies, no
          anonymous operators hiding behind a chat window.
        </p>
      </>
    ),
  },
  {
    icon: Users,
    title: "Named people you can reach",
    content: (
      <p className="text-sm text-foreground/70 leading-relaxed">
        The people running Astra have names, roles, and accountability. You will
        never be passed between faceless agents when something important is at
        stake.
      </p>
    ),
  },
  {
    icon: BadgeCheck,
    title: "Field reps you can verify",
    content: (
      <p className="text-sm text-foreground/70 leading-relaxed">
        Every Astra representative carries a unique Concierge ID and a public
        verification profile. If someone claims to be from us, you can check in
        seconds.
      </p>
    ),
  },
  {
    icon: FileText,
    title: "Policies written in plain language",
    content: (
      <ul className="text-sm text-foreground/70 space-y-1.5">
        {[
          { href: "/legal/terms", label: "Terms of Service" },
          { href: "/legal/privacy", label: "Privacy Policy" },
          { href: "/legal/refund", label: "Refund & Cancellation" },
          { href: "/legal/limitations", label: "What we can and cannot do" },
          { href: "/contact", label: "How to reach us" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-navy underline-offset-2 hover:underline transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    ),
  },
];

export const metadata = {
  title: "Why Astra",
  description:
    "A real company, named people, verifiable field representatives, and clear policies — why clients trust Astra Concierge Philippines.",
};

export default function WhyAstraPage() {
  return (
    <div className="pt-28 pb-24">
      {/* ── Hero ── */}
      <section className="pb-20 lg:pb-24">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-5">
            Why Astra
          </p>
          <h1 className="heading-xl mb-5">
            You&apos;re trusting us with things that actually matter.
          </h1>
          <p className="body-lg max-w-2xl mx-auto text-foreground/80">
            When you&apos;re thousands of kilometers away, vague promises and
            corporate jargon don&apos;t help. Astra is built so you always know
            who is responsible, who is on the ground, and what the rules are.
          </p>
        </div>
      </section>

      {/* ── Trust architecture ── */}
      <section className="pb-24 lg:pb-28">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
              The foundation
            </p>
            <h2 className="heading-lg text-navy">
              Built for accountability, not convenience.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-warm-200/80 bg-background p-7 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/[0.04] ring-1 ring-navy/[0.06]">
                  <pillar.icon
                    className="h-5 w-5 text-navy"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                {pillar.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="section-padding bg-warm-100/60 border-y border-warm-200/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Portrait */}
            <div className="relative order-1">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl shadow-elevated">
                <Image
                  src="/images/astra_ceo.png"
                  alt="Mares Mae Nuera, Founder & CEO"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2">
              <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
                A name and a face, not a brand
              </p>
              <h2 className="heading-lg text-navy mb-2">Mares Mae Nuera</h2>
              <p className="text-base font-medium text-navy/80 mb-0.5">
                Founder &amp; CEO
              </p>
              <p className="text-sm text-navy/55 mb-7">
                Astra Group of Companies, Inc. · Licensed Real Estate Broker
              </p>

              <div className="space-y-4 body text-foreground/85 mb-9">
                <p>
                  Most people abroad don&apos;t need another platform. They need
                  someone local who will actually show up, follow through, and
                  take responsibility when things get complicated.
                </p>
                <p>
                  That gap is why Mares built Astra. Years of real estate and
                  client work made one pattern clear: capable people overseas
                  kept running into the same problem — no one they could fully
                  trust on the ground.
                </p>
                <p>
                  Her name and face are on this page on purpose. If something
                  goes wrong, you should know exactly who is accountable.
                </p>
              </div>

              <Link href="/about" className="btn-primary rounded-xl">
                Meet the people behind Astra
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified Concierge ── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Copy */}
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-amber-400 mb-4">
                No more guessing
              </p>
              <h2 className="heading-lg text-navy mb-4">
                Know exactly who is standing in for you.
              </h2>
              <p className="body-lg text-foreground/80 mb-5">
                Anyone can claim to be from a company. Astra makes it impossible
                to fake.
              </p>
              <p className="body text-foreground/80 mb-9">
                Every field representative carries a unique Concierge ID and a
                public verification profile. If someone shows up at a property,
                a bank, or a government office claiming to represent you — you
                (or anyone you trust) can confirm them in under a minute.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/verify" className="btn-primary rounded-xl">
                  Verify a Concierge
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/how-it-works" className="btn-secondary rounded-xl">
                  How verification works
                </Link>
              </div>
            </div>

            {/* Digital ID Card */}
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div
                className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-navy/5 via-amber-400/10 to-transparent blur-2xl pointer-events-none"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-3xl border border-warm-200 bg-white shadow-elevated transition-shadow duration-300 hover:shadow-lg">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-warm-200 bg-navy/[0.025] px-6 py-3">
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-navy/50">
                    Astra Digital ID
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Live
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-6 flex items-start gap-5">
                    <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-2xl bg-warm-100 shadow-sm ring-2 ring-white">
                      <Image
                        src="/images/verified_concierge.png"
                        alt="Maria Santos"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-xl font-semibold leading-tight text-navy">
                        Maria Santos
                      </h3>
                      <p className="mt-1 text-sm text-navy/65">
                        Field Concierge · Davao
                      </p>
                      <p className="mt-2 font-mono text-xs tracking-wide text-navy/45">
                        AC-DVO-001
                      </p>
                    </div>
                  </div>

                  {/* Status chips */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {[
                      "Identity Verified",
                      "Background Checked",
                      "Astra Trained",
                    ].map((status) => (
                      <span
                        key={status}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy/[0.04] px-2.5 py-1 text-xs font-medium text-navy/80"
                      >
                        <Check
                          className="h-3 w-3 shrink-0 text-amber-400"
                          strokeWidth={2.5}
                        />
                        {status}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="mb-0.5 text-[11px] font-medium text-navy/45">
                        Languages
                      </p>
                      <p className="text-navy">English · Filipino</p>
                    </div>
                    <div>
                      <p className="mb-0.5 text-[11px] font-medium text-navy/45">
                        Based in
                      </p>
                      <p className="text-navy">Davao City</p>
                    </div>
                  </div>

                  {/* Verify action */}
                  <Link
                    href="/verify?id=AC-DVO-001"
                    className="group -mx-1 flex items-center gap-4 rounded-2xl border border-warm-200 p-3.5 transition-colors hover:border-navy/20 hover:bg-navy/[0.02]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-warm-200 bg-warm-50 transition-colors group-hover:bg-white">
                      <QrCode className="h-7 w-7 text-navy/50 transition-colors group-hover:text-navy" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 text-sm font-medium text-navy">
                        Confirm this representative
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </p>
                      <p className="mt-0.5 text-xs text-navy/55">
                        Scan the code or open the verification page
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-2 border-t border-warm-200 bg-navy/[0.02] px-6 py-3">
                  <ShieldCheck className="h-3.5 w-3.5 text-navy/40" />
                  <p className="text-[11px] text-navy/50">
                    Only profiles on astra.ph are official
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="pt-8 lg:pt-12">
        <div className="container-narrow text-center">
          <h2 className="heading-md text-navy mb-3">
            Ready to work with people you can hold accountable.
          </h2>
          <p className="body text-foreground/75 mb-8 max-w-lg mx-auto">
            Start a request, or verify a representative who claims to be from
            Astra.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/request" className="btn-primary rounded-xl">
              Start a Request
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/verify" className="btn-secondary rounded-xl">
              Verify a Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
