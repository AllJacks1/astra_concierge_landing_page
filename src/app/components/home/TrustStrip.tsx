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
    <section className="section-padding bg-warm-100/60 border-y border-warm-200">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="heading-md max-w-2xl mx-auto">
            Built for clients who need things handled right.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-warm-200 shadow-soft"
            >
              <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-navy">
            Astra Concierge Philippines
          </p>
          <p className="text-sm text-navy/60 mt-1">
            A service of Astra Group of Companies, Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
