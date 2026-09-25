import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Locations in the Philippines | Astra Concierge",
  description:
    "Astra Concierge service areas: Davao, Cebu, Cagayan de Oro, Iloilo, and Metro Manila. Local coordination where we have people we trust — not a tourism map.",
  openGraph: {
    title: "Locations | Astra Concierge Philippines",
    description:
      "Active coverage in Davao, Cebu, Cagayan de Oro, Iloilo, and Metro Manila. Expanding carefully.",
    type: "website",
  },
  alternates: {
    canonical: "/locations",
  },
};

const locations = [
  {
    name: "Davao",
    region: "Mindanao",
    role: "Primary hub",
    description:
      "Core service coverage for Davao City and surrounding areas — business, property, travel support, and practical on-ground tasks.",
  },
  {
    name: "Cebu",
    region: "Visayas",
    role: "Active",
    description:
      "Coverage across Cebu City and key nearby locations for visitors, business coordination, and local execution.",
  },
  {
    name: "Cagayan de Oro",
    region: "Mindanao",
    role: "Active",
    description:
      "Local capability for coordination, inspections, transportation, and practical assistance.",
  },
  {
    name: "Iloilo",
    region: "Visayas",
    role: "Active",
    description:
      "On-the-ground coordination and local representation for clients who need presence in the city.",
  },
  {
    name: "Metro Manila",
    region: "Luzon",
    role: "Active",
    description:
      "Coverage for business, property, transportation, and higher-complexity coordination across the metro.",
  },
];

export default function LocationsPage() {
  return (
    <div className="pt-28 pb-0">
      {/* Hero */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Where we show up</p>
            <h1 className="heading-xl mb-5">
              Local presence.
              <br className="hidden sm:block" />
              Not a coverage claim.
            </h1>
            <p className="body-lg text-foreground/70 max-w-2xl">
              Astra maintains verified capability in key cities. This is a map
              of where we can actually put people on the ground — not a tourism
              guide or a list of places we wish we operated.
            </p>
          </div>
        </div>
      </section>

      {/* Region strip */}
      <section className="pb-12 sm:pb-14">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["Mindanao", "Visayas", "Luzon"].map((region) => {
              const count = locations.filter((l) => l.region === region).length;
              return (
                <div
                  key={region}
                  className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-warm-50/80 px-4 py-2 text-sm"
                >
                  <span className="font-medium text-navy">{region}</span>
                  <span className="text-navy/40">·</span>
                  <span className="text-navy/55">
                    {count} {count === 1 ? "city" : "cities"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="pb-16 sm:pb-20">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className="group relative flex flex-col rounded-2xl border border-warm-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-navy/15 hover:shadow-[0_12px_40px_-12px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/[0.04] text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  {i === 0 ? (
                    <span className="text-[10px] font-semibold tracking-wide uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">
                      Hub
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold tracking-wide uppercase text-navy/40 bg-navy/[0.04] px-2.5 py-1 rounded-full">
                      Active
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-semibold text-navy mb-0.5 group-hover:text-navy/90">
                  {loc.name}
                </h2>
                <p className="text-xs text-navy/45 mb-4">{loc.region}</p>

                <p className="text-sm text-foreground/65 leading-relaxed mb-6 flex-1">
                  {loc.description}
                </p>

                <Link
                  href={`/request?location=${encodeURIComponent(loc.name)}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber-400 transition-colors"
                >
                  Request assistance here
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}

            {/* Sixth cell — request another city */}
            <div className="flex flex-col justify-between rounded-2xl border border-dashed border-warm-300 bg-warm-50/50 p-6 sm:p-7">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-warm-200 mb-5">
                  <MapPin className="h-4 w-4 text-navy/40" strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-semibold text-navy mb-2">
                  Somewhere else?
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Need support outside these cities? Tell us where. We&apos;ll
                  confirm whether we can help or are building capacity there.
                </p>
              </div>
              <Link
                href="/request"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber-400 transition-colors mt-6"
              >
                Ask about another location
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 sm:pb-20">
        <div className="container-wide">
          <p className="text-sm text-foreground/50 max-w-2xl">
            We expand only where we have people we trust. Listing a city means
            active, coordinated capability — not a future roadmap item.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-narrow text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400/80 mb-4">
            Not on the list?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
            Tell us where you need support.
          </h2>
          <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
            We&apos;ll advise on current capability in that area — or whether we
            can still coordinate a solution through partners.
          </p>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 bg-amber-400 text-navy font-semibold px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
          >
            Request assistance
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
