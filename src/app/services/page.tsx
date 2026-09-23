import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Travel & Local Assistance",
    what: "Practical on-the-ground support for visitors and travelers who need more than a booking confirmation.",
    common: [
      "Airport coordination and meet-and-greet",
      "Local arrangements and reservations",
      "Research and practical recommendations",
      "Day-of coordination for appointments or events",
    ],
    coordinates:
      "Astra coordinates people and logistics so you spend less time figuring out local systems.",
    limitations:
      "We do not operate as a licensed travel agency for package tours, nor do we guarantee availability of third-party services beyond what we can reasonably coordinate.",
  },
  {
    title: "Business Concierge",
    what: "Support for professionals and organizations that need local execution without a permanent presence.",
    common: [
      "Meeting and appointment coordination",
      "Local research and sourcing",
      "Document pickup or delivery coordination",
      "Vendor or service provider introductions",
    ],
    coordinates:
      "We act as your local coordinator—scoping requirements, managing logistics, and keeping you informed.",
    limitations:
      "We do not provide legal, accounting, or regulated professional advice. We coordinate practical tasks; we are not a substitute for licensed professionals in specialized fields.",
  },
  {
    title: "Property Assistance",
    what: "Local eyes and coordination for property-related needs when you cannot be present.",
    common: [
      "Site visits and photo/video documentation",
      "Property sourcing coordination",
      "Documentation and paperwork coordination",
      "Liaison with brokers, managers, or sellers",
    ],
    coordinates:
      "Astra can assign verified representatives to inspect, document, and report back.",
    limitations:
      "We are not a real estate brokerage for transaction closing. Licensed brokerage services are provided separately through appropriate channels when required.",
  },
  {
    title: "Transportation",
    what: "Coordination of legitimate transportation needs for clients and visitors.",
    common: [
      "Airport transfers",
      "Driver arrangements",
      "Vehicle coordination for specific dates",
      "Multi-stop or multi-day logistics",
    ],
    coordinates:
      "We arrange and coordinate with vetted transportation providers.",
    limitations:
      "We coordinate; we do not operate a fleet. Vehicle and driver availability depends on local capacity and advance notice.",
  },
  {
    title: "Local Execution",
    what: "Physical tasks that require someone present in the Philippines.",
    common: [
      "Errands and document-related tasks",
      "Inspections and pickups",
      "Delivery coordination",
      "On-site verification or presence",
    ],
    coordinates:
      "We assign verified representatives to complete legitimate, scoped tasks.",
    limitations:
      "We do not handle illegal activities, cash handling beyond agreed arrangements, or tasks that require specialized licenses we do not hold.",
  },
  {
    title: "Relocation & Extended Stay",
    what: "Practical support for people preparing to move, stay longer, or establish themselves.",
    common: [
      "Housing coordination and viewings",
      "Local setup (utilities, connectivity)",
      "Transportation and appointment logistics",
      "Orientation and practical guidance",
    ],
    coordinates:
      "We help reduce the friction of settling in by handling local coordination.",
    limitations:
      "We do not provide immigration, visa, or legal relocation services. Those require appropriate licensed professionals.",
  },
];

export const metadata = {
  title: "Services",
  description:
    "Professional coordination and practical assistance across the Philippines—travel, business, property, transportation, local execution, and relocation.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="pb-16">
        <div className="container-narrow text-center">
          <h1 className="heading-xl mb-4">Local capability, when you need it.</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Professional coordination and practical assistance across the
            Philippines.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-16">
        <div className="container-wide space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-warm-200 last:border-0"
            >
              <div className="lg:col-span-4">
                <span className="text-sm font-mono text-gold font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="heading-md mt-2 mb-4">{service.title}</h2>
                <p className="body">{service.what}</p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-navy mb-3 tracking-wide uppercase">
                    Common requests
                  </h3>
                  <ul className="space-y-2">
                    {service.common.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground/75 flex gap-2"
                      >
                        <span className="text-gold mt-1">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-navy mb-2 tracking-wide uppercase">
                      What Astra coordinates
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {service.coordinates}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy mb-2 tracking-wide uppercase">
                      What Astra does not guarantee
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {service.limitations}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-warm-100/60">
        <div className="container-narrow text-center">
          <p className="eyebrow mb-3">Don&apos;t see your requirement?</p>
          <h2 className="heading-md mb-4">Just ask Astra.</h2>
          <p className="body max-w-lg mx-auto mb-8">
            If it requires someone on the ground in the Philippines, tell us
            what you&apos;re trying to accomplish.
          </p>
          <Link href="/request" className="btn-primary">
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
