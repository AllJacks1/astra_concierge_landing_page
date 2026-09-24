import Link from "next/link";
import {
  Plane,
  Briefcase,
  Building2,
  Car,
  Package,
  Home,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Travel & Local Assistance",
    slug: "travel-local-assistance",
    description:
      "Navigate the Philippines with someone on the ground. Airport coordination, local arrangements, reservations, research and practical assistance.",
  },
  {
    icon: Briefcase,
    title: "Business Concierge",
    slug: "business-concierge",
    description:
      "Get things done without having to be physically present. Meeting coordination, local research, sourcing, appointments and business-related assistance.",
  },
  {
    icon: Building2,
    title: "Property Assistance",
    slug: "property-assistance",
    description:
      "Have someone you trust inspect and coordinate locally. Property sourcing, site visits, documentation coordination and professional property assistance.",
  },
  {
    icon: Car,
    title: "Transportation",
    slug: "transportation",
    description:
      "Coordinate legitimate transportation requirements locally. Airport transfers, drivers, vehicle arrangements and transportation coordination.",
  },
  {
    icon: Package,
    title: "Local Execution",
    slug: "local-execution",
    description:
      "Need something accomplished physically in the Philippines? Astra can coordinate legitimate errands, document-related tasks, inspections, pickups and other local requirements.",
  },
  {
    icon: Home,
    title: "Relocation & Extended Stay",
    slug: "relocation-extended-stay",
    description:
      "Make longer stays easier to manage. Housing coordination, local setup, transportation, appointments and practical relocation assistance.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-18">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-navy/50 mb-4">
            Our services
          </p>
          <h2 className="heading-lg mb-5 text-navy">What can we help with?</h2>
          <p className="body-lg text-navy/70">
            From simple local requirements to complex business and relocation
            needs, Astra coordinates the people, information and logistics
            needed to get things done.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col bg-white rounded-2xl p-7
                         border border-warm-200/80
                         shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)]
                         hover:border-navy/20
                         transition-all duration-300"
            >
              {/* Soft hover wash */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5
                                group-hover:bg-navy transition-colors duration-300"
                >
                  <service.icon
                    className="w-5.5 h-5.5 text-navy group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="text-lg font-semibold text-navy mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-navy/65 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* “Learn more” cue */}
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-navy/50 group-hover:text-navy transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-18 pt-14 border-t border-warm-200 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-navy/50 mb-4">
            Don’t see what you need?
          </p>
          <h3 className="heading-md mb-4 text-navy">Just ask Astra.</h3>
          <p className="body max-w-xl mx-auto mb-8 text-navy/70">
            If it requires someone on the ground in the Philippines, tell us
            what you’re trying to accomplish. We’ll tell you what we can do.
          </p>
          <Link href="/request" className="btn-primary rounded-xl">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
