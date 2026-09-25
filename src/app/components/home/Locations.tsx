import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const cities = [
  { name: "Davao", region: "Mindanao", note: "Primary hub" },
  { name: "Cebu", region: "Visayas", note: "Active" },
  { name: "Cagayan de Oro", region: "Mindanao", note: "Active" },
  { name: "Iloilo", region: "Visayas", note: "Active" },
  { name: "Metro Manila", region: "Luzon", note: "Active" },
];

export function Locations() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      {/* subtle depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4">
              Where we show up
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] mb-4">
              Not just a phone number.
              <br className="hidden sm:block" />
              People on the ground.
            </h2>
            <p className="text-lg text-white/65 leading-relaxed">
              Astra is building verified local capacity city by city — so when
              something needs to happen in the Philippines, someone is already
              there.
            </p>
          </div>

          <Link
            href="/locations"
            className="inline-flex items-center gap-2 self-start lg:self-auto shrink-0 text-sm font-semibold text-gold hover:text-gold-300 transition-colors group"
          >
            Need another city?
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {cities.map((city, i) => (
            <div
              key={city.name}
              className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin
                    className="w-4 h-4 text-gold"
                    strokeWidth={1.75}
                  />
                </div>
                {i === 0 && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase text-gold/90 bg-gold/10 px-2 py-0.5 rounded-full">
                    Hub
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-white mb-0.5 group-hover:text-gold transition-colors">
                {city.name}
              </h3>
              <p className="text-xs text-white/45">{city.region}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/40">
          Expanding carefully — only cities where we have people we trust.
        </p>
      </div>
    </section>
  );
}