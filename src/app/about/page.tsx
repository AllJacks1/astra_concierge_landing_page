import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title:
    "About Astra Concierge | Built for local capability in the Philippines",
  description:
    "Astra exists for people who need someone trustworthy on the ground in the Philippines — without building a local team themselves. Meet the founder and how we work.",
  openGraph: {
    title: "About Astra Concierge Philippines",
    description:
      "Local capability when remote tools aren’t enough. Identity, accountability, and practical execution across the Philippines.",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

const principles = [
  {
    title: "Scoped before we start",
    text: "You know what’s possible, what it costs, and where the limits are — before anyone is dispatched.",
  },
  {
    title: "Named people, not a black box",
    text: "You deal with a real company and real coordinators. Field reps can be verified. No anonymous operators.",
  },
  {
    title: "Human, not a freelancer marketplace",
    text: "We don’t crowd-source your request to whoever is online. We coordinate through trained, accountable representatives.",
  },
  {
    title: "Execution over packaging",
    text: "We don’t sell vacation fantasies or lifestyle branding. We sell the ability to get something done locally.",
  },
];

const cities = ["Davao", "Cebu", "Cagayan de Oro", "Iloilo", "Metro Manila"];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-0">
      {/* Hero */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">About Astra</p>
            <h1 className="heading-xl mb-5">
              Built to make the Philippines easier to navigate — when you
              can&apos;t be here yourself.
            </h1>
            <p className="body-lg text-foreground/70 max-w-2xl">
              Astra exists for people who need reliable local capability without
              hiring staff, opening an office, or trusting a stranger from a
              random chat.
            </p>
          </div>
        </div>
      </section>

      {/* Why Astra exists */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-white/[0.03] blur-[100px] rounded-full" />
        </div>
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400/80 mb-4">
                The gap we fill
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15]">
                Why Astra exists
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-white/70 leading-relaxed">
              <p>
                Remote tools and booking platforms solve a lot of problems. They
                don&apos;t solve the problem of needing a capable person{" "}
                <span className="text-white">on the ground</span> — someone who
                can inspect a property, coordinate a meeting, collect a
                document, or simply be present when presence is required.
              </p>
              <p>
                That gap is why Astra was built. We coordinate local people,
                logistics, and information so clients abroad — or elsewhere in
                the country — can get things done without decoding every local
                system themselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="heading-md">
              Four things we don&apos;t compromise on
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {principles.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-warm-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-navy/15 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.1)]"
              >
                <span className="text-xs font-mono font-semibold tracking-wider text-amber-400 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-warm-100/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-1">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-elevated">
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

            <div className="order-2">
              <p className="eyebrow mb-4">A name and a face, not a brand</p>
              <h2 className="heading-lg mb-2">Mares Mae Nuera</h2>
              <p className="text-base font-medium text-navy/80 mb-1">
                Founder &amp; CEO
              </p>
              <p className="text-sm text-navy/55 mb-6">
                Astra Group of Companies, Inc. · Licensed Real Estate Broker
              </p>

              <div className="space-y-4 body text-foreground/75 mb-8">
                <p>
                  Most people abroad don&apos;t need another platform. They need
                  someone local who will show up, follow through, and take
                  responsibility when things get complicated.
                </p>
                <p>
                  That pattern is why Mares built Astra. Years in real estate
                  and client work made one thing obvious: capable people
                  overseas kept running into the same problem — no one they
                  could fully trust on the ground.
                </p>
                <p>
                  Her name and face are on this page on purpose. If something
                  goes wrong, you should know exactly who is accountable.
                </p>
              </div>

              <Link
                href="/request"
                className="btn-primary rounded-xl inline-flex"
              >
                Work with Astra
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company + standards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 lg:mb-14">
            <p className="eyebrow mb-4">The company behind it</p>
            <h2 className="heading-md">Astra Group of Companies, Inc.</h2>
            <p className="body text-foreground/70 mt-4">
              Astra Concierge Philippines is a service of Astra Group of
              Companies, Inc. Corporate details and legitimate contact channels
              are on this site and available on request.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 mb-14 lg:mb-16">
            {[
              {
                title: "Accountability",
                text: "Requests are scoped, assigned, and tracked. Field representatives operate under Astra’s coordination and can be independently verified where profiles are available.",
              },
              {
                title: "Professional standards",
                text: "We are clear about what we can and cannot do. When a request needs licensed professionals outside our scope, we say so — and refer appropriately.",
              },
              {
                title: "Growing presence",
                text: "We expand only where we have people we trust. Capability comes before coverage claims.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-warm-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Cities */}
          <div className="rounded-2xl border border-warm-200 bg-warm-50/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div>
                <h3 className="text-base font-semibold text-navy mb-1">
                  Where we show up
                </h3>
                <p className="text-sm text-foreground/60">
                  Verified local capacity in key cities — expanding carefully.
                </p>
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber-400 transition-colors shrink-0"
              >
                All locations
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/80 bg-white border border-warm-200 px-3 py-1.5 rounded-full"
                >
                  <MapPin
                    className="w-3.5 h-3.5 text-amber-400"
                    strokeWidth={1.75}
                  />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-narrow text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400/80 mb-4">
            Next step
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Tell us what you need done.
          </h2>
          <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
            If it requires someone on the ground in the Philippines, we&apos;ll
            say clearly whether we can help — and what it would take.
          </p>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
          >
            Submit a request
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
