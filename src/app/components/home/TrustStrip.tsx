import { MapPin, ClipboardList, BadgeCheck, Users } from "lucide-react";

const indicators = [
  {
    icon: MapPin,
    title: "Philippine-Based Team",
    description: "Local people who understand the environment.",
  },
  {
    icon: ClipboardList,
    title: "Professional Coordination",
    description: "Requests are scoped, coordinated and documented.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Concierges",
    description: "Field representatives can be independently verified.",
  },
  {
    icon: Users,
    title: "Human Support",
    description: "Real people—not an anonymous marketplace.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-padding bg-warm-50 border-y border-warm-200/80">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-18">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-navy/50 mb-4">
            Why clients trust us
          </p>
          <h2 className="heading-md max-w-2xl mx-auto text-navy">
            Built for clients who need things handled right.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {indicators.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-7 border border-warm-200/80
                         shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)]
                         hover:border-navy/15
                         transition-all duration-300"
            >
              {/* Soft accent glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5
                                group-hover:bg-navy group-hover:text-white
                                transition-colors duration-300"
                >
                  <item.icon
                    className="w-5.5 h-5.5 text-navy group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="text-[15px] font-semibold text-navy mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer attribution */}
        <div className="mt-14 pt-8 border-t border-warm-200/70 text-center">
          <p className="text-sm font-semibold text-navy tracking-tight">
            Astra Concierge Philippines
          </p>
          <p className="text-sm text-navy/50 mt-1.5">
            A service of Astra Group of Companies, Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
