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
    description:
      "Navigate the Philippines with someone on the ground. Airport coordination, local arrangements, reservations, research and practical assistance.",
  },
  {
    icon: Briefcase,
    title: "Business Concierge",
    description:
      "Get things done without having to be physically present. Meeting coordination, local research, sourcing, appointments and business-related assistance.",
  },
  {
    icon: Building2,
    title: "Property Assistance",
    description:
      "Have someone you trust inspect and coordinate locally. Property sourcing, site visits, documentation coordination and professional property assistance.",
  },
  {
    icon: Car,
    title: "Transportation",
    description:
      "Coordinate legitimate transportation requirements locally. Airport transfers, drivers, vehicle arrangements and transportation coordination.",
  },
  {
    icon: Package,
    title: "Local Execution",
    description:
      "Need something accomplished physically in the Philippines? Astra can coordinate legitimate errands, document-related tasks, inspections, pickups and other local requirements.",
  },
  {
    icon: Home,
    title: "Relocation & Extended Stay",
    description:
      "Make longer stays easier to manage. Housing coordination, local setup, transportation, appointments and practical relocation assistance.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="heading-lg mb-4">What can we help with?</h2>
          <p className="body-lg">
            From simple local requirements to complex business and relocation needs,
            Astra coordinates the people, information and logistics needed to get things done.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-navy/10 transition-colors">
                <service.icon className="w-5 h-5 text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-warm-200 text-center">
          <p className="eyebrow mb-3">Don&apos;t see what you need?</p>
          <h3 className="heading-md mb-4">Just ask Astra.</h3>
          <p className="body max-w-xl mx-auto mb-8">
            If it requires someone on the ground in the Philippines, tell us what
            you&apos;re trying to accomplish. We&apos;ll tell you what we can do.
          </p>
          <Link href="/request" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
