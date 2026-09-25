import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Concierge Services in the Philippines | Astra",
  description:
    "On-the-ground coordination across the Philippines: travel assistance, business concierge, property support, transportation, local errands, and relocation help — with clear limits on what we do and don’t handle.",
  openGraph: {
    title: "Concierge Services in the Philippines | Astra",
    description:
      "Local capability when remote tools aren’t enough. Travel, business, property, transport, errands, and relocation coordination.",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    id: "travel",
    title: "Travel & Local Assistance",
    what: "Practical on-the-ground support for visitors who need more than a booking confirmation.",
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
    id: "business",
    title: "Business Concierge",
    what: "Local execution for professionals and organizations that don’t maintain a permanent presence.",
    common: [
      "Meeting and appointment coordination",
      "Local research and sourcing",
      "Document pickup or delivery coordination",
      "Vendor or service provider introductions",
    ],
    coordinates:
      "We act as your local coordinator — scoping requirements, managing logistics, and keeping you informed.",
    limitations:
      "We do not provide legal, accounting, or regulated professional advice. We coordinate practical tasks; we are not a substitute for licensed professionals in specialized fields.",
  },
  {
    id: "property",
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
    id: "transportation",
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
    id: "local-execution",
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
    id: "relocation",
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

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Astra Concierge Services",
    provider: {
      "@type": "Organization",
      name: "Astra Concierge Philippines",
      parentOrganization: {
        "@type": "Organization",
        name: "Astra Group of Companies, Inc.",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Philippines",
    },
    description:
      "On-the-ground coordination and practical assistance across the Philippines for travel, business, property, transportation, local tasks, and relocation.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Astra Concierge Services",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.what,
        },
        position: i + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-28 pb-0">
        {/* Hero */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">What we coordinate</p>
              <h1 className="heading-xl mb-5">
                Local capability, when remote tools aren&apos;t enough.
              </h1>
              <p className="body-lg text-foreground/70 max-w-2xl">
                Professional coordination across the Philippines — with clear
                scope, verified people on the ground, and honest limits on what
                we will and will not handle.
              </p>
            </div>

            {/* Jump links */}
            <nav
              aria-label="Service categories"
              className="mt-10 sm:mt-12 flex flex-wrap gap-2"
            >
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm font-medium text-navy/70 bg-warm-100 hover:bg-navy hover:text-white px-3.5 py-1.5 rounded-full transition-colors"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Services */}
        <section className="pb-16 sm:pb-20" aria-label="Service details">
          <div className="container-wide space-y-0">
            {services.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 grid lg:grid-cols-12 gap-8 lg:gap-12 py-12 sm:py-14 lg:py-16 border-t border-warm-200 first:border-t-0"
              >
                {/* Left: identity */}
                <div className="lg:col-span-4">
                  <span className="inline-block text-xs font-mono font-semibold tracking-wider text-gold mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="body text-foreground/70">{service.what}</p>
                </div>

                {/* Right: details */}
                <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8 lg:gap-10">
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-3">
                      Common requests
                    </h3>
                    <ul className="space-y-2.5">
                      {service.common.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-foreground/75 flex gap-2.5 leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-2">
                        What Astra coordinates
                      </h3>
                      <p className="text-sm text-foreground/75 leading-relaxed">
                        {service.coordinates}
                      </p>
                    </div>
                    <div className="rounded-xl bg-warm-50 border border-warm-200 p-4">
                      <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-navy/50 mb-2">
                        What we do not guarantee
                      </h3>
                      <p className="text-sm text-foreground/65 leading-relaxed">
                        {service.limitations}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy text-white">
          <div className="container-narrow text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-4">
              Don&apos;t see your requirement?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Just ask Astra.
            </h2>
            <p className="text-base sm:text-lg text-white/65 max-w-lg mx-auto mb-8 leading-relaxed">
              If it requires someone on the ground in the Philippines, tell us
              what you&apos;re trying to accomplish. We&apos;ll say clearly
              whether we can help.
            </p>
            <Link
              href="/request"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-navy font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Tell us what you need
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
