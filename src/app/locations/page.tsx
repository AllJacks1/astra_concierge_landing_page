import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const locations = [
  {
    name: "Davao",
    region: "Mindanao",
    description:
      "Service coverage for Davao City and surrounding areas. Local coordination for business, property, travel support, and practical tasks.",
    availability: "Active service area",
  },
  {
    name: "Cebu",
    region: "Visayas",
    description:
      "Coverage across Cebu City and key nearby locations. Support for visitors, business coordination, and local execution needs.",
    availability: "Active service area",
  },
  {
    name: "Cagayan de Oro",
    region: "Mindanao",
    description:
      "Local capability in Cagayan de Oro for coordination, inspections, transportation, and practical assistance.",
    availability: "Active service area",
  },
  {
    name: "Iloilo",
    region: "Visayas",
    description:
      "Service presence in Iloilo for clients needing on-the-ground coordination and local representation.",
    availability: "Active service area",
  },
  {
    name: "Metro Manila",
    region: "Luzon",
    description:
      "Coverage across Metro Manila for business, property, transportation, and high-complexity coordination requirements.",
    availability: "Active service area",
  },
];

export const metadata = {
  title: "Locations",
  description:
    "Astra Concierge service areas across the Philippines: Davao, Cebu, Cagayan de Oro, Iloilo, and Metro Manila.",
};

export default function LocationsPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="pb-16">
        <div className="container-narrow text-center">
          <h1 className="heading-xl mb-4">Local knowledge. Philippine reach.</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Astra maintains service capability in key cities. This is a coverage
            map—not a tourism guide.
          </p>
        </div>
      </section>

      {/* Map placeholder + cities */}
      <section className="pb-16">
        <div className="container-wide">
          {/* Simple visual map representation */}
          <div className="bg-warm-100 rounded-3xl border border-warm-200 p-8 sm:p-12 mb-12 text-center">
            <div className="max-w-md mx-auto">
              <MapPin className="w-10 h-10 text-navy/30 mx-auto mb-4" />
              <p className="text-sm text-navy/60">
                Service areas: Davao · Cebu · Cagayan de Oro · Iloilo · Metro
                Manila
              </p>
              <p className="text-xs text-navy/40 mt-2">
                Interactive map integration available in production
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="card-elevated">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-navy">
                      {loc.name}
                    </h2>
                    <p className="text-xs text-navy/50 mt-0.5">{loc.region}</p>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wide uppercase text-gold bg-gold/10 px-2 py-1 rounded-full">
                    {loc.availability}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  {loc.description}
                </p>
                <Link
                  href="/request"
                  className="text-sm font-semibold text-navy hover:text-navy-700 inline-flex items-center gap-1.5"
                >
                  Request assistance here
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expand CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-4">
            Need assistance in another location?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Our network continues to expand. Tell us where you need support—we
            will advise on current capability.
          </p>
          <Link
            href="/request"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-warm-100 transition-colors"
          >
            Request Assistance in Another Location
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
