import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const cities = [
  { name: "Davao", region: "Mindanao" },
  { name: "Cebu", region: "Visayas" },
  { name: "Cagayan de Oro", region: "Mindanao" },
  { name: "Iloilo", region: "Visayas" },
  { name: "Metro Manila", region: "Luzon" },
];

export function Locations() {
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-4">
            Local presence. Philippine reach.
          </h2>
          <p className="text-lg text-white/70">
            Our network continues to expand as Astra builds verified local
            capabilities across the Philippines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5 text-gold mb-3" strokeWidth={1.75} />
              <h3 className="text-base font-semibold text-white mb-1">
                {city.name}
              </h3>
              <p className="text-xs text-white/50">{city.region}</p>
            </div>
          ))}
        </div>

        <Link
          href="/locations"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-300 transition-colors"
        >
          Request Assistance in Another Location
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
